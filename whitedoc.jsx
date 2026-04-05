import { useState, useRef, useEffect, useCallback } from "react";
import {
  ChevronLeft, ChevronsUpDown, PenTool, Plus, MoreHorizontal,
  Search, Clock, Folder, ChevronRight, ChevronDown, Inbox,
  LogOut, Settings, User, CornerDownRight, MoreVertical,
  GripVertical, Trash2, ArrowRight, X, Layout,
} from "lucide-react";

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

const BLOCK_DEFS = [
  { type:"paragraph", label:"Text",      icon:"T",    desc:"Plain text paragraph",       shortcut:"text"  },
  { type:"h1",        label:"Heading 1", icon:"H1",   desc:"Large section heading",       shortcut:"h1"    },
  { type:"h2",        label:"Heading 2", icon:"H2",   desc:"Medium section heading",      shortcut:"h2"    },
  { type:"h3",        label:"Heading 3", icon:"H3",   desc:"Small section heading",       shortcut:"h3"    },
  { type:"bullet",    label:"Bullet",    icon:"•",    desc:"Simple bulleted list",         shortcut:"ul"    },
  { type:"numbered",  label:"Numbered",  icon:"1.",   desc:"Numbered list",               shortcut:"ol"    },
  { type:"todo",      label:"To-do",     icon:"☐",    desc:"Task with checkbox",           shortcut:"todo"  },
  { type:"quote",     label:"Quote",     icon:'"',    desc:"Callout or block quote",       shortcut:"quote" },
  { type:"code",      label:"Code",      icon:"</>",  desc:"Code snippet",                shortcut:"code"  },
  { type:"divider",   label:"Divider",   icon:"—",    desc:"Horizontal divider",           shortcut:"div"   },
];

const CARD_COLORS = {
  paragraph: { bg:"#ffffff", border:"#e0e0e0", label:"#555" },
  h1:        { bg:"#eff6ff", border:"#bfdbfe", label:"#1d4ed8" },
  h2:        { bg:"#eff6ff", border:"#bfdbfe", label:"#1d4ed8" },
  h3:        { bg:"#eff6ff", border:"#bfdbfe", label:"#1d4ed8" },
  bullet:    { bg:"#f0fdf4", border:"#bbf7d0", label:"#15803d" },
  numbered:  { bg:"#f0fdf4", border:"#bbf7d0", label:"#15803d" },
  todo:      { bg:"#fffbeb", border:"#fde68a", label:"#b45309" },
  quote:     { bg:"#faf5ff", border:"#e9d5ff", label:"#7c3aed" },
  code:      { bg:"#1e1e2e", border:"#3b3b5c", label:"#a78bfa" },
};

const uid = () => Math.random().toString(36).slice(2, 9);
const newBlock = (type = "paragraph") => ({ id: uid(), type, content: "", checked: false });

if (!document.getElementById("wd-base")) {
  const s = document.createElement("style");
  s.id = "wd-base";
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,700&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    .wd-row:hover        { background: #f5f5f5 !important; }
    .wd-card:hover       { background: #f7f7f7 !important; border-color: #ddd !important; }
    .wd-ib:hover         { background: #f0f0f0 !important; }
    .wd-dd:hover         { background: #f5f5f5 !important; }
    .wd-tree:hover       { background: #f5f5f5 !important; }
    .wd-slash:hover      { background: #f0f0f0 !important; }
    .wd-block-row:hover .wd-block-actions { opacity: 1 !important; }
    .wd-block-row:hover .wd-block-handle  { opacity: 1 !important; }
    textarea::placeholder { color: #ccc; }
  `;
  document.head.appendChild(s);
}

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [route,    setRoute]    = useState("home");
  const [pages,    setPages]    = useState([
    { id:"1", title:"Product Launch",        parentId:null, emoji:"🚀", updatedAt:"2 hours ago"  },
    { id:"2", title:"Marketing Strategy",    parentId:"1",  emoji:"📣", updatedAt:"5 hours ago"  },
    { id:"3", title:"Social Media Assets",   parentId:"2",  emoji:"🎨", updatedAt:"Yesterday"    },
    { id:"4", title:"Technical Architecture",parentId:null, emoji:"⚙️", updatedAt:"3 days ago"   },
    { id:"5", title:"Database Schema",       parentId:"4",  emoji:"🗄️", updatedAt:"1 week ago"   },
    { id:"6", title:"Q4 Roadmap",            parentId:null, emoji:"🗺️", updatedAt:"2 days ago"   },
    { id:"7", title:"Design System",         parentId:null, emoji:"✦",  updatedAt:"4 days ago"   },
    { id:"8", title:"Component Library",     parentId:"7",  emoji:"🧩", updatedAt:"5 days ago"   },
    { id:"9", title:"Brand Guidelines",      parentId:"7",  emoji:"📐", updatedAt:"1 week ago"   },
  ]);
  const [activeId, setActiveId] = useState("3");

  return (
    <div style={{ fontFamily:"'Inter',sans-serif", minHeight:"100vh", background:"#fff", color:"#111" }}>
      {route === "home" ? (
        <HomeView pages={pages} onOpenPage={id => { setActiveId(id); setRoute("workspace"); }}
          onAddPage={() => { const id=uid(); setPages(p=>[...p,{id,title:"Untitled",parentId:null,emoji:"📄",updatedAt:"Just now"}]); }} />
      ) : (
        <WorkspaceView pageId={activeId} pages={pages}
          onNavigateHome={() => setRoute("home")}
          onSwitchPage={setActiveId}
          onRename={(id,val) => setPages(p=>p.map(x=>x.id===id?{...x,title:val}:x))} />
      )}
    </div>
  );
}

// ─── HOME VIEW ────────────────────────────────────────────────────────────────

function HomeView({ pages, onOpenPage, onAddPage }) {
  const [search,      setSearch]      = useState("");
  const [accountOpen, setAccountOpen] = useState(false);
  const [inboxOpen,   setInboxOpen]   = useState(false);
  const [moreOpen,    setMoreOpen]    = useState(false);
  const [recentOpen,  setRecentOpen]  = useState(true);
  const [allOpen,     setAllOpen]     = useState(true);
  const accountRef = useRef(); const inboxRef = useRef(); const moreRef = useRef();

  const roots   = pages.filter(p => p.parentId === null);
  const results = search.trim() ? pages.filter(p => p.title.toLowerCase().includes(search.toLowerCase())) : null;

  useEffect(() => {
    const h = e => {
      if (accountRef.current && !accountRef.current.contains(e.target)) setAccountOpen(false);
      if (inboxRef.current   && !inboxRef.current.contains(e.target))   setInboxOpen(false);
      if (moreRef.current    && !moreRef.current.contains(e.target))    setMoreOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  return (
    <div style={{ display:"flex", flexDirection:"column", minHeight:"100vh" }}>
      <nav style={{ height:52, borderBottom:"1px solid #ebebeb", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 20px", background:"#fff", position:"sticky", top:0, zIndex:20 }}>
        {/* Account */}
        <div ref={accountRef} style={{ position:"relative" }}>
          <button onClick={() => setAccountOpen(o=>!o)} className="wd-ib"
            style={{ display:"flex", alignItems:"center", gap:8, padding:"5px 10px", borderRadius:7, border:"none", background:accountOpen?"#f0f0f0":"transparent", cursor:"pointer", fontFamily:"inherit" }}>
            <div style={{ width:26, height:26, borderRadius:7, background:"#111", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <span style={{ fontFamily:"'Playfair Display',serif", fontStyle:"italic", fontWeight:700, fontSize:15, color:"#fff", lineHeight:1 }}>J</span>
            </div>
            <span style={{ fontSize:13, fontWeight:600, color:"#111" }}>Jim</span>
            <ChevronDown size={12} style={{ color:"#bbb" }} />
          </button>
          {accountOpen && (
            <div style={{ position:"absolute", top:"calc(100% + 6px)", left:0, width:220, background:"#fff", border:"1px solid #e8e8e8", borderRadius:10, boxShadow:"0 8px 24px rgba(0,0,0,.1)", padding:6, zIndex:50 }}>
              <div style={{ padding:"8px 10px 12px", borderBottom:"1px solid #f3f3f3", marginBottom:6, display:"flex", alignItems:"center", gap:10 }}>
                <div style={{ width:34, height:34, borderRadius:9, background:"#111", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <span style={{ fontFamily:"'Playfair Display',serif", fontStyle:"italic", fontWeight:700, fontSize:19, color:"#fff", lineHeight:1 }}>J</span>
                </div>
                <div><div style={{ fontSize:13, fontWeight:600 }}>Jim</div><div style={{ fontSize:11, color:"#aaa" }}>jim@whitedoc.com</div></div>
              </div>
              {[{icon:<User size={13}/>,label:"Profile"},{icon:<Settings size={13}/>,label:"Settings"}].map(({icon,label})=>(
                <button key={label} className="wd-dd" style={{ width:"100%",display:"flex",alignItems:"center",gap:10,padding:"8px 10px",background:"transparent",border:"none",borderRadius:7,cursor:"pointer",fontSize:13,color:"#333",fontFamily:"inherit" }}>
                  <span style={{ color:"#aaa" }}>{icon}</span>{label}
                </button>
              ))}
              <div style={{ borderTop:"1px solid #f3f3f3", marginTop:6, paddingTop:6 }}>
                <button className="wd-dd" style={{ width:"100%",display:"flex",alignItems:"center",gap:10,padding:"8px 10px",background:"transparent",border:"none",borderRadius:7,cursor:"pointer",fontSize:13,color:"#e53e3e",fontFamily:"inherit" }}>
                  <LogOut size={13}/>Sign out
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right actions */}
        <div style={{ display:"flex", alignItems:"center", gap:6 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, background:"#f5f5f5", border:"1px solid #e8e8e8", borderRadius:8, padding:"0 12px", height:34, width:200 }}>
            <Search size={13} style={{ color:"#aaa", flexShrink:0 }}/>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search…"
              style={{ flex:1, background:"none", border:"none", outline:"none", fontSize:13, color:"#111", fontFamily:"inherit" }}/>
          </div>
          <IconBtn title="New page" onClick={onAddPage}><Plus size={15}/></IconBtn>
          <div ref={inboxRef} style={{ position:"relative" }}>
            <button onClick={()=>setInboxOpen(o=>!o)} className="wd-ib" title="Inbox"
              style={{ width:34,height:34,borderRadius:8,border:"1px solid #e8e8e8",background:inboxOpen?"#f0f0f0":"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#555",position:"relative" }}>
              <Inbox size={15}/>
              <span style={{ position:"absolute",top:7,right:7,width:6,height:6,borderRadius:"50%",background:"#3b82f6",border:"2px solid #fff" }}/>
            </button>
            {inboxOpen && (
              <div style={{ position:"absolute",top:"calc(100% + 6px)",right:0,width:300,background:"#fff",border:"1px solid #e8e8e8",borderRadius:10,boxShadow:"0 8px 24px rgba(0,0,0,.1)",zIndex:50,overflow:"hidden" }}>
                <div style={{ padding:"12px 16px 10px",borderBottom:"1px solid #f3f3f3",display:"flex",alignItems:"center",justifyContent:"space-between" }}>
                  <span style={{ fontSize:13,fontWeight:600 }}>Inbox</span>
                  <span style={{ fontSize:11,color:"#3b82f6",fontWeight:500,cursor:"pointer" }}>Mark all read</span>
                </div>
                {[{text:"Ana commented on Marketing Strategy",time:"2m ago",unread:true},{text:"Sam shared Database Schema with you",time:"1h ago",unread:true},{text:"Product Launch was updated",time:"3h ago",unread:false}].map((n,i,a)=>(
                  <div key={i} className="wd-row" style={{ display:"flex",alignItems:"flex-start",gap:10,padding:"10px 16px",borderBottom:i<a.length-1?"1px solid #f7f7f7":"none",cursor:"pointer",background:n.unread?"#fafcff":"#fff" }}>
                    <div style={{ width:7,height:7,borderRadius:"50%",background:n.unread?"#3b82f6":"transparent",flexShrink:0,marginTop:5 }}/>
                    <div style={{ flex:1 }}><p style={{ fontSize:13,color:"#333",lineHeight:1.4 }}>{n.text}</p><p style={{ fontSize:11,color:"#aaa",marginTop:3 }}>{n.time}</p></div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div ref={moreRef} style={{ position:"relative" }}>
            <button onClick={()=>setMoreOpen(o=>!o)} className="wd-ib"
              style={{ width:34,height:34,borderRadius:8,border:"1px solid #e8e8e8",background:moreOpen?"#f0f0f0":"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#555" }}>
              <MoreHorizontal size={15}/>
            </button>
            {moreOpen && (
              <div style={{ position:"absolute",top:"calc(100% + 6px)",right:0,width:180,background:"#fff",border:"1px solid #e8e8e8",borderRadius:10,boxShadow:"0 8px 24px rgba(0,0,0,.1)",padding:6,zIndex:50 }}>
                {["Import","Export all","Keyboard shortcuts","Help"].map(l=>(
                  <button key={l} className="wd-dd" style={{ width:"100%",textAlign:"left",padding:"8px 10px",background:"transparent",border:"none",borderRadius:7,cursor:"pointer",fontSize:13,color:"#333",fontFamily:"inherit" }}>{l}</button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      <div style={{ maxWidth:960, width:"100%", margin:"0 auto", padding:"40px 24px 80px" }}>
        {results ? (
          <div>
            <p style={{ fontSize:12,color:"#888",fontWeight:500,marginBottom:12 }}>{results.length} result{results.length!==1?"s":""} for "{search}"</p>
            {results.length===0
              ? <div style={{ padding:"40px 0",textAlign:"center",color:"#ccc",fontSize:14 }}>No pages found.</div>
              : results.map(p=><SearchRow key={p.id} page={p} onOpen={onOpenPage}/>)
            }
          </div>
        ) : (
          <>
            <section style={{ marginBottom:40 }}>
              <SectionHeader icon={<Clock size={13}/>} text="Recently updated" open={recentOpen} onToggle={()=>setRecentOpen(o=>!o)}/>
              {recentOpen && (
                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))", gap:10 }}>
                  {pages.slice(0,4).map(p=><RecentCard key={p.id} page={p} onOpen={onOpenPage}/>)}
                </div>
              )}
            </section>
            <section>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:allOpen?14:0 }}>
                <SectionHeader icon={<Folder size={13}/>} text="All pages" open={allOpen} onToggle={()=>setAllOpen(o=>!o)} inline/>
                {allOpen && <button onClick={onAddPage} className="wd-ib" style={{ display:"flex",alignItems:"center",gap:5,padding:"5px 12px",borderRadius:7,border:"1px solid #e8e8e8",background:"#fff",cursor:"pointer",color:"#555",fontSize:12,fontWeight:500,fontFamily:"inherit" }}><Plus size={12}/>Add page</button>}
              </div>
              {allOpen && (
                <div style={{ border:"1px solid #ebebeb", borderRadius:10, overflow:"hidden" }}>
                  <div style={{ display:"grid",gridTemplateColumns:"1fr 130px 28px",padding:"7px 14px",background:"#fafafa",borderBottom:"1px solid #ebebeb" }}>
                    <span style={{ fontSize:11,fontWeight:600,color:"#bbb",textTransform:"uppercase",letterSpacing:"0.05em" }}>Title</span>
                    <span style={{ fontSize:11,fontWeight:600,color:"#bbb",textTransform:"uppercase",letterSpacing:"0.05em",textAlign:"right" }}>Updated</span>
                    <span/>
                  </div>
                  {roots.map((p,i)=><PageTreeRow key={p.id} page={p} pages={pages} onOpen={onOpenPage} depth={0} last={i===roots.length-1}/>)}
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </div>
  );
}

function IconBtn({ children, onClick, title, active }) {
  return (
    <button onClick={onClick} className="wd-ib" title={title}
      style={{ width:34,height:34,borderRadius:8,border:"1px solid #e8e8e8",background:active?"#f0f0f0":"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#555" }}>
      {children}
    </button>
  );
}

function SectionHeader({ icon, text, open, onToggle, inline }) {
  const btn = (
    <button onClick={onToggle} className="wd-ib"
      style={{ display:"inline-flex",alignItems:"center",gap:6,padding:"4px 6px",borderRadius:6,border:"none",background:"transparent",cursor:"pointer",fontFamily:"inherit",marginBottom:inline?0:(open?14:0) }}>
      <span style={{ color:"#bbb",display:"flex" }}>{icon}</span>
      <span style={{ fontSize:12,fontWeight:600,color:"#999",textTransform:"uppercase",letterSpacing:"0.06em" }}>{text}</span>
      <ChevronDown size={12} style={{ color:"#bbb",transform:open?"none":"rotate(-90deg)",transition:"transform 0.15s" }}/>
    </button>
  );
  return inline ? btn : <div>{btn}</div>;
}

function PageTreeRow({ page, pages, onOpen, depth, last }) {
  const [expanded, setExpanded] = useState(true);
  const children = pages.filter(p => p.parentId === page.id);
  const isLast = last && (!children.length || !expanded);
  return (
    <div>
      <div className="wd-tree" style={{ display:"grid",gridTemplateColumns:"1fr 130px 28px",alignItems:"center",paddingLeft:14+depth*20,paddingRight:8,borderBottom:isLast?"none":"1px solid #f3f3f3",cursor:"pointer",minHeight:38 }}>
        <div style={{ display:"flex",alignItems:"center",gap:6,minWidth:0 }} onClick={()=>onOpen(page.id)}>
          {children.length>0 ? (
            <button onClick={e=>{e.stopPropagation();setExpanded(o=>!o)}} style={{ background:"none",border:"none",cursor:"pointer",padding:2,color:"#ccc",display:"flex",flexShrink:0,borderRadius:4 }}>
              <ChevronRight size={13} style={{ transform:expanded?"rotate(90deg)":"none",transition:"transform 0.15s" }}/>
            </button>
          ) : <span style={{ width:17,flexShrink:0 }}/>}
          {depth>0 && <CornerDownRight size={12} style={{ color:"#ddd",flexShrink:0 }}/>}
          <span style={{ fontSize:15,flexShrink:0 }}>{page.emoji}</span>
          <span style={{ fontSize:13,fontWeight:depth===0?500:400,color:"#111",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}>{page.title}</span>
          {children.length>0 && <span style={{ fontSize:11,color:"#ccc",flexShrink:0,marginLeft:4 }}>{children.length}</span>}
        </div>
        <span style={{ fontSize:12,color:"#bbb",textAlign:"right",paddingRight:8 }} onClick={()=>onOpen(page.id)}>{page.updatedAt}</span>
        <button className="wd-ib" onClick={e=>e.stopPropagation()} style={{ width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center",border:"none",background:"transparent",cursor:"pointer",borderRadius:5,color:"#ccc" }}>
          <MoreHorizontal size={13}/>
        </button>
      </div>
      {expanded && children.map((c,i)=><PageTreeRow key={c.id} page={c} pages={pages} onOpen={onOpen} depth={depth+1} last={last&&i===children.length-1}/>)}
    </div>
  );
}

function RecentCard({ page, onOpen }) {
  return (
    <button className="wd-card" onClick={()=>onOpen(page.id)}
      style={{ display:"flex",flexDirection:"column",alignItems:"flex-start",padding:16,borderRadius:10,background:"#fff",border:"1px solid #ebebeb",cursor:"pointer",textAlign:"left",transition:"all 0.12s",fontFamily:"inherit",width:"100%" }}>
      <span style={{ fontSize:22,marginBottom:10 }}>{page.emoji}</span>
      <span style={{ fontSize:13,fontWeight:600,color:"#111",marginBottom:4 }}>{page.title}</span>
      <span style={{ fontSize:11,color:"#bbb" }}>{page.updatedAt}</span>
    </button>
  );
}

function SearchRow({ page, onOpen }) {
  return (
    <button className="wd-row" onClick={()=>onOpen(page.id)}
      style={{ display:"flex",alignItems:"center",gap:10,padding:"10px 12px",borderRadius:8,background:"#fff",border:"none",cursor:"pointer",textAlign:"left",fontFamily:"inherit",width:"100%",transition:"background 0.1s" }}>
      <span style={{ fontSize:18 }}>{page.emoji}</span>
      <span style={{ flex:1,fontSize:14,fontWeight:500,color:"#111" }}>{page.title}</span>
      <span style={{ fontSize:12,color:"#bbb" }}>{page.updatedAt}</span>
      <ChevronRight size={13} style={{ color:"#ccc" }}/>
    </button>
  );
}

// ─── WORKSPACE VIEW ───────────────────────────────────────────────────────────

function WorkspaceView({ pageId, pages, onNavigateHome, onSwitchPage, onRename }) {
  const [viewMode,    setViewMode]    = useState("both");
  const [showCrumb,   setShowCrumb]   = useState(false);
  const [boardCards,  setBoardCards]  = useState([]);

  const getPath = (id, path=[]) => {
    const p = pages.find(x=>x.id===id); if(!p) return path;
    return p.parentId ? getPath(p.parentId,[p,...path]) : [p,...path];
  };
  const crumbs  = getPath(pageId);
  const current = crumbs[crumbs.length-1] || { title:"Untitled" };

  const handleSendToBoard = (block) => {
    setBoardCards(prev => [...prev, {
      id: uid(), type: block.type, content: block.content, checked: block.checked,
      x: 24 + (prev.length % 5) * 28,
      y: 24 + (prev.length % 6) * 36,
    }]);
  };

  const handleWheel = e => {
    if (crumbs.length<=1) return; e.preventDefault();
    const i = crumbs.findIndex(p=>p.id===pageId);
    onSwitchPage(e.deltaY>0 ? crumbs[(i+1)%crumbs.length].id : crumbs[(i-1+crumbs.length)%crumbs.length].id);
  };

  const ibtn = { width:28,height:28,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:6,border:"none",background:"transparent",cursor:"pointer",color:"#888" };

  return (
    <div style={{ height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column",background:"#fff" }}>
      {/* Header */}
      <header style={{ height:44,borderBottom:"1px solid #ebebeb",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 12px",background:"#fff",zIndex:10,flexShrink:0,position:"relative" }}>
        <div style={{ display:"flex",alignItems:"center",gap:4 }}>
          <button onClick={onNavigateHome} style={ibtn}><ChevronLeft size={15}/></button>
          <span style={{ fontSize:13,fontWeight:600,color:"#111",maxWidth:220,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}>{current.title}</span>
        </div>
        <div style={{ position:"absolute",left:"50%",transform:"translateX(-50%)",display:"flex",gap:4 }}>
          <div style={{ display:"flex",background:"#f5f5f5",borderRadius:7,border:"1px solid #e8e8e8",padding:2 }}>
            {[["docs","Docs"],["both","Split"],["draw","Draw"]].map(([m,label])=>(
              <button key={m} onClick={()=>setViewMode(m)} style={{ padding:"4px 12px",borderRadius:5,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:500,background:viewMode===m?"#fff":"transparent",color:viewMode===m?"#111":"#999",boxShadow:viewMode===m?"0 1px 3px rgba(0,0,0,.08)":"none",transition:"all 0.1s" }}>{label}</button>
            ))}
          </div>
          <div style={{ position:"relative",width:30,height:30,display:"flex",alignItems:"center",justifyContent:"center",background:"#f5f5f5",borderRadius:7,border:"1px solid #e8e8e8",cursor:"ns-resize" }}
            onMouseEnter={()=>setShowCrumb(true)} onMouseLeave={()=>setShowCrumb(false)} onWheel={handleWheel}>
            <ChevronsUpDown size={13} style={{ color:"#999" }}/>
            {showCrumb && (
              <div style={{ position:"absolute",top:"calc(100% + 6px)",right:0,width:220,background:"#fff",border:"1px solid #e8e8e8",borderRadius:8,boxShadow:"0 8px 24px rgba(0,0,0,.1)",padding:6,zIndex:50 }}>
                <p style={{ fontSize:10,fontWeight:600,color:"#bbb",textTransform:"uppercase",letterSpacing:"0.08em",padding:"4px 8px 8px",borderBottom:"1px solid #f3f3f3",marginBottom:4 }}>Page hierarchy</p>
                {crumbs.map((c,i)=>(
                  <button key={c.id} onClick={()=>onSwitchPage(c.id)} style={{ width:"100%",textAlign:"left",padding:"7px 8px",background:c.id===pageId?"#f5f5f5":"transparent",border:"none",borderRadius:6,cursor:"pointer",fontSize:13,fontWeight:i===crumbs.length-1?600:400,color:i===crumbs.length-1?"#111":"#666",fontFamily:"inherit" }}>
                    {c.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div style={{ display:"flex",gap:2 }}>
          <button style={ibtn}><Search size={14}/></button>
          <button style={ibtn}><MoreVertical size={14}/></button>
        </div>
      </header>

      <main style={{ flex:1, display:"flex", overflow:"hidden" }}>
        {(viewMode==="docs"||viewMode==="both") && (
          <div style={{ width:viewMode==="docs"?"100%":"50%", borderRight:"1px solid #ebebeb", overflow:"hidden", display:"flex", flexDirection:"column", background:"#fff" }}>
            <BlockEditor
              title={current.title}
              onRename={val=>onRename(pageId,val)}
              onSendToBoard={handleSendToBoard}
            />
          </div>
        )}
        {(viewMode==="draw"||viewMode==="both") && (
          <div style={{ width:viewMode==="draw"?"100%":"50%", position:"relative", background:"#fafafa" }}>
            <WhiteboardCanvas
              boardCards={boardCards}
              setBoardCards={setBoardCards}
            />
          </div>
        )}
      </main>
    </div>
  );
}

// ─── BLOCK EDITOR ─────────────────────────────────────────────────────────────

function BlockEditor({ title, onRename, onSendToBoard }) {
  const [blocks,  setBlocks]  = useState([newBlock("paragraph")]);
  const [slash,   setSlash]   = useState(null); // { id, filter }
  const [hoverId, setHoverId] = useState(null);
  const [dragId,  setDragId]  = useState(null);
  const [dropId,  setDropId]  = useState(null);
  const refs = useRef({});

  const focusBlock = useCallback((id, pos="end") => {
    requestAnimationFrame(() => {
      const el = refs.current[id]; if (!el) return;
      el.focus();
      const len = el.value.length;
      el.setSelectionRange(pos==="start"?0:len, pos==="start"?0:len);
    });
  }, []);

  const update  = (id, u) => setBlocks(p => p.map(b => b.id===id ? {...b,...u} : b));
  const remove  = useCallback((id) => {
    setBlocks(prev => {
      if (prev.length===1) { const nb=newBlock(); return [nb]; }
      const i = prev.findIndex(b=>b.id===id);
      const prevId = prev[i-1]?.id;
      const next = prev.filter(b=>b.id!==id);
      if (prevId) focusBlock(prevId);
      return next;
    });
  }, [focusBlock]);

  const insertAfter = useCallback((id, type="paragraph") => {
    const nb = newBlock(type==="divider"?"paragraph":type);
    setBlocks(prev => {
      const i = prev.findIndex(b=>b.id===id);
      const n = [...prev]; n.splice(i+1,0,nb); return n;
    });
    focusBlock(nb.id);
  }, [focusBlock]);

  const sendToBoard = (id) => {
    const b = blocks.find(x=>x.id===id);
    if (!b || b.type==="divider" || !b.content.trim()) return;
    onSendToBoard(b);
    remove(id);
  };

  const handleKeyDown = (e, id) => {
    const b = blocks.find(x=>x.id===id); if (!b) return;
    const el = refs.current[id];
    const idx = blocks.findIndex(x=>x.id===id);

    if (e.key==="Enter" && !e.shiftKey) {
      e.preventDefault(); setSlash(null);
      const nextType = ["h1","h2","h3"].includes(b.type)?"paragraph":b.type;
      insertAfter(id, nextType);
    }
    if (e.key==="Backspace" && b.content==="") {
      e.preventDefault(); setSlash(null);
      if (b.type!=="paragraph") update(id,{type:"paragraph"});
      else remove(id);
    }
    if (e.key==="Escape") setSlash(null);
    if (e.key==="ArrowUp" && el?.selectionStart===0 && idx>0) {
      e.preventDefault(); focusBlock(blocks[idx-1].id);
    }
    if (e.key==="ArrowDown" && el?.selectionStart===el?.value.length && idx<blocks.length-1) {
      e.preventDefault(); focusBlock(blocks[idx+1].id,"start");
    }
  };

  const handleChange = (e, id) => {
    const val = e.target.value;
    update(id,{content:val});
    const el = refs.current[id];
    if (el) { el.style.height="auto"; el.style.height=el.scrollHeight+"px"; }
    if (val==="/") setSlash({id,filter:""});
    else if (val.startsWith("/") && slash?.id===id) setSlash({id,filter:val.slice(1).toLowerCase()});
    else if (slash?.id===id) setSlash(null);
  };

  const applySlash = (blockId, type) => {
    if (type==="divider") { update(blockId,{type:"divider",content:""}); setSlash(null); return; }
    update(blockId,{type,content:""}); setSlash(null); focusBlock(blockId);
  };

  const onDragStart = (e,id) => { setDragId(id); e.dataTransfer.effectAllowed="move"; };
  const onDragOver  = (e,id) => { e.preventDefault(); setDropId(id); };
  const onDrop      = (e,id) => {
    e.preventDefault();
    if (!dragId||dragId===id) { setDragId(null);setDropId(null);return; }
    setBlocks(prev=>{
      const fi=prev.findIndex(b=>b.id===dragId), ti=prev.findIndex(b=>b.id===id);
      const n=[...prev]; const [item]=n.splice(fi,1); n.splice(ti,0,item); return n;
    });
    setDragId(null);setDropId(null);
  };
  const onDragEnd = ()=>{setDragId(null);setDropId(null);};

  const filteredDefs = slash
    ? BLOCK_DEFS.filter(d=>d.label.toLowerCase().includes(slash.filter)||d.shortcut.includes(slash.filter)||d.type.includes(slash.filter))
    : [];

  // Compute numbered list indices
  const getNumIndex = (idx) => {
    let count = 0;
    for (let i = idx; i >= 0; i--) {
      if (blocks[i].type==="numbered") count++;
      else break;
    }
    return count;
  };

  return (
    <div style={{ height:"100%",overflowY:"auto",paddingBottom:80 }}>
      <div style={{ padding:"48px 56px 0" }}>
        <input type="text" value={title} onChange={e=>onRename(e.target.value)}
          style={{ width:"100%",fontSize:30,fontWeight:700,border:"none",outline:"none",color:"#111",letterSpacing:"-0.02em",background:"transparent",fontFamily:"inherit",marginBottom:8 }}
          placeholder="Untitled"/>
      </div>
      <div style={{ marginTop:16 }}>
        {blocks.map((block, idx) => (
          <BlockRow key={block.id} block={block} idx={idx}
            isHovered={hoverId===block.id} isDragging={dragId===block.id} isDropTarget={dropId===block.id}
            numIndex={block.type==="numbered"?getNumIndex(idx):0}
            refs={refs} slashOpen={slash?.id===block.id} filteredDefs={filteredDefs}
            onMouseEnter={()=>setHoverId(block.id)} onMouseLeave={()=>setHoverId(null)}
            onChange={e=>handleChange(e,block.id)} onKeyDown={e=>handleKeyDown(e,block.id)}
            onUpdate={u=>update(block.id,u)} onRemove={()=>remove(block.id)}
            onSendToBoard={()=>sendToBoard(block.id)} onAddBelow={()=>insertAfter(block.id)}
            onApplySlash={type=>applySlash(block.id,type)} onCloseSlash={()=>setSlash(null)}
            onDragStart={e=>onDragStart(e,block.id)} onDragOver={e=>onDragOver(e,block.id)}
            onDrop={e=>onDrop(e,block.id)} onDragEnd={onDragEnd}
          />
        ))}
      </div>
      <div style={{ padding:"4px 56px" }}>
        <button onClick={()=>{const nb=newBlock();setBlocks(p=>[...p,nb]);focusBlock(nb.id);}}
          style={{ display:"flex",alignItems:"center",gap:6,padding:"6px 0",background:"none",border:"none",cursor:"pointer",color:"#d0d0d0",fontSize:13,fontFamily:"inherit" }}
          onMouseEnter={e=>e.currentTarget.style.color="#999"} onMouseLeave={e=>e.currentTarget.style.color="#d0d0d0"}>
          <Plus size={14}/> Click to add block
        </button>
      </div>
    </div>
  );
}

// ─── BLOCK ROW ────────────────────────────────────────────────────────────────

function BlockRow({ block, idx, isHovered, isDragging, isDropTarget, numIndex, refs, slashOpen, filteredDefs,
  onMouseEnter, onMouseLeave, onChange, onKeyDown, onUpdate, onRemove, onSendToBoard, onAddBelow,
  onApplySlash, onCloseSlash, onDragStart, onDragOver, onDrop, onDragEnd }) {

  const taStyle = {
    width:"100%", background:"none", border:"none", outline:"none", resize:"none",
    overflow:"hidden", fontFamily:"inherit", padding:0, display:"block",
    ...(block.type==="h1"    && {fontSize:28,fontWeight:700,color:"#111",letterSpacing:"-0.02em",lineHeight:1.3,minHeight:38}),
    ...(block.type==="h2"    && {fontSize:22,fontWeight:600,color:"#111",letterSpacing:"-0.01em",lineHeight:1.4,minHeight:32}),
    ...(block.type==="h3"    && {fontSize:18,fontWeight:600,color:"#111",lineHeight:1.5,minHeight:28}),
    ...(block.type==="quote" && {fontSize:15,fontStyle:"italic",color:"#666",lineHeight:1.7}),
    ...(block.type==="code"  && {fontSize:13,fontFamily:"'Courier New',monospace",color:"#c7254e",lineHeight:1.7}),
    ...(!["h1","h2","h3"].includes(block.type) && !["quote","code"].includes(block.type) && {fontSize:15,color:"#333",lineHeight:1.7}),
    ...(block.type==="todo" && block.checked && {textDecoration:"line-through",color:"#bbb"}),
    ...(block.type==="quote" && {fontSize:15,fontStyle:"italic",color:"#666",lineHeight:1.7}),
  };

  const mtTop = ["h1"].includes(block.type)?24:["h2","h3"].includes(block.type)?16:0;

  const placeholder = {
    paragraph:"Type '/' for commands, or just start writing…",
    h1:"Heading 1", h2:"Heading 2", h3:"Heading 3",
    bullet:"List item", numbered:"List item", todo:"To-do",
    quote:"Empty quote…", code:"// code here",
  }[block.type] || "";

  if (block.type==="divider") {
    return (
      <div className="wd-block-row" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
        style={{ position:"relative", padding:"8px 56px", marginTop:mtTop }}>
        <div style={{ height:1, background:"#e8e8e8", borderRadius:1 }}/>
        <div className="wd-block-actions" style={{ position:"absolute",right:4,top:"50%",transform:"translateY(-50%)",display:"flex",gap:2,opacity:0,transition:"opacity 0.1s",alignItems:"center" }}>
          <ActionBtn onClick={onRemove} danger><Trash2 size={12}/></ActionBtn>
        </div>
      </div>
    );
  }

  return (
    <div className="wd-block-row" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
      style={{ position:"relative", padding:"1px 56px", marginTop:mtTop, opacity:isDragging?0.4:1, background:isDropTarget?"#f8f8ff":"transparent", transition:"background 0.1s" }}
      draggable onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop} onDragEnd={onDragEnd}>

      {/* Left gutter: + and drag handle */}
      <div className="wd-block-handle" style={{ position:"absolute",left:4,top:4,display:"flex",alignItems:"center",gap:1,opacity:0,transition:"opacity 0.1s" }}>
        <button onClick={onAddBelow} style={{ width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center",border:"none",background:"transparent",cursor:"pointer",color:"#ccc",borderRadius:3,fontFamily:"inherit",fontSize:16,lineHeight:1,paddingBottom:1 }}
          onMouseEnter={e=>e.currentTarget.style.color="#555"} onMouseLeave={e=>e.currentTarget.style.color="#ccc"}>+</button>
        <div style={{ width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center",cursor:"grab",color:"#ccc" }}
          onMouseEnter={e=>e.currentTarget.style.color="#555"} onMouseLeave={e=>e.currentTarget.style.color="#ccc"}>
          <GripVertical size={14}/>
        </div>
      </div>

      {/* Content */}
      <div style={{ display:"flex", alignItems:"flex-start", gap:8 }}>
        {/* Prefix */}
        {block.type==="bullet" && <span style={{ fontSize:18,lineHeight:"1.7",color:"#555",flexShrink:0,marginTop:0 }}>•</span>}
        {block.type==="numbered" && <span style={{ fontSize:15,lineHeight:"1.7",color:"#555",flexShrink:0,minWidth:20,textAlign:"right" }}>{numIndex}.</span>}
        {block.type==="todo" && (
          <button onClick={()=>onUpdate({checked:!block.checked})}
            style={{ width:16,height:16,borderRadius:4,border:"1.5px solid",borderColor:block.checked?"#aaa":"#555",background:block.checked?"#555":"transparent",cursor:"pointer",flexShrink:0,marginTop:"4px",display:"flex",alignItems:"center",justifyContent:"center",padding:0 }}>
            {block.checked && <span style={{ color:"#fff",fontSize:10,fontWeight:700,lineHeight:1 }}>✓</span>}
          </button>
        )}

        {/* Textarea wrapper */}
        <div style={{ flex:1, position:"relative",
          ...(block.type==="quote" && {borderLeft:"3px solid #d0d0d0",paddingLeft:12,borderRadius:2}),
          ...(block.type==="code"  && {background:"#f8f8f8",borderRadius:6,padding:"8px 12px",border:"1px solid #ebebeb"}),
        }}>
          <textarea
            ref={el => { refs.current[block.id] = el; }}
            value={block.content}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            rows={1}
            style={{ ...taStyle, minHeight:block.type==="code"?undefined:24 }}
          />
        </div>
      </div>

      {/* Right hover actions */}
      <div className="wd-block-actions" style={{ position:"absolute",right:4,top:4,display:"flex",gap:2,opacity:0,transition:"opacity 0.1s",alignItems:"center" }}>
        <button onClick={onSendToBoard} title="Move to board"
          style={{ display:"flex",alignItems:"center",gap:4,padding:"3px 7px",borderRadius:5,border:"1px solid #e0e0e0",background:"#fff",cursor:"pointer",fontSize:11,fontWeight:500,color:"#555",fontFamily:"inherit",whiteSpace:"nowrap" }}
          onMouseEnter={e=>e.currentTarget.style.background="#f0f0f0"} onMouseLeave={e=>e.currentTarget.style.background="#fff"}>
          <Layout size={11}/> Board
        </button>
        <ActionBtn onClick={onRemove} danger><Trash2 size={12}/></ActionBtn>
      </div>

      {/* Slash menu */}
      {slashOpen && filteredDefs.length > 0 && (
        <div style={{ position:"absolute",top:"100%",left:56,zIndex:100,width:260,background:"#fff",border:"1px solid #e0e0e0",borderRadius:10,boxShadow:"0 8px 32px rgba(0,0,0,.12)",overflow:"hidden",marginTop:2 }}>
          <div style={{ padding:"8px 12px 6px",fontSize:10,fontWeight:600,color:"#bbb",textTransform:"uppercase",letterSpacing:"0.08em",borderBottom:"1px solid #f3f3f3" }}>Turn into</div>
          {filteredDefs.map(d=>(
            <button key={d.type} className="wd-slash"
              onMouseDown={e=>{e.preventDefault();onApplySlash(d.type);}}
              style={{ width:"100%",display:"flex",alignItems:"center",gap:12,padding:"8px 12px",background:"transparent",border:"none",cursor:"pointer",textAlign:"left",fontFamily:"inherit",borderBottom:"1px solid #fafafa" }}>
              <div style={{ width:28,height:28,borderRadius:6,background:"#f5f5f5",border:"1px solid #e8e8e8",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:"#555",flexShrink:0,fontFamily:"monospace" }}>{d.icon}</div>
              <div>
                <div style={{ fontSize:13,fontWeight:500,color:"#111" }}>{d.label}</div>
                <div style={{ fontSize:11,color:"#bbb" }}>{d.desc}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ActionBtn({ onClick, danger, children }) {
  return (
    <button onClick={onClick}
      style={{ width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid #e8e8e8",background:"#fff",borderRadius:5,cursor:"pointer",color:danger?"#e53e3e":"#888" }}
      onMouseEnter={e=>e.currentTarget.style.background="#f5f5f5"} onMouseLeave={e=>e.currentTarget.style.background="#fff"}>
      {children}
    </button>
  );
}

// ─── WHITEBOARD CANVAS ────────────────────────────────────────────────────────

function WhiteboardCanvas({ boardCards, setBoardCards }) {
  const canvasRef    = useRef(null);
  const containerRef = useRef(null);
  const [drawing,    setDrawing]    = useState(false);
  const [drawMode,   setDrawMode]   = useState(true);
  const ctx    = useRef(null);
  const drawnCards = useRef(null); // { id, startX, startY, origX, origY }

  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current, container = containerRef.current;
      if (!canvas||!container) return;
      const rect = container.getBoundingClientRect(), dpr = window.devicePixelRatio||1;
      canvas.width=rect.width*dpr; canvas.height=rect.height*dpr;
      const c = canvas.getContext("2d");
      c.scale(dpr,dpr); c.lineCap="round"; c.lineJoin="round"; c.strokeStyle="#333"; c.lineWidth=1.5;
      ctx.current=c;
    };
    resize(); window.addEventListener("resize",resize); return ()=>window.removeEventListener("resize",resize);
  },[]);

  // Card dragging
  useEffect(()=>{
    const onMove = e => {
      if (!drawnCards.current) return;
      const {id,startX,startY,origX,origY} = drawnCards.current;
      setBoardCards(prev=>prev.map(c=>c.id===id?{...c,x:origX+(e.clientX-startX),y:origY+(e.clientY-startY)}:c));
    };
    const onUp = ()=>{ drawnCards.current=null; };
    window.addEventListener("mousemove",onMove);
    window.addEventListener("mouseup",onUp);
    return ()=>{ window.removeEventListener("mousemove",onMove); window.removeEventListener("mouseup",onUp); };
  },[setBoardCards]);

  const pos = e => { const r=canvasRef.current.getBoundingClientRect(); const s=e.touches?.[0]??e; return {x:s.clientX-r.left,y:s.clientY-r.top}; };
  const startDraw = e => { if(!ctx.current||!drawMode) return; setDrawing(true); const {x,y}=pos(e); ctx.current.beginPath(); ctx.current.moveTo(x,y); };
  const draw      = e => { if(!drawing||!ctx.current) return; const {x,y}=pos(e); ctx.current.lineTo(x,y); ctx.current.stroke(); };
  const stopDraw  = ()=>{ ctx.current?.closePath(); setDrawing(false); };

  const cardOnMouseDown = (e, card) => {
    if (drawMode) return;
    e.stopPropagation();
    drawnCards.current = { id:card.id, startX:e.clientX, startY:e.clientY, origX:card.x, origY:card.y };
  };

  return (
    <div ref={containerRef} style={{ position:"absolute", inset:0, overflow:"hidden" }}>
      {/* Dot grid */}
      <div style={{ position:"absolute",inset:0,pointerEvents:"none",backgroundImage:"radial-gradient(circle,#ccc 1px,transparent 1px)",backgroundSize:"24px 24px" }}/>

      {/* Canvas */}
      <canvas ref={canvasRef} style={{ position:"absolute",inset:0,width:"100%",height:"100%",touchAction:"none",cursor:drawMode?"crosshair":"default" }}
        onMouseDown={startDraw} onMouseMove={draw} onMouseUp={stopDraw} onMouseLeave={stopDraw}
        onTouchStart={e=>{e.preventDefault();startDraw(e.touches[0]);}}
        onTouchMove={e=>{e.preventDefault();draw(e.touches[0]);}}
        onTouchEnd={stopDraw}/>

      {/* Board cards */}
      {boardCards.map(card => {
        const col = CARD_COLORS[card.type] || CARD_COLORS.paragraph;
        const isCode = card.type==="code";
        return (
          <div key={card.id}
            onMouseDown={e=>cardOnMouseDown(e,card)}
            style={{
              position:"absolute", left:card.x, top:card.y,
              width:220, background:col.bg, border:`1px solid ${col.border}`,
              borderRadius:10, boxShadow:"0 4px 16px rgba(0,0,0,.08)",
              cursor:drawMode?"default":"grab", userSelect:"none",
              zIndex:10,
            }}>
            {/* Card header */}
            <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 10px 6px",borderBottom:`1px solid ${col.border}` }}>
              <span style={{ fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:col.label }}>
                {BLOCK_DEFS.find(d=>d.type===card.type)?.label||"Text"}
              </span>
              <button onClick={()=>setBoardCards(p=>p.filter(c=>c.id!==card.id))}
                style={{ width:16,height:16,display:"flex",alignItems:"center",justifyContent:"center",border:"none",background:"transparent",cursor:"pointer",color:"#aaa",borderRadius:3,padding:0 }}
                onMouseEnter={e=>e.currentTarget.style.color="#555"} onMouseLeave={e=>e.currentTarget.style.color="#aaa"}>
                <X size={11}/>
              </button>
            </div>
            {/* Card content */}
            <div style={{ padding:"10px 12px" }}>
              {card.type==="todo" ? (
                <div style={{ display:"flex",alignItems:"flex-start",gap:8 }}>
                  <div style={{ width:14,height:14,borderRadius:3,border:`1.5px solid ${card.checked?"#aaa":"#555"}`,background:card.checked?"#aaa":"transparent",flexShrink:0,marginTop:2 }}>
                    {card.checked && <span style={{ color:"#fff",fontSize:9,fontWeight:700,display:"block",textAlign:"center",lineHeight:"12px" }}>✓</span>}
                  </div>
                  <p style={{ fontSize:13,color:card.checked?"#bbb":"#333",lineHeight:1.5,textDecoration:card.checked?"line-through":"none",wordBreak:"break-word" }}>{card.content||<span style={{color:"#ddd"}}>Empty block</span>}</p>
                </div>
              ) : (
                <p style={{
                  fontSize: card.type==="h1"?18:card.type==="h2"?16:card.type==="h3"?14:13,
                  fontWeight: ["h1","h2","h3"].includes(card.type)?700:400,
                  fontStyle: card.type==="quote"?"italic":"normal",
                  color: isCode?"#a78bfa":"#333",
                  fontFamily: isCode?"'Courier New',monospace":"inherit",
                  lineHeight:1.5, wordBreak:"break-word",
                  borderLeft: card.type==="quote"?"3px solid #d8b4fe":undefined,
                  paddingLeft: card.type==="quote"?8:undefined,
                }}>
                  {card.content||<span style={{color:"#ddd"}}>Empty block</span>}
                </p>
              )}
            </div>
          </div>
        );
      })}

      {/* Toolbar */}
      <div style={{ position:"absolute",bottom:16,right:16,display:"flex",gap:6 }}>
        <button onClick={()=>setDrawMode(true)} title="Draw mode"
          style={{ width:34,height:34,borderRadius:8,border:"1px solid",borderColor:drawMode?"#111":"#ddd",background:drawMode?"#111":"#fff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:drawMode?"#fff":"#888" }}>
          <PenTool size={14}/>
        </button>
        <button onClick={()=>setDrawMode(false)} title="Move cards"
          style={{ width:34,height:34,borderRadius:8,border:"1px solid",borderColor:!drawMode?"#111":"#ddd",background:!drawMode?"#111":"#fff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:!drawMode?"#fff":"#888" }}>
          <Layout size={14}/>
        </button>
      </div>

      {/* Empty state hint */}
      {boardCards.length===0 && (
        <div style={{ position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",pointerEvents:"none" }}>
          <p style={{ fontSize:13,color:"#ccc",textAlign:"center",lineHeight:1.6 }}>
            Hover a block in the editor<br/>and click <strong>Board</strong> to move it here
          </p>
        </div>
      )}
    </div>
  );
}
