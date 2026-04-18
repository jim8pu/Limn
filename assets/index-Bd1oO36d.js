var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=t({store:()=>r,uid:()=>i}),r=new class{state;listeners=[];constructor(){this.state={route:`home`,activeId:`3`,viewMode:`docs`,pages:[{id:`1`,title:`Product Launch`,parentId:null,icon:`rocket`,updatedAt:`2 hours ago`},{id:`2`,title:`Marketing Strategy`,parentId:`1`,icon:`megaphone`,updatedAt:`5 hours ago`},{id:`3`,title:`Social Media Assets`,parentId:`2`,icon:`palette`,updatedAt:`Yesterday`},{id:`4`,title:`Technical Architecture`,parentId:null,icon:`settings`,updatedAt:`3 days ago`},{id:`5`,title:`Database Schema`,parentId:`4`,icon:`database`,updatedAt:`1 week ago`},{id:`6`,title:`Q4 Roadmap`,parentId:null,icon:`map`,updatedAt:`2 days ago`},{id:`7`,title:`Design System`,parentId:null,icon:`sparkles`,updatedAt:`4 days ago`},{id:`8`,title:`Component Library`,parentId:`7`,icon:`puzzle`,updatedAt:`5 days ago`},{id:`9`,title:`Brand Guidelines`,parentId:`7`,icon:`ruler`,updatedAt:`1 week ago`}]}}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}emit(){for(let e of this.listeners)e()}setRoute(e){this.state.route=e,this.emit()}setActiveId(e){this.state.activeId=e,this.state.route=`workspace`,this.emit()}addPage(e){this.state.pages.push(e),this.emit()}renamePage(e,t){let n=this.state.pages.find(t=>t.id===e);n&&(n.title=t,this.emit())}updateIcon(e,t){let n=this.state.pages.find(t=>t.id===e);n&&(n.icon=t,this.emit())}setPageWidth(e,t){let n=this.state.pages.find(t=>t.id===e);n&&(n.pageWidth=t,this.emit())}deletePage(e){let t=[e],n=!0;for(;n;){n=!1;for(let e of this.state.pages)e.parentId&&t.includes(e.parentId)&&!t.includes(e.id)&&(t.push(e.id),n=!0)}this.state.pages=this.state.pages.filter(e=>!t.includes(e.id)),this.state.activeId&&t.includes(this.state.activeId)&&(this.state.activeId=null,this.state.route=`home`),this.emit()}},i=()=>Math.random().toString(36).slice(2,9),a={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`},o=([e,t,n])=>{let r=document.createElementNS(`http://www.w3.org/2000/svg`,e);return Object.keys(t).forEach(e=>{r.setAttribute(e,String(t[e]))}),n?.length&&n.forEach(e=>{let t=o(e);r.appendChild(t)}),r},s=(e,t={})=>o([`svg`,{...a,...t},e]),c=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},l=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),u=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),ee=e=>{let t=u(e);return t.charAt(0).toUpperCase()+t.slice(1)},te=e=>Array.from(e.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),d=e=>typeof e==`string`?e:!e||!e.class?``:e.class&&typeof e.class==`string`?e.class.split(` `):e.class&&Array.isArray(e.class)?e.class:``,f=(e,{nameAttr:t,icons:n,attrs:r})=>{let i=e.getAttribute(t);if(i==null)return;let o=n[ee(i)];if(!o)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);let u=te(e),f=c(u)?{}:{"aria-hidden":`true`},p={...a,"data-lucide":i,...f,...r,...u},m=d(u),h=d(r),g=l(`lucide`,`lucide-${i}`,...m,...h);g&&Object.assign(p,{class:g});let _=s(o,p);return e.parentNode?.replaceChild(_,e)},p=[[`path`,{d:`M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`}]],m=[[`path`,{d:`M12 6v16`}],[`path`,{d:`m19 13 2-1a9 9 0 0 1-18 0l2 1`}],[`path`,{d:`M9 11h6`}],[`circle`,{cx:`12`,cy:`4`,r:`2`}]],h=[[`rect`,{width:`20`,height:`5`,x:`2`,y:`3`,rx:`1`}],[`path`,{d:`M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8`}],[`path`,{d:`M10 12h4`}]],g=[[`path`,{d:`m12 19-7-7 7-7`}],[`path`,{d:`M19 12H5`}]],_=[[`path`,{d:`M5 12h14`}],[`path`,{d:`m12 5 7 7-7 7`}]],ne=[[`path`,{d:`m5 12 7-7 7 7`}],[`path`,{d:`M12 19V5`}]],re=[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`}],[`circle`,{cx:`12`,cy:`8`,r:`6`}]],ie=[[`path`,{d:`M10.268 21a2 2 0 0 0 3.464 0`}],[`path`,{d:`M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`}]],ae=[[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`}]],oe=[[`path`,{d:`M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z`}]],se=[[`path`,{d:`M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z`}],[`path`,{d:`m3.3 7 8.7 5 8.7-5`}],[`path`,{d:`M12 22V12`}]],ce=[[`path`,{d:`M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`}],[`rect`,{width:`20`,height:`14`,x:`2`,y:`6`,rx:`2`}]],le=[[`path`,{d:`M8 2v4`}],[`path`,{d:`M16 2v4`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`}],[`path`,{d:`M3 10h18`}]],ue=[[`path`,{d:`M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z`}],[`circle`,{cx:`12`,cy:`13`,r:`3`}]],de=[[`path`,{d:`m6 9 6 6 6-6`}]],v=[[`path`,{d:`m15 18-6-6 6-6`}]],y=[[`path`,{d:`m9 18 6-6-6-6`}]],b=[[`path`,{d:`m7 15 5 5 5-5`}],[`path`,{d:`m7 9 5-5 5 5`}]],x=[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`}]],S=[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`}],[`path`,{d:`m9 11 3 3L22 4`}]],C=[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`}],[`path`,{d:`M12 17h.01`}]],w=[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`path`,{d:`M12 6v6l4 2`}]],T=[[`path`,{d:`M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z`}]],E=[[`path`,{d:`m16 18 6-6-6-6`}],[`path`,{d:`m8 6-6 6 6 6`}]],D=[[`path`,{d:`M10 2v2`}],[`path`,{d:`M14 2v2`}],[`path`,{d:`M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1`}],[`path`,{d:`M6 2v2`}]],O=[[`path`,{d:`M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3`}]],k=[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`path`,{d:`m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z`}]],A=[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`}]],j=[[`path`,{d:`m15 10 5 5-5 5`}],[`path`,{d:`M4 4v7a4 4 0 0 0 4 4h12`}]],M=[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`}],[`path`,{d:`M3 5V19A9 3 0 0 0 21 19V5`}],[`path`,{d:`M3 12A9 3 0 0 0 21 12`}]],N=[[`circle`,{cx:`12`,cy:`12`,r:`1`}],[`circle`,{cx:`12`,cy:`5`,r:`1`}],[`circle`,{cx:`12`,cy:`19`,r:`1`}]],P=[[`circle`,{cx:`12`,cy:`12`,r:`1`}],[`circle`,{cx:`19`,cy:`12`,r:`1`}],[`circle`,{cx:`5`,cy:`12`,r:`1`}]],F=[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`}],[`path`,{d:`M10 9H8`}],[`path`,{d:`M16 13H8`}],[`path`,{d:`M16 17H8`}]],I=[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`}]],L=[[`path`,{d:`M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4`}]],R=[[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`}]],z=[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`}],[`path`,{d:`M2 12h20`}]],B=[[`circle`,{cx:`9`,cy:`12`,r:`1`}],[`circle`,{cx:`9`,cy:`5`,r:`1`}],[`circle`,{cx:`9`,cy:`19`,r:`1`}],[`circle`,{cx:`15`,cy:`12`,r:`1`}],[`circle`,{cx:`15`,cy:`5`,r:`1`}],[`circle`,{cx:`15`,cy:`19`,r:`1`}]],V=[[`line`,{x1:`4`,x2:`20`,y1:`9`,y2:`9`}],[`line`,{x1:`4`,x2:`20`,y1:`15`,y2:`15`}],[`line`,{x1:`10`,x2:`8`,y1:`3`,y2:`21`}],[`line`,{x1:`16`,x2:`14`,y1:`3`,y2:`21`}]],H=[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`}]],fe=[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`}]],pe=[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,ry:`2`}],[`circle`,{cx:`9`,cy:`9`,r:`2`}],[`path`,{d:`m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21`}]],me=[[`polyline`,{points:`22 12 16 12 14 15 10 15 8 12 2 12`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`}]],he=[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`path`,{d:`M12 16v-4`}],[`path`,{d:`M12 8h.01`}]],ge=[[`path`,{d:`m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4`}],[`path`,{d:`m21 2-9.6 9.6`}],[`circle`,{cx:`7.5`,cy:`15.5`,r:`5.5`}]],_e=[[`path`,{d:`m5 8 6 6`}],[`path`,{d:`m4 14 6-6 2-3`}],[`path`,{d:`M2 5h12`}],[`path`,{d:`M7 2h1`}],[`path`,{d:`m22 22-5-10-5 10`}],[`path`,{d:`M14 18h6`}]],ve=[[`rect`,{width:`7`,height:`9`,x:`3`,y:`3`,rx:`1`}],[`rect`,{width:`7`,height:`5`,x:`14`,y:`3`,rx:`1`}],[`rect`,{width:`7`,height:`9`,x:`14`,y:`12`,rx:`1`}],[`rect`,{width:`7`,height:`5`,x:`3`,y:`16`,rx:`1`}]],ye=[[`path`,{d:`M3 5h.01`}],[`path`,{d:`M3 12h.01`}],[`path`,{d:`M3 19h.01`}],[`path`,{d:`M8 5h13`}],[`path`,{d:`M8 12h13`}],[`path`,{d:`M8 19h13`}]],be=[[`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`}],[`path`,{d:`M7 11V7a5 5 0 0 1 9.9-1`}]],xe=[[`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`}],[`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`}]],Se=[[`path`,{d:`m16 17 5-5-5-5`}],[`path`,{d:`M21 12H9`}],[`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`}]],Ce=[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`}],[`circle`,{cx:`12`,cy:`10`,r:`3`}]],we=[[`path`,{d:`M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z`}],[`path`,{d:`M15 5.764v15`}],[`path`,{d:`M9 3.236v15`}]],Te=[[`path`,{d:`M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z`}],[`path`,{d:`M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14`}],[`path`,{d:`M8 6v8`}]],Ee=[[`path`,{d:`M12 19v3`}],[`path`,{d:`M19 10v2a7 7 0 0 1-14 0v-2`}],[`rect`,{x:`9`,y:`2`,width:`6`,height:`13`,rx:`3`}]],De=[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`}]],Oe=[[`path`,{d:`M9 18V5l12-2v13`}],[`circle`,{cx:`6`,cy:`18`,r:`3`}],[`circle`,{cx:`18`,cy:`16`,r:`3`}]],ke=[[`rect`,{x:`16`,y:`16`,width:`6`,height:`6`,rx:`1`}],[`rect`,{x:`2`,y:`16`,width:`6`,height:`6`,rx:`1`}],[`rect`,{x:`9`,y:`2`,width:`6`,height:`6`,rx:`1`}],[`path`,{d:`M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3`}],[`path`,{d:`M12 12V8`}]],Ae=[[`path`,{d:`M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z`}],[`path`,{d:`M12 22V12`}],[`polyline`,{points:`3.29 7 12 12 20.71 7`}],[`path`,{d:`m7.5 4.27 9 5.15`}]],je=[[`path`,{d:`M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z`}],[`circle`,{cx:`13.5`,cy:`6.5`,r:`.5`,fill:`currentColor`}],[`circle`,{cx:`17.5`,cy:`10.5`,r:`.5`,fill:`currentColor`}],[`circle`,{cx:`6.5`,cy:`12.5`,r:`.5`,fill:`currentColor`}],[`circle`,{cx:`8.5`,cy:`7.5`,r:`.5`,fill:`currentColor`}]],Me=[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`}],[`path`,{d:`M9 3v18`}]],U=[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`}],[`path`,{d:`M15 3v18`}]],Ne=[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`}],[`path`,{d:`M3 9h18`}],[`path`,{d:`M9 21V9`}]],Pe=[[`path`,{d:`M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z`}],[`path`,{d:`m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18`}],[`path`,{d:`m2.3 2.3 7.286 7.286`}],[`circle`,{cx:`11`,cy:`11`,r:`2`}]],Fe=[[`path`,{d:`M12 17v5`}],[`path`,{d:`M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z`}]],Ie=[[`path`,{d:`M5 12h14`}],[`path`,{d:`M12 5v14`}]],Le=[[`path`,{d:`M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z`}]],Re=[[`path`,{d:`M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5`}],[`path`,{d:`M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09`}],[`path`,{d:`M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z`}],[`path`,{d:`M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05`}]],ze=[[`path`,{d:`M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z`}],[`path`,{d:`m14.5 12.5 2-2`}],[`path`,{d:`m11.5 9.5 2-2`}],[`path`,{d:`m8.5 6.5 2-2`}],[`path`,{d:`m17.5 15.5 2-2`}]],Be=[[`path`,{d:`m13.5 8.5-5 5`}],[`path`,{d:`m8.5 8.5 5 5`}],[`circle`,{cx:`11`,cy:`11`,r:`8`}],[`path`,{d:`m21 21-4.3-4.3`}]],Ve=[[`path`,{d:`m21 21-4.34-4.34`}],[`circle`,{cx:`11`,cy:`11`,r:`8`}]],He=[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`}],[`path`,{d:`m21.854 2.147-10.94 10.939`}]],Ue=[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`}],[`circle`,{cx:`12`,cy:`12`,r:`3`}]],We=[[`path`,{d:`M12 2v13`}],[`path`,{d:`m16 6-4-4-4 4`}],[`path`,{d:`M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8`}]],Ge=[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`}]],Ke=[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`}],[`path`,{d:`M20 2v4`}],[`path`,{d:`M22 4h-4`}],[`circle`,{cx:`4`,cy:`20`,r:`2`}]],qe=[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`}]],Je=[[`circle`,{cx:`12`,cy:`12`,r:`4`}],[`path`,{d:`M12 2v2`}],[`path`,{d:`M12 20v2`}],[`path`,{d:`m4.93 4.93 1.41 1.41`}],[`path`,{d:`m17.66 17.66 1.41 1.41`}],[`path`,{d:`M2 12h2`}],[`path`,{d:`M20 12h2`}],[`path`,{d:`m6.34 17.66-1.41 1.41`}],[`path`,{d:`m19.07 4.93-1.41 1.41`}]],Ye=[[`path`,{d:`M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`}],[`circle`,{cx:`7.5`,cy:`7.5`,r:`.5`,fill:`currentColor`}]],Xe=[[`path`,{d:`M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z`}],[`path`,{d:`M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193`}],[`circle`,{cx:`10.5`,cy:`6.5`,r:`.5`,fill:`currentColor`}]],Ze=[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`circle`,{cx:`12`,cy:`12`,r:`6`}],[`circle`,{cx:`12`,cy:`12`,r:`2`}]],Qe=[[`path`,{d:`M3 5h18`}],[`path`,{d:`M3 12h18`}],[`path`,{d:`M3 19h18`}]],$e=[[`path`,{d:`M10 11v6`}],[`path`,{d:`M14 11v6`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`}],[`path`,{d:`M3 6h18`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`}]],et=[[`path`,{d:`M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978`}],[`path`,{d:`M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978`}],[`path`,{d:`M18 9h1.5a1 1 0 0 0 0-5H18`}],[`path`,{d:`M4 22h16`}],[`path`,{d:`M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z`}],[`path`,{d:`M6 9H4.5a1 1 0 0 1 0-5H6`}]],tt=[[`path`,{d:`M12 13v7a2 2 0 0 0 4 0`}],[`path`,{d:`M12 2v2`}],[`path`,{d:`M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z`}]],nt=[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`}],[`circle`,{cx:`12`,cy:`7`,r:`4`}]],rt=[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`}],[`circle`,{cx:`9`,cy:`7`,r:`4`}]],it=[[`path`,{d:`m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5`}],[`rect`,{x:`2`,y:`6`,width:`14`,height:`12`,rx:`2`}]],at=[[`path`,{d:`M18 6 6 18`}],[`path`,{d:`m6 6 12 12`}]],ot=[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`}]],W=({icons:e={},nameAttr:t=`data-lucide`,attrs:n={},root:r=document,inTemplates:i}={})=>{if(!Object.values(e).length)throw Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(r===void 0)throw Error("`createIcons()` only works in a browser environment.");if(Array.from(r.querySelectorAll(`[${t}]`)).forEach(r=>f(r,{nameAttr:t,icons:e,attrs:n})),i&&Array.from(r.querySelectorAll(`template`)).forEach(r=>W({icons:e,nameAttr:t,attrs:n,root:r.content,inTemplates:i})),t===`data-lucide`){let t=r.querySelectorAll(`[icon-name]`);t.length>0&&(console.warn(`[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide`),Array.from(t).forEach(t=>f(t,{nameAttr:`icon-name`,icons:e,attrs:n})))}},st=t({initIcons:()=>K}),G={ChevronLeft:v,ChevronsUpDown:b,PenTool:Pe,Plus:Ie,MoreHorizontal:P,Search:Ve,Clock:w,Folder:R,ChevronRight:y,ChevronDown:de,Inbox:me,LogOut:Se,Settings:Ue,User:nt,CornerDownRight:j,MoreVertical:N,GripVertical:B,Trash2:$e,ArrowLeft:g,ArrowRight:_,X:at,Layout:Ne,Tags:Xe,Share:We,Copy:A,Home:fe,Star:qe,PanelLeft:Me,Sparkles:Ke,FileText:F,Pin:Fe,Languages:_e,Network:ke,Image:pe,Send:He,Info:he,ArrowUp:ne,PanelRight:U,List:ye,Calendar:le,AlignJustify:Qe,Hash:V,Compass:k,Command:O,SearchX:Be,Rocket:Re,Megaphone:Te,Palette:je,Database:M,Map:we,Puzzle:Le,Ruler:ze,File:I,Video:it,Music:Oe,Mic:Ee,Book:ae,Code:E,Box:se,Package:Ae,Archive:h,LayoutDashboard:ve,Users:rt,Heart:H,MapPin:Ce,Globe:z,Zap:ot,Flame:L,Cloud:T,Sun:Je,Moon:De,Umbrella:tt,Activity:p,Anchor:m,Award:re,Briefcase:ce,Camera:ue,Coffee:D,Target:Ze,Trophy:et,CheckCircle:S,AlertCircle:x,HelpCircle:C,Bell:ie,Tag:Ye,Bookmark:oe,Shield:Ge,Lock:xe,Unlock:be,Key:ge},K=e=>{W({icons:G,nameAttr:`data-lucide`,attrs:{class:`lucide-icon`,"stroke-width":2}}),e&&W({root:e,icons:G})},ct=`modulepreload`,lt=function(e){return`/`+e},q={},J=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=lt(t,n),t in q)return;q[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:ct,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ut=class{container;collapsed=new Set;constructor(){this.container=document.createElement(`div`),this.container.style.display=`flex`,this.container.style.flexDirection=`column`,this.container.style.minHeight=`100vh`,this.render()}render(){let e=r.state.pages,t=`
      <nav class="h-[52px] flex items-center justify-between px-5 bg-white sticky top-0 z-20">
        <!-- Account -->
        <div class="relative group cursor-pointer">
          <button class="wd-ib flex items-center gap-2 px-2.5 py-1 rounded-[4px] border-none bg-transparent hover:bg-gray-100 font-inherit cursor-pointer">
            <img src="/jim_profile_avatar.png" alt="Profile" class="w-7 h-7 rounded-full object-cover shrink-0 border border-[#ebebeb]" />
            <span class="text-[13px] font-semibold text-[#111]">Jim</span>
            <i data-lucide="chevron-down" class="w-3 h-3 text-[#bbb]"></i>
          </button>
        </div>

        <!-- Right actions -->
        <div class="flex items-center gap-1.5">
          <button class="wd-ib w-[34px] h-[34px] rounded-[4px] border border-[#e8e8e8] bg-white cursor-pointer flex items-center justify-center text-[#555] relative hover:bg-[#fafafa]">
            <i data-lucide="inbox" class="w-[15px] h-[15px]"></i>
            <span class="absolute top-[7px] right-[7px] w-1.5 h-1.5 rounded-full bg-blue-500 border-2 border-white"></span>
          </button>
          <button class="wd-ib w-[34px] h-[34px] rounded-[4px] border border-[#e8e8e8] bg-white cursor-pointer flex items-center justify-center text-[#555] hover:bg-[#fafafa]">
            <i data-lucide="more-horizontal" class="w-[15px] h-[15px]"></i>
          </button>
        </div>
      </nav>

      <div class="max-w-[960px] w-full mx-auto px-6 py-10 pb-20">
        <div class="flex items-center gap-2.5 bg-white border border-[#e8e8e8] shadow-[0_2px_8px_rgba(0,0,0,0.04)] rounded-[6px] px-4 h-[42px] w-full mb-10 transition-shadow focus-within:shadow-[0_4px_12px_rgba(0,0,0,0.08)] focus-within:border-[#ddd]">
          <i data-lucide="search" class="w-4 h-4 text-[#aaa] shrink-0"></i>
          <input placeholder="Search pages..." class="flex-1 bg-transparent border-none outline-none text-[14px] text-[#111] font-inherit" />
        </div>
        
        <section>
          <div class="flex items-center justify-between mb-3.5">
            <div class="flex items-center gap-1.5">
              <i data-lucide="folder" class="w-[13px] h-[13px] text-[#bbb]"></i>
              <span class="text-[12px] font-semibold text-[#999] uppercase tracking-[0.06em]">All pages</span>
            </div>
            <button id="add-page-inline-btn" class="wd-ib flex items-center gap-1 px-3 py-1 rounded-[4px] border border-[#e8e8e8] bg-white cursor-pointer text-[#555] text-[12px] font-medium font-inherit hover:bg-[#fafafa] transition-colors">
              <i data-lucide="plus" class="w-3 h-3"></i> New page
            </button>
          </div>
          
          <div class="flex flex-col gap-0.5" id="page-tree">
            ${e.filter(e=>!e.parentId).map(t=>this.renderPageTreeRow(t,e,0)).join(``)}
          </div>
        </section>
      </div>
    `;this.container.innerHTML=t,this.attachEvents(),K(this.container)}attachEvents(){this.container.querySelectorAll(`.open-page-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.id;t&&r.setActiveId(t)})}),this.container.querySelectorAll(`.toggle-btn`).forEach(e=>{e.addEventListener(`click`,e=>{e.stopPropagation();let t=e.currentTarget.dataset.id;t&&(this.collapsed.has(t)?this.collapsed.delete(t):this.collapsed.add(t),this.render())})}),this.container.querySelectorAll(`.delete-page-btn`).forEach(e=>{e.addEventListener(`click`,e=>{e.stopPropagation();let t=e.currentTarget.dataset.id;t&&r.deletePage(t)})}),this.container.querySelectorAll(`.add-subpage-btn`).forEach(e=>{e.addEventListener(`click`,e=>{e.stopPropagation();let t=e.currentTarget.dataset.id;t&&J(async()=>{let{uid:e}=await Promise.resolve().then(()=>n);return{uid:e}},void 0).then(({uid:e})=>{r.addPage({id:e(),title:`Untitled`,parentId:t,icon:`file-text`,updatedAt:`Just now`}),this.collapsed.delete(t)})})}),this.container.querySelectorAll(`.rename-page-btn`).forEach(e=>{e.addEventListener(`click`,e=>{e.stopPropagation();let t=e.currentTarget.dataset.id,n=this.container.querySelector(`.page-title[data-id="${t}"]`);if(n){n.contentEditable=`true`,n.focus();let e=window.getSelection();if(e){let t=document.createRange();t.selectNodeContents(n),e.removeAllRanges(),e.addRange(t)}n.addEventListener(`blur`,()=>{n.contentEditable=`false`,r.renamePage(t,n.textContent||`Untitled`)},{once:!0}),n.addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.preventDefault(),n.blur())})}})}),this.container.querySelector(`#add-page-inline-btn`)?.addEventListener(`click`,()=>{J(async()=>{let{store:e,uid:t}=await Promise.resolve().then(()=>n);return{store:e,uid:t}},void 0).then(({store:e,uid:t})=>{e.addPage({id:t(),title:`Untitled`,parentId:null,icon:`file-text`,updatedAt:`Just now`})})})}renderPageTreeRow(e,t,n){let r=t.filter(t=>t.parentId===e.id),i=r.length>0,a=this.collapsed.has(e.id),o=8+n*20,s=`
      <div class="group/row flex items-center justify-between pr-2 cursor-pointer min-h-[32px] rounded-[4px] hover:bg-[#f5f5f5] transition-colors" data-id="${e.id}" style="padding-left: ${o}px">
        <div class="flex items-center gap-1.5 min-w-0 flex-1 py-1 open-page-btn" data-id="${e.id}">
          ${i?`<button class="toggle-btn bg-transparent border-none cursor-pointer p-0.5 text-[#bbb] flex shrink-0 rounded-[4px] hover:bg-gray-200 hover:text-[#666] transition-colors" data-id="${e.id}"><i data-lucide="chevron-right" class="w-[13px] h-[13px] ${a?``:`rotate-90`} transition-transform"></i></button>`:`<span class="w-[18px] shrink-0"></span>`}
          <i data-lucide="${e.icon}" class="w-4 h-4 shrink-0 text-[#888]"></i>
          <span class="page-title text-[13px] ${n===0?`font-medium`:`font-normal`} text-[#111] overflow-hidden text-ellipsis whitespace-nowrap outline-none px-1 rounded-sm focus:bg-white focus:ring-1 focus:ring-blue-400" data-id="${e.id}" contenteditable="false" spellcheck="false">${e.title}</span>
          ${i?`<span class="text-[11px] text-[#ccc] shrink-0 ml-0.5">${r.length}</span>`:``}
        </div>
        <div class="flex gap-0.5 items-center justify-end shrink-0 opacity-0 group-hover/row:opacity-100 transition-opacity">
          <button class="add-subpage-btn w-6 h-6 flex items-center justify-center border-none bg-transparent cursor-pointer rounded-[4px] text-[#ccc] hover:text-[#555] transition-colors" data-id="${e.id}" title="Add sub-page">
            <i data-lucide="plus" class="w-[13px] h-[13px]"></i>
          </button>
          <button class="rename-page-btn w-6 h-6 flex items-center justify-center border-none bg-transparent cursor-pointer rounded-[4px] text-[#ccc] hover:text-[#555] transition-colors" data-id="${e.id}" title="Rename">
            <i data-lucide="pen-tool" class="w-[13px] h-[13px]"></i>
          </button>
          <button class="delete-page-btn w-6 h-6 flex items-center justify-center border-none bg-transparent cursor-pointer rounded-[4px] text-[#ccc] hover:text-[#ef4444] transition-colors" data-id="${e.id}" title="Delete">
            <i data-lucide="trash-2" class="w-[13px] h-[13px]"></i>
          </button>
          <button class="wd-ib w-6 h-6 flex items-center justify-center border-none bg-transparent cursor-pointer rounded-[4px] text-[#ccc] hover:text-[#facc15] transition-colors" title="Favorite">
            <i data-lucide="star" class="w-[14px] h-[14px]"></i>
          </button>
        </div>
      </div>
    `;if(!a)for(let e of r)s+=this.renderPageTreeRow(e,t,n+1);return s}},dt=[{type:`paragraph`,label:`Text`,icon:`T`,desc:`Plain text paragraph`,shortcut:`text`},{type:`h1`,label:`Heading 1`,icon:`H1`,desc:`Large section heading`,shortcut:`h1`},{type:`h2`,label:`Heading 2`,icon:`H2`,desc:`Medium section heading`,shortcut:`h2`},{type:`h3`,label:`Heading 3`,icon:`H3`,desc:`Small section heading`,shortcut:`h3`},{type:`bullet`,label:`Bullet`,icon:`•`,desc:`Simple bulleted list`,shortcut:`ul`},{type:`numbered`,label:`Numbered`,icon:`1.`,desc:`Numbered list`,shortcut:`ol`},{type:`todo`,label:`To-do`,icon:`☐`,desc:`Task with checkbox`,shortcut:`todo`},{type:`quote`,label:`Quote`,icon:`"`,desc:`Callout or block quote`,shortcut:`quote`},{type:`code`,label:`Code`,icon:`</>`,desc:`Code snippet`,shortcut:`code`},{type:`divider`,label:`Divider`,icon:`—`,desc:`Horizontal divider`,shortcut:`div`}],Y=class{container;pageId;blocks;onSendToBoard;slashState=null;constructor(e,t){this.pageId=e,this.onSendToBoard=t,this.blocks=[{id:i(),type:`paragraph`,content:``}],this.container=document.createElement(`div`),this.container.className=`h-full overflow-y-auto pb-20 relative`,this.render()}getCurrentPage(){return r.state.pages.find(e=>e.id===this.pageId)}updateWidth(){let e=(this.getCurrentPage()?.pageWidth||`full`)===`standard`?`max-w-[800px] mx-auto`:`w-full`,t=this.container.querySelector(`.block-editor-content`);t&&(t.className=`block-editor-content ${e} transition-all duration-300`)}render(){let e=(this.getCurrentPage()?.pageWidth||`full`)===`standard`?`max-w-[800px] mx-auto`:`w-full`;this.container.innerHTML=`
      <div class="block-editor-content ${e} transition-all duration-300">
        <div class="pt-6 px-14"></div>
        <div id="blocks-container" class="mt-4"></div>
        <div class="px-14 py-1">
          <button id="add-block-btn" class="flex items-center gap-1.5 py-1.5 bg-transparent border-none cursor-pointer text-[#d0d0d0] text-[13px] font-inherit hover:text-[#999] transition-colors">
            <i data-lucide="plus" class="w-3.5 h-3.5"></i> Click to add block
          </button>
        </div>
      </div>
    `,this.container.querySelector(`#add-block-btn`)?.addEventListener(`click`,()=>{this.blocks.push({id:i(),type:`paragraph`,content:``}),this.renderBlocks()}),this.renderBlocks(),K(this.container)}renderBlocks(){let e=this.container.querySelector(`#blocks-container`);e&&(e.innerHTML=``,this.blocks.forEach((t,n)=>{let r=document.createElement(`div`);r.className=`group relative px-14 min-h-[24px] mb-[2px]`;let i=0;if(t.type===`numbered`)for(let e=n;e>=0&&this.blocks[e].type===`numbered`;e--)i++;let a=``;t.type===`bullet`?a=`<span class="text-[18px] leading-[1.7] text-[#555] shrink-0 mt-0 mr-2">•</span>`:t.type===`numbered`?a=`<span class="text-[15px] leading-[1.7] text-[#555] shrink-0 min-w-[20px] text-right mr-2">${i}.</span>`:t.type===`todo`&&(a=`
          <button data-id="${t.id}" class="todo-btn w-4 h-4 rounded-sm border-[1.5px] border-solid ${t.checked?`border-[#aaa] bg-[#555]`:`border-[#555] bg-transparent`} cursor-pointer shrink-0 mt-[4px] mr-2 flex items-center justify-center p-0">
            ${t.checked?`<span class="text-white text-[10px] font-bold leading-none">✓</span>`:``}
          </button>
        `);let o=`w-full bg-transparent border-none outline-none resize-none overflow-hidden font-inherit p-0 block `;t.type===`h1`?o+=`text-[28px] font-bold text-[#111] tracking-[-0.02em] leading-[1.3] min-h-[38px] mt-6`:t.type===`h2`?o+=`text-[22px] font-semibold text-[#111] tracking-[-0.01em] leading-[1.4] min-h-[32px] mt-4`:t.type===`h3`?o+=`text-[18px] font-semibold text-[#111] leading-[1.5] min-h-[28px] mt-4`:t.type===`quote`?o+=`text-[15px] italic text-[#666] leading-[1.7]`:t.type===`code`?o+=`text-[13px] font-[Courier_New,monospace] text-[#c7254e] leading-[1.7] bg-[#f8f8f8] rounded-[4px] p-2 border border-[#ebebeb]`:o+=`text-[15px] text-[#333] leading-[1.7]`,t.type===`todo`&&t.checked&&(o+=` line-through text-[#bbb]`);let s=this.slashState?.id===t.id?this.renderSlashMenu():``;r.innerHTML=`
        <div class="absolute left-1 top-1 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-[1px]">
          <button class="add-below-btn w-5 h-5 flex items-center justify-center border-none bg-transparent cursor-pointer text-[#ccc] hover:text-[#555] rounded-[3px] font-inherit text-[16px] leading-[1] pb-[1px]" data-id="${t.id}">+</button>
          <div class="w-5 h-5 flex items-center justify-center cursor-grab text-[#ccc] hover:text-[#555]"><i data-lucide="grip-vertical" class="w-3.5 h-3.5"></i></div>
        </div>
        
        ${t.type===`divider`?`
          <div class="h-[1px] bg-[#e8e8e8] rounded-[1px] my-2"></div>
        `:`
          <div class="flex items-start">
            ${a}
            <div class="flex-1 relative ${t.type===`quote`?`border-l-3 border-[#d0d0d0] pl-3 rounded-[4px]`:``}">
              <textarea 
                data-id="${t.id}" 
                class="block-ta ${o}" 
                rows="1" 
                placeholder="${t.type===`paragraph`?`Type '/' for commands`:``}">${t.content}</textarea>
            </div>
          </div>
        `}
        
        <div class="absolute right-1 top-1 flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity items-center">
          <button class="send-board-btn flex items-center gap-1 py-[3px] px-[7px] rounded-[4px] border border-[#e0e0e0] bg-white cursor-pointer text-[11px] font-medium text-[#555] font-inherit whitespace-nowrap hover:bg-[#f0f0f0]" data-id="${t.id}">
            <i data-lucide="layout" class="w-[11px] h-[11px]"></i> Board
          </button>
          <button class="remove-block-btn w-6 h-6 flex items-center justify-center border border-[#e8e8e8] bg-white rounded-[4px] cursor-pointer text-[#e53e3e] hover:bg-[#f5f5f5]" data-id="${t.id}">
            <i data-lucide="trash-2" class="w-3 h-3"></i>
          </button>
        </div>
        ${s}
      `,e.appendChild(r)}),this.bindBlockEvents(),K(e))}renderSlashMenu(){let e=this.slashState.filter,t=dt.filter(t=>t.label.toLowerCase().includes(e)||t.shortcut.includes(e)||t.type.includes(e));if(t.length===0)return``;let n=`<div class="absolute top-[100%] left-14 z-[100] w-[260px] bg-white border border-[#e0e0e0] rounded-[4px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden mt-0.5">
      <div class="px-3 py-2 text-[10px] font-semibold text-[#bbb] uppercase tracking-[0.08em] border-b border-[#f3f3f3]">Turn into</div>`;return t.forEach(e=>{n+=`
        <button class="slash-item wd-slash w-full flex items-center gap-3 px-3 py-2 bg-transparent border-none border-b border-[#fafafa] cursor-pointer text-left font-inherit" data-type="${e.type}">
          <div class="w-7 h-7 rounded-[4px] bg-[#f5f5f5] border border-[#e8e8e8] flex items-center justify-center text-[11px] font-bold text-[#555] shrink-0 font-[monospace]">${e.icon}</div>
          <div>
            <div class="text-[13px] font-medium text-[#111]">${e.label}</div>
            <div class="text-[11px] text-[#bbb]">${e.desc}</div>
          </div>
        </button>
      `}),n+=`</div>`,n}bindBlockEvents(){this.container.querySelectorAll(`.block-ta`).forEach(e=>{e.style.height=`auto`,e.style.height=e.scrollHeight+`px`,e.addEventListener(`input`,()=>{let t=e.value,n=e.dataset.id,r=this.blocks.find(e=>e.id===n);r&&(r.content=t),e.style.height=`auto`,e.style.height=e.scrollHeight+`px`,t===`/`?(this.slashState={id:n,filter:``},this.renderBlocks(),setTimeout(()=>{this.container.querySelector(`textarea[data-id="${n}"]`)?.focus()},0)):t.startsWith(`/`)&&this.slashState?.id===n?(this.slashState.filter=t.slice(1).toLowerCase(),this.renderBlocks(),setTimeout(()=>{this.container.querySelector(`textarea[data-id="${n}"]`)?.focus()},0)):this.slashState?.id===n&&(this.slashState=null,this.renderBlocks(),setTimeout(()=>{this.container.querySelector(`textarea[data-id="${n}"]`)?.focus()},0))}),e.addEventListener(`keydown`,t=>{let n=e.dataset.id,r=this.blocks.findIndex(e=>e.id===n);if(t.key===`Enter`&&!t.shiftKey){t.preventDefault(),this.slashState=null;let e=this.blocks[r],n=[`h1`,`h2`,`h3`].includes(e.type)?`paragraph`:e.type,a={id:i(),type:n,content:``};this.blocks.splice(r+1,0,a),this.renderBlocks(),setTimeout(()=>this.container.querySelector(`textarea[data-id="${a.id}"]`)?.focus(),0)}else if(t.key===`Backspace`&&e.value===``){if(t.preventDefault(),this.slashState=null,this.blocks[r].type!==`paragraph`)this.blocks[r].type=`paragraph`,this.renderBlocks(),setTimeout(()=>this.container.querySelector(`textarea[data-id="${n}"]`)?.focus(),0);else if(this.blocks.length>1){let e=this.blocks[r-1]?.id;if(this.blocks.splice(r,1),this.renderBlocks(),e){let t=this.container.querySelector(`textarea[data-id="${e}"]`);t&&(t.focus(),t.setSelectionRange(t.value.length,t.value.length))}}}else t.key===`Escape`&&(this.slashState=null,this.renderBlocks())})}),this.container.querySelectorAll(`.add-below-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.id,n=this.blocks.findIndex(e=>e.id===t);this.blocks.splice(n+1,0,{id:i(),type:`paragraph`,content:``}),this.renderBlocks()})}),this.container.querySelectorAll(`.remove-block-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.id;this.blocks.length>1&&(this.blocks=this.blocks.filter(e=>e.id!==t),this.renderBlocks())})}),this.container.querySelectorAll(`.send-board-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.id,n=this.blocks.find(e=>e.id===t);n&&n.type!==`divider`&&n.content.trim()&&(this.onSendToBoard({...n}),this.blocks.length>1?this.blocks=this.blocks.filter(e=>e.id!==t):this.blocks[0]={id:i(),type:`paragraph`,content:``},this.renderBlocks())})}),this.container.querySelectorAll(`.todo-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.id,n=this.blocks.find(e=>e.id===t);n&&(n.checked=!n.checked,this.renderBlocks())})}),this.container.querySelectorAll(`.slash-item`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.type,n=this.slashState.id,r=this.blocks.find(e=>e.id===n);r&&(r.type=t,r.content=``,this.slashState=null,this.renderBlocks(),setTimeout(()=>this.container.querySelector(`textarea[data-id="${n}"]`)?.focus(),0))})})}},X={paragraph:{bg:`#ffffff`,border:`#e0e0e0`,label:`#555`},h1:{bg:`#eff6ff`,border:`#bfdbfe`,label:`#1d4ed8`},h2:{bg:`#eff6ff`,border:`#bfdbfe`,label:`#1d4ed8`},h3:{bg:`#eff6ff`,border:`#bfdbfe`,label:`#1d4ed8`},bullet:{bg:`#f0fdf4`,border:`#bbf7d0`,label:`#15803d`},numbered:{bg:`#f0fdf4`,border:`#bbf7d0`,label:`#15803d`},todo:{bg:`#fffbeb`,border:`#fde68a`,label:`#b45309`},quote:{bg:`#faf5ff`,border:`#e9d5ff`,label:`#7c3aed`},code:{bg:`#1e1e2e`,border:`#3b3b5c`,label:`#a78bfa`}},ft={paragraph:`Text`,h1:`Heading 1`,h2:`Heading 2`,h3:`Heading 3`,bullet:`Bullet`,numbered:`Numbered`,todo:`To-do`,quote:`Quote`,code:`Code`},pt=class{container;canvas;ctx=null;cards=[];drawMode=!0;drawing=!1;dragState=null;constructor(){this.container=document.createElement(`div`),this.container.className=`absolute inset-0 overflow-hidden`;let e=document.createElement(`div`);e.style.position=`absolute`,e.style.inset=`0`,e.style.pointerEvents=`none`,e.style.backgroundImage=`radial-gradient(circle, #999 1.5px, transparent 1.5px)`,e.style.backgroundSize=`24px 24px`,this.container.appendChild(e),this.canvas=document.createElement(`canvas`),this.canvas.className=`absolute inset-0 w-full h-full touch-none cursor-crosshair`,this.container.appendChild(this.canvas),this.renderCardsContainer(),this.renderToolbar(),this.bindCanvasEvents(),window.addEventListener(`resize`,()=>this.resize()),setTimeout(()=>this.resize(),0)}resize(){let e=this.container.getBoundingClientRect(),t=window.devicePixelRatio||1;this.canvas.width=e.width*t,this.canvas.height=e.height*t;let n=this.canvas.getContext(`2d`);n&&(n.scale(t,t),n.lineCap=`round`,n.lineJoin=`round`,n.strokeStyle=`#333`,n.lineWidth=1.5,this.ctx=n)}addCard(e){this.cards.push({...e,id:i(),x:24+this.cards.length%5*28,y:24+this.cards.length%6*36}),this.renderCardsContainer()}renderToolbar(){let e=document.createElement(`div`);e.className=`absolute bottom-4 right-4 flex gap-1.5 z-50`,e.id=`wb-toolbar`,this.container.appendChild(e),this.updateToolbar()}updateToolbar(){let e=this.container.querySelector(`#wb-toolbar`);e&&(e.innerHTML=`
      <button id="mode-draw" title="Draw mode" class="w-[34px] h-[34px] rounded-[4px] border border-solid flex items-center justify-center cursor-pointer transition-colors ${this.drawMode?`border-[#111] bg-[#111] text-white`:`border-[#ddd] bg-white text-[#888]`}">
        <i data-lucide="pen-tool" class="w-3.5 h-3.5"></i>
      </button>
      <button id="mode-move" title="Move cards" class="w-[34px] h-[34px] rounded-[4px] border border-solid flex items-center justify-center cursor-pointer transition-colors ${this.drawMode?`border-[#ddd] bg-white text-[#888]`:`border-[#111] bg-[#111] text-white`}">
        <i data-lucide="layout" class="w-3.5 h-3.5"></i>
      </button>
    `,e.querySelector(`#mode-draw`)?.addEventListener(`click`,()=>{this.drawMode=!0,this.canvas.style.cursor=`crosshair`,this.updateToolbar(),this.renderCardsContainer()}),e.querySelector(`#mode-move`)?.addEventListener(`click`,()=>{this.drawMode=!1,this.canvas.style.cursor=`default`,this.updateToolbar(),this.renderCardsContainer()}),K(e))}renderCardsContainer(){let e=this.container.querySelector(`#cards-container`);if(e||(e=document.createElement(`div`),e.id=`cards-container`,this.container.appendChild(e)),this.cards.length===0){e.innerHTML=`
        <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <p class="text-[13px] text-[#ccc] text-center leading-[1.6]">
            Hover a block in the editor<br>and click <strong>Board</strong> to move it here
          </p>
        </div>
      `;return}e.innerHTML=``,this.cards.forEach(t=>{let n=X[t.type]||X.paragraph,r=t.type===`code`,i=document.createElement(`div`);i.className=`absolute w-[220px] rounded-[4px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] z-10 ${this.drawMode?`cursor-default`:`cursor-grab`} select-none`,i.style.left=`${t.x}px`,i.style.top=`${t.y}px`,i.style.backgroundColor=n.bg,i.style.borderColor=n.border,i.style.borderWidth=`1px`,i.style.borderStyle=`solid`;let a=``;a=t.type===`todo`?`
          <div class="flex items-start gap-2">
            <div class="w-3.5 h-3.5 rounded-[3px] border-[1.5px] border-solid shrink-0 mt-0.5 ${t.checked?`border-[#aaa] bg-[#aaa]`:`border-[#555] bg-transparent`}">
              ${t.checked?`<span class="text-white text-[9px] font-bold block text-center leading-[12px]">✓</span>`:``}
            </div>
            <p class="text-[13px] leading-[1.5] break-words ${t.checked?`text-[#bbb] line-through`:`text-[#333]`}">${t.content||`<span class="text-[#ddd]">Empty block</span>`}</p>
          </div>
        `:`
          <p style="font-size: ${t.type===`h1`?`18px`:t.type===`h2`?`16px`:t.type===`h3`?`14px`:`13px`}; font-weight: ${[`h1`,`h2`,`h3`].includes(t.type)?`700`:`400`}; font-style: ${t.type===`quote`?`italic`:`normal`}; color: ${r?`#a78bfa`:`#333`}; font-family: ${r?`'Courier New', monospace`:`inherit`}; border-left: ${t.type===`quote`?`3px solid #d8b4fe`:`none`}; padding-left: ${t.type===`quote`?`8px`:`0`}; line-height: 1.5; word-break: break-word;">
            ${t.content||`<span class="text-[#ddd]">Empty block</span>`}
          </p>
        `,i.innerHTML=`
        <div class="flex items-center justify-between px-2.5 py-2 border-b border-solid" style="border-color: ${n.border}">
          <span class="text-[10px] font-bold uppercase tracking-[0.08em]" style="color: ${n.label}">
            ${ft[t.type]||`Text`}
          </span>
          <button class="remove-card w-4 h-4 flex items-center justify-center border-none bg-transparent cursor-pointer text-[#aaa] hover:text-[#555] rounded-[3px] p-0" data-id="${t.id}">
            <i data-lucide="x" class="w-[11px] h-[11px]"></i>
          </button>
        </div>
        <div class="px-3 py-2.5">
          ${a}
        </div>
      `,i.addEventListener(`mousedown`,e=>{this.drawMode||(e.stopPropagation(),i.style.cursor=`grabbing`,this.dragState={id:t.id,startX:e.clientX,startY:e.clientY,origX:t.x,origY:t.y})}),e.appendChild(i)}),e.querySelectorAll(`.remove-card`).forEach(e=>{e.addEventListener(`click`,e=>{e.stopPropagation();let t=e.currentTarget.dataset.id;this.cards=this.cards.filter(e=>e.id!==t),this.renderCardsContainer()})}),K(e)}bindCanvasEvents(){let e=e=>{let t=this.canvas.getBoundingClientRect(),n=e.touches?.[0]??e;return{x:n.clientX-t.left,y:n.clientY-t.top}},t=t=>{if(!this.ctx||!this.drawMode)return;this.drawing=!0;let{x:n,y:r}=e(t);this.ctx.beginPath(),this.ctx.moveTo(n,r)},n=t=>{if(!this.drawing||!this.ctx)return;let{x:n,y:r}=e(t);this.ctx.lineTo(n,r),this.ctx.stroke()},r=()=>{this.ctx&&this.ctx.closePath(),this.drawing=!1};this.canvas.addEventListener(`mousedown`,t),this.canvas.addEventListener(`mousemove`,n),this.canvas.addEventListener(`mouseup`,r),this.canvas.addEventListener(`mouseleave`,r),this.canvas.addEventListener(`touchstart`,e=>{e.preventDefault(),t(e)}),this.canvas.addEventListener(`touchmove`,e=>{e.preventDefault(),n(e)}),this.canvas.addEventListener(`touchend`,r),window.addEventListener(`mousemove`,e=>{if(!this.dragState)return;let t=this.cards.find(e=>e.id===this.dragState.id);if(t){t.x=this.dragState.origX+(e.clientX-this.dragState.startX),t.y=this.dragState.origY+(e.clientY-this.dragState.startY);let n=this.container.querySelector(`#cards-container`);n&&(n.children[this.cards.indexOf(t)].style.left=t.x+`px`,n.children[this.cards.indexOf(t)].style.top=t.y+`px`)}}),window.addEventListener(`mouseup`,()=>{this.dragState&&(this.dragState=null,this.renderCardsContainer())})}},mt=class{container;activeTab=`ai`;onClose;constructor(e){this.container=document.createElement(`div`),this.container.className=`w-[320px] shrink-0 border-l border-[#ebebeb] bg-white flex flex-col h-full z-10 shadow-[-4px_0_12px_rgba(0,0,0,0.02)]`,this.onClose=e}setTab(e){this.activeTab=e,this.render()}render(){let e=``;this.activeTab===`ai`?e=`
        <div class="p-4 flex-1 flex flex-col h-full overflow-hidden">
          <div class="flex items-center justify-between mb-4 mt-2 shrink-0">
            <span class="text-[14px] font-semibold text-[#111]">Dalim AI</span>
          </div>

          <div class="flex-1 overflow-y-auto"></div>

          <div class="pt-2 shrink-0">
            <div class="border border-[#ebebeb] rounded-[12px] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:border-[#d9d9d9] transition-all flex flex-col pt-3 pb-2 focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-400 focus-within:shadow-[0_4px_16px_rgba(0,0,0,0.08)] relative">
              <textarea 
                placeholder="What are your thoughts?" 
                class="w-full bg-transparent border-none outline-none resize-none px-3.5 text-[14px] text-[#111] placeholder:text-[#999] min-h-[48px] font-inherit"
              ></textarea>
              <div class="flex items-center justify-between px-2.5 pt-1">
                <button class="w-[28px] h-[28px] flex items-center justify-center rounded-[6px] text-[#999] hover:bg-[#f0f0f0] transition-colors cursor-pointer border-none bg-transparent">
                  <i data-lucide="plus" class="w-4 h-4"></i>
                </button>
                <button class="w-[28px] h-[28px] rounded-full bg-[#d8d8d8] flex items-center justify-center text-white hover:bg-[#333] transition-colors cursor-pointer border-none group">
                  <i data-lucide="arrow-up" class="w-4 h-4 transition-transform group-hover:-translate-y-0.5"></i>
                </button>
              </div>
            </div>
            <div class="flex items-center justify-center gap-1 py-3 px-1">
              <i data-lucide="info" class="w-3.5 h-3.5 text-[#a0a0a0]"></i>
              <span class="text-[12px] text-[#a0a0a0]">AI outputs can be misleading or wrong</span>
            </div>
          </div>
        </div>
      `:this.activeTab===`outline`?e=`
        <div class="p-4 flex-1 overflow-y-auto">
          <div class="flex items-center justify-between mb-4 mt-2">
            <span class="text-[14px] font-semibold text-[#111]">Document Outline</span>
            <button class="text-[#888] hover:text-[#333] bg-transparent border-none cursor-pointer"><i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i></button>
          </div>
          <div class="flex flex-col gap-1 text-[13px] text-[#555]">
            <div class="flex items-center gap-2 px-2 py-1.5 hover:bg-[#ebebeb] rounded-[4px] cursor-pointer text-[#111] font-medium">
              <i data-lucide="heading-1" class="w-3.5 h-3.5 text-[#999]"></i> 1. Introduction
            </div>
            <div class="flex items-center gap-2 px-2 py-1.5 hover:bg-[#ebebeb] rounded-[4px] cursor-pointer ml-3">
              <i data-lucide="heading-2" class="w-3.5 h-3.5 text-[#999]"></i> 1.1 Overview
            </div>
            <div class="flex items-center gap-2 px-2 py-1.5 hover:bg-[#ebebeb] rounded-[4px] cursor-pointer ml-3">
              <i data-lucide="heading-2" class="w-3.5 h-3.5 text-[#999]"></i> 1.2 Core Features
            </div>
            <div class="flex items-center gap-2 px-2 py-1.5 hover:bg-[#ebebeb] rounded-[4px] cursor-pointer text-[#111] font-medium">
              <i data-lucide="heading-1" class="w-3.5 h-3.5 text-[#999]"></i> 2. System Architecture
            </div>
            <div class="flex items-center gap-2 px-2 py-1.5 hover:bg-[#ebebeb] rounded-[4px] cursor-pointer ml-3">
              <i data-lucide="heading-2" class="w-3.5 h-3.5 text-[#999]"></i> 2.1 Backend Services
            </div>
            <div class="flex items-center gap-2 px-2 py-1.5 hover:bg-[#ebebeb] rounded-[4px] cursor-pointer text-[#111] font-medium">
              <i data-lucide="heading-1" class="w-3.5 h-3.5 text-[#999]"></i> 3. Security Guidelines
            </div>
          </div>
        </div>
      `:this.activeTab===`journal`?e=`
        <div class="p-4 flex-1 flex flex-col h-full overflow-hidden">
          <div class="flex items-center justify-between mb-4 mt-2 shrink-0">
            <span class="text-[14px] font-semibold text-[#111]">Daily Journal</span>
            <div class="flex gap-1">
              <button class="w-[24px] h-[24px] rounded hover:bg-[#ebebeb] flex items-center justify-center border-none bg-transparent cursor-pointer"><i data-lucide="chevron-left" class="w-3.5 h-3.5 text-[#888]"></i></button>
              <button class="w-[24px] h-[24px] rounded hover:bg-[#ebebeb] flex items-center justify-center border-none bg-transparent cursor-pointer"><i data-lucide="calendar" class="w-3.5 h-3.5 text-[#888]"></i></button>
              <button class="w-[24px] h-[24px] rounded hover:bg-[#ebebeb] flex items-center justify-center border-none bg-transparent cursor-pointer"><i data-lucide="chevron-right" class="w-3.5 h-3.5 text-[#888]"></i></button>
            </div>
          </div>
          
          <div class="bg-white border text-left border-[#ebebeb] rounded-[8px] shadow-[0_2px_4px_rgba(0,0,0,0.02)] p-4 flex-1 overflow-y-auto relative">
             <div class="flex items-center justify-between border-b border-[#f0f0f0] pb-2 mb-3">
                <div>
                   <h3 class="text-[18px] font-bold text-[#111]">April 14, 2026</h3>
                   <span class="text-[12px] text-[#999]">Tuesday</span>
                </div>
             </div>
             <p class="text-[14px] text-[#444] leading-relaxed mb-4">
                Today's priorities:
                <br>• Finalize the design mockups for v2.
                <br>• Review the new API routes.
                <br>• Weekly team sync at 2 PM.
             </p>
             <p class="text-[13px] text-[#888] italic absolute top-1/2 left-0 w-full text-center mt-12">Click to edit journal...</p>
          </div>
        </div>
      `:this.activeTab===`info`?e=`
        <div class="p-4 flex-1 overflow-y-auto">
          <span class="text-[14px] font-semibold text-[#111] block mb-4 mt-2">Page Properties</span>
          <div class="bg-white border border-[#ebebeb] rounded-[8px] p-1 mb-4 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
            <div class="flex justify-between items-center px-3 py-2.5 border-b border-[#f0f0f0]">
              <div class="flex items-center gap-2 text-[#888]">
                 <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
                 <span class="text-[13px]">Created</span>
              </div>
              <span class="text-[13px] text-[#333]">Apr 10, 2026 09:41 AM</span>
            </div>
            <div class="flex justify-between items-center px-3 py-2.5 border-b border-[#f0f0f0]">
              <div class="flex items-center gap-2 text-[#888]">
                 <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                 <span class="text-[13px]">Updated</span>
              </div>
              <span class="text-[13px] text-[#333]">Just now</span>
            </div>
            <div class="flex justify-between items-center px-3 py-2.5 border-b border-[#f0f0f0]">
              <div class="flex items-center gap-2 text-[#888]">
                 <i data-lucide="user" class="w-3.5 h-3.5"></i>
                 <span class="text-[13px]">Author</span>
              </div>
              <div class="flex items-center gap-1.5">
                 <img src="/jim_profile_avatar.png" class="w-4 h-4 rounded-full"/>
                 <span class="text-[13px] text-[#333]">Jim</span>
              </div>
            </div>
            <div class="flex justify-between items-center px-3 py-2.5">
              <div class="flex items-center gap-2 text-[#888]">
                 <i data-lucide="bar-chart-2" class="w-3.5 h-3.5"></i>
                 <span class="text-[13px]">Word Count</span>
              </div>
              <span class="text-[13px] text-[#333] font-medium">1,248 words</span>
            </div>
          </div>

          <span class="text-[12px] font-semibold text-[#999] uppercase tracking-wider block mb-2 mt-6">Backlinks</span>
          <div class="bg-white border text-left border-[#ebebeb] rounded-[8px] p-3 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
             <div class="flex items-start gap-2 mb-2 pb-2 border-b border-[#f0f0f0]">
                <i data-lucide="file-text" class="w-3.5 h-3.5 text-[#888] shrink-0 mt-0.5"></i>
                <div>
                   <p class="text-[13px] font-medium text-[#333] cursor-pointer hover:underline mb-0.5">Product Launch Template</p>
                   <p class="text-[11px] text-[#999] line-clamp-1">Referenced in "Required Reading" section.</p>
                </div>
             </div>
             <div class="flex items-start gap-2">
                <i data-lucide="file-text" class="w-3.5 h-3.5 text-[#888] shrink-0 mt-0.5"></i>
                <div>
                   <p class="text-[13px] font-medium text-[#333] cursor-pointer hover:underline mb-0.5">Weekly Sync Notes</p>
                   <p class="text-[11px] text-[#999] line-clamp-1">"Check out the new design system specs..."</p>
                </div>
             </div>
          </div>
        </div>
      `:this.activeTab===`tags`&&(e=`
        <div class="p-4 flex-1 overflow-y-auto">
          <div class="flex items-center justify-between mb-4 mt-2">
            <span class="text-[14px] font-semibold text-[#111]">Document Tags</span>
            <button class="w-[24px] h-[24px] rounded hover:bg-[#ebebeb] flex items-center justify-center border-none bg-transparent cursor-pointer"><i data-lucide="plus" class="w-3.5 h-3.5 text-[#888]"></i></button>
          </div>
          
          <div class="flex flex-wrap gap-2 mb-6">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 text-[12px] font-medium border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors">
               <i data-lucide="hash" class="w-3.5 h-3.5"></i> engineering
            </span>
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-50 text-purple-600 text-[12px] font-medium border border-purple-100 cursor-pointer hover:bg-purple-100 transition-colors">
               <i data-lucide="hash" class="w-3.5 h-3.5"></i> Q3-planning
            </span>
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-yellow-50 text-yellow-700 text-[12px] font-medium border border-yellow-100 cursor-pointer hover:bg-yellow-100 transition-colors">
               <i data-lucide="hash" class="w-3.5 h-3.5"></i> high-priority
            </span>
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-50 text-green-700 text-[12px] font-medium border border-green-100 cursor-pointer hover:bg-green-100 transition-colors">
               <i data-lucide="hash" class="w-3.5 h-3.5"></i> finalized
            </span>
          </div>

          <span class="text-[12px] font-semibold text-[#999] uppercase tracking-wider block mb-3">Suggested Tags</span>
          <div class="flex flex-col gap-1">
             <div class="flex items-center justify-between px-2 py-1.5 rounded hover:bg-[#ebebeb] cursor-pointer font-medium text-[#555] text-[13px]">
                <div class="flex items-center gap-2"><i data-lucide="hash" class="w-3.5 h-3.5 text-[#999]"></i> design-system</div>
                <button class="bg-transparent border-none text-[#888] cursor-pointer"><i data-lucide="plus" class="w-3 h-3"></i></button>
             </div>
             <div class="flex items-center justify-between px-2 py-1.5 rounded hover:bg-[#ebebeb] cursor-pointer font-medium text-[#555] text-[13px]">
                <div class="flex items-center gap-2"><i data-lucide="hash" class="w-3.5 h-3.5 text-[#999]"></i> marketing</div>
                <button class="bg-transparent border-none text-[#888] cursor-pointer"><i data-lucide="plus" class="w-3 h-3"></i></button>
             </div>
             <div class="flex items-center justify-between px-2 py-1.5 rounded hover:bg-[#ebebeb] cursor-pointer font-medium text-[#555] text-[13px]">
                <div class="flex items-center gap-2"><i data-lucide="hash" class="w-3.5 h-3.5 text-[#999]"></i> draft</div>
                <button class="bg-transparent border-none text-[#888] cursor-pointer"><i data-lucide="plus" class="w-3 h-3"></i></button>
             </div>
          </div>
        </div>
      `);let t=`
      <div class="h-[45px] shrink-0 flex items-center justify-between pl-2 pr-2 border-b border-[#ebebeb]">
        <div class="flex items-center bg-[#f5f5f5] rounded-[6px] p-[2px] gap-[2px]">
          <button data-tab="ai" title="Dalim AI" class="rsb-tab w-[30px] h-[28px] flex items-center justify-center rounded-[4px] border-none transition-all cursor-pointer ${this.activeTab===`ai`?`bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)] text-[#111]`:`bg-transparent text-[#888] hover:text-[#333] hover:bg-[#eaeaea]`}">
            <i data-lucide="sparkles" class="w-[18px] h-[18px]"></i>
          </button>
          <button data-tab="outline" title="Outline" class="rsb-tab w-[30px] h-[28px] flex items-center justify-center rounded-[4px] border-none transition-all cursor-pointer ${this.activeTab===`outline`?`bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)] text-[#111]`:`bg-transparent text-[#888] hover:text-[#333] hover:bg-[#eaeaea]`}">
            <i data-lucide="list" class="w-[18px] h-[18px]"></i>
          </button>
          <button data-tab="journal" title="Journal" class="rsb-tab w-[30px] h-[28px] flex items-center justify-center rounded-[4px] border-none transition-all cursor-pointer ${this.activeTab===`journal`?`bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)] text-[#111]`:`bg-transparent text-[#888] hover:text-[#333] hover:bg-[#eaeaea]`}">
            <i data-lucide="calendar" class="w-[18px] h-[18px]"></i>
          </button>
          <button data-tab="info" title="Page Info" class="rsb-tab w-[30px] h-[28px] flex items-center justify-center rounded-[4px] border-none transition-all cursor-pointer ${this.activeTab===`info`?`bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)] text-[#111]`:`bg-transparent text-[#888] hover:text-[#333] hover:bg-[#eaeaea]`}">
            <i data-lucide="align-justify" class="w-[18px] h-[18px]"></i>
          </button>
          <button data-tab="tags" title="Tags" class="rsb-tab w-[30px] h-[28px] flex items-center justify-center rounded-[4px] border-none transition-all cursor-pointer ${this.activeTab===`tags`?`bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)] text-[#111]`:`bg-transparent text-[#888] hover:text-[#333] hover:bg-[#eaeaea]`}">
            <i data-lucide="hash" class="w-[18px] h-[18px]"></i>
          </button>
        </div>
        <div class="flex items-center">
          <button id="close-right-sidebar" class="w-[30px] h-[30px] flex items-center justify-center rounded-[4px] hover:bg-[#eaeaea] hover:text-[#333] text-[#888] transition-colors cursor-pointer bg-transparent border-none">
            <i data-lucide="panel-right" class="w-[18px] h-[18px]"></i>
          </button>
        </div>
      </div>
      <div class="flex-1 overflow-hidden flex flex-col items-stretch">
        ${e}
      </div>
    `;this.container.innerHTML=t,this.container.querySelectorAll(`.rsb-tab`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.tab;this.setTab(t)})}),this.container.querySelector(`#close-right-sidebar`)?.addEventListener(`click`,()=>{this.onClose&&this.onClose()}),J(async()=>{let{initIcons:e}=await Promise.resolve().then(()=>st);return{initIcons:e}},void 0).then(({initIcons:e})=>{e(this.container)})}},ht=class{container;onNavigate;isOpen=!1;constructor(e){this.onNavigate=e,this.container=document.createElement(`div`),this.container.className=`fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] bg-black/10 backdrop-blur-[2px] transition-opacity duration-200 opacity-0 pointer-events-none`,this.container.innerHTML=`
      <div id="search-modal" class="bg-white w-[540px] rounded-[12px] shadow-[0_16px_48px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col transform scale-[0.97] transition-transform duration-200">
        
        <!-- Search Input Header -->
        <div class="flex items-center px-4 py-3 border-b border-[#ebebeb] relative">
          <i data-lucide="search" class="w-[18px] h-[18px] text-[#888] shrink-0 mr-3"></i>
          <input id="search-input" type="text" placeholder="Search pages, folders, and blocks..." class="flex-1 bg-transparent border-none outline-none text-[15px] text-[#111] placeholder:text-[#aaa] font-inherit" autocomplete="off" spellcheck="false" />
          <div class="flex items-center gap-1 shrink-0 ml-3">
             <kbd class="font-sans text-[11px] font-medium text-[#888] bg-[#f5f5f5] px-1.5 py-0.5 rounded border border-[#e8e8e8]">ESC</kbd>
          </div>
        </div>

        <!-- Results Area -->
        <div id="search-results" class="max-h-[360px] overflow-y-auto p-2 flex flex-col gap-0.5 relative">
           <!-- Dynamic Content Here -->
        </div>

        <!-- Footer -->
        <div class="px-4 py-2 border-t border-[#ebebeb] bg-[#fafafa] flex items-center justify-between">
           <div class="flex items-center gap-3">
              <div class="flex items-center gap-1.5 text-[11px] text-[#888]">
                 <span class="bg-white border border-[#e8e8e8] shadow-sm rounded w-[18px] h-[18px] flex items-center justify-center">↵</span>
                 <span>to select</span>
              </div>
              <div class="flex items-center gap-1.5 text-[11px] text-[#888]">
                 <span class="bg-white border border-[#e8e8e8] shadow-sm rounded w-[18px] h-[18px] flex items-center justify-center">↑</span>
                 <span class="bg-white border border-[#e8e8e8] shadow-sm rounded w-[18px] h-[18px] flex items-center justify-center">↓</span>
                 <span>to navigate</span>
              </div>
           </div>
           <div class="flex items-center text-[11px] text-[#999] font-medium gap-1">
              <i data-lucide="command" class="w-3 h-3"></i> PRO
           </div>
        </div>
      </div>
    `,this.container.addEventListener(`mousedown`,e=>{e.target===this.container&&this.close()});let t=this.container.querySelector(`#search-input`);t.addEventListener(`input`,()=>this.renderResults(t.value)),t.addEventListener(`keydown`,e=>{if(e.key===`Escape`)e.preventDefault(),this.close();else if(e.key===`ArrowDown`)e.preventDefault(),this.moveSelection(1);else if(e.key===`ArrowUp`)e.preventDefault(),this.moveSelection(-1);else if(e.key===`Enter`){e.preventDefault();let t=this.container.querySelector(`.result-item.selected`);t&&t.dataset.id&&(this.onNavigate(t.dataset.id),this.close())}}),this.renderResults(),K(this.container)}show(){this.isOpen=!0,document.body.appendChild(this.container),requestAnimationFrame(()=>{this.container.classList.remove(`opacity-0`,`pointer-events-none`);let e=this.container.querySelector(`#search-modal`);e?.classList.remove(`scale-[0.97]`),e?.classList.add(`scale-100`)});let e=this.container.querySelector(`#search-input`);e.value=``,this.renderResults(),e.focus()}close(){this.isOpen=!1,this.container.classList.add(`opacity-0`,`pointer-events-none`);let e=this.container.querySelector(`#search-modal`);e?.classList.add(`scale-[0.97]`),e?.classList.remove(`scale-100`),setTimeout(()=>{!this.isOpen&&this.container.parentNode&&this.container.parentNode.removeChild(this.container)},200)}renderResults(e=``){let t=this.container.querySelector(`#search-results`),n=e.toLowerCase().trim(),i=r.state.pages;if(n&&(i=i.filter(e=>e.title.toLowerCase().includes(n))),i.length===0){t.innerHTML=`
        <div class="py-8 flex flex-col items-center justify-center text-center">
           <i data-lucide="search-x" class="w-8 h-8 text-[#d0d0d0] mb-3"></i>
           <p class="text-[14px] font-semibold text-[#555] mb-1">No results found</p>
           <p class="text-[12px] text-[#999]">We couldn't find anything matching "${e}"</p>
        </div>
      `,K(t);return}t.innerHTML=i.map((e,t)=>{let n=t===0,i=(e,t=[])=>{let n=r.state.pages.find(t=>t.id===e);return n?n.parentId?i(n.parentId,[n,...t]):[n,...t]:t},a=i(e.id),o=a.length>1?a.slice(0,-1).map(e=>e.title).join(` / `):`Workspace`;return`
          <div class="result-item flex flex-col px-3 py-2 rounded-[6px] cursor-pointer transition-colors border border-transparent ${n?`selected bg-[#f0f0f0] border-[#ebebeb] shadow-[0_1px_2px_rgba(0,0,0,0.02)]`:`hover:bg-[#f8f8f8]`}" data-id="${e.id}">
             <div class="flex items-center justify-between mb-0.5">
                <div class="flex items-center gap-2">
                   <i data-lucide="${e.icon||`file`}" class="w-4 h-4 shrink-0 text-[#888]"></i>
                   <span class="text-[14px] font-medium text-[#111]">${e.title}</span>
                </div>
                ${n?`<span class="text-[10px] uppercase tracking-wider text-[#888] font-semibold">Jump</span>`:``}
             </div>
             <div class="flex items-center gap-1.5 ml-6">
                <i data-lucide="folder" class="w-3 h-3 text-[#aaa]"></i>
                <span class="text-[11px] text-[#888]">${o}</span>
             </div>
          </div>
       `}).join(``),t.querySelectorAll(`.result-item`).forEach(e=>{e.addEventListener(`mouseenter`,e=>{t.querySelectorAll(`.result-item`).forEach(e=>{e.classList.remove(`selected`,`bg-[#f0f0f0]`,`border-[#ebebeb]`,`shadow-[0_1px_2px_rgba(0,0,0,0.02)]`);let t=e.querySelector(`span.uppercase`);t&&t.remove()}),e.currentTarget.classList.add(`selected`,`bg-[#f0f0f0]`,`border-[#ebebeb]`,`shadow-[0_1px_2px_rgba(0,0,0,0.02)]`)}),e.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.id;t&&(this.onNavigate(t),this.close())})}),K(t)}moveSelection(e){let t=Array.from(this.container.querySelectorAll(`.result-item`));if(t.length===0)return;let n=t.findIndex(e=>e.classList.contains(`selected`));n===-1&&(n=0);let r=n+e;r<0&&(r=t.length-1),r>=t.length&&(r=0),t.forEach(e=>{e.classList.remove(`selected`,`bg-[#f0f0f0]`,`border-[#ebebeb]`,`shadow-[0_1px_2px_rgba(0,0,0,0.02)]`);let t=e.querySelector(`span.uppercase`);t&&t.remove()});let i=t[r];i.classList.add(`selected`,`bg-[#f0f0f0]`,`border-[#ebebeb]`,`shadow-[0_1px_2px_rgba(0,0,0,0.02)]`);let a=i.querySelector(`.flex.items-center.justify-between`);a&&a.insertAdjacentHTML(`beforeend`,`<span class="text-[10px] uppercase tracking-wider text-[#888] font-semibold">Jump</span>`),i.scrollIntoView({block:`nearest`})}},gt=`file-text.file.folder.image.video.music.mic.book.code.box.package.archive.layout.layout-dashboard.settings.user.users.star.heart.clock.calendar.map.map-pin.compass.globe.sparkles.zap.flame.cloud.sun.moon.umbrella.activity.anchor.award.briefcase.camera.coffee.target.trophy.check-circle.info.alert-circle.help-circle.bell.tag.bookmark.shield.lock.key.rocket.megaphone.palette.database.puzzle.ruler`.split(`.`),_t=class{container;pageId;panesWrapper;editorDiv;canvasDiv;blockEditor;whiteboard;rightSidebar;searchPalette;isRightSidebarOpen=!1;navOpen=!1;moreMenuOpen=!1;iconPickerOpen=!1;globalClickHandler=null;get viewMode(){return r.state.viewMode}set viewMode(e){r.state.viewMode=e}constructor(e){this.pageId=e,this.container=document.createElement(`div`),this.container.className=`h-screen overflow-hidden flex flex-col bg-white`,this.panesWrapper=document.createElement(`div`),this.panesWrapper.className=`flex-1 flex flex-row overflow-hidden`,this.editorDiv=document.createElement(`div`),this.canvasDiv=document.createElement(`div`),this.blockEditor=new Y(e,e=>{this.whiteboard.addCard(e)}),this.whiteboard=new pt,this.rightSidebar=new mt(()=>{this.isRightSidebarOpen=!1,this.render()}),this.searchPalette=new ht(e=>this.navigateTo(e)),document.addEventListener(`keydown`,e=>{(e.metaKey||e.ctrlKey)&&e.key===`k`&&(e.preventDefault(),this.searchPalette.show())}),this.render()}getCurrentPage(){return r.state.pages.find(e=>e.id===this.pageId)}render(){let e=this.getCurrentPage(),t=e?e.title:`Untitled`,n=`
      <div class="flex flex-row w-full h-full">
        <div class="flex-1 flex flex-col min-w-0">
          <!-- Header -->
          <header class="h-[45px] border-b border-[#ebebeb] flex items-center justify-between pl-2 pr-2 bg-white z-10 shrink-0 relative">
        <div class="flex items-center gap-0 relative" id="home-nav-container">
          <button id="nav-home" title="Go Home (Drag for Top Pages)" class="touch-none w-[30px] h-[30px] shrink-0 flex items-center justify-center rounded-[4px] border-none bg-transparent cursor-pointer text-[#888] hover:bg-gray-100 hover:text-[#333] transition-colors">
            <i data-lucide="chevron-left" class="w-[18px] h-[18px]"></i>
          </button>
          
          <!-- Home dropdown for top level pages -->
          <div id="home-dropdown" class="absolute top-[calc(100%+4px)] left-0 min-w-[200px] max-h-[320px] overflow-y-auto bg-white border border-[#e8e8e8] rounded-[4px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] p-1 z-50 hidden">
             ${this.renderTopLevelPages()}
          </div>
          
          <div class="relative ml-1 flex items-center" id="title-icon-container">
            <button id="title-icon-btn" class="w-[24px] h-[24px] flex items-center justify-center rounded-[4px] border-none bg-transparent cursor-pointer text-[#888] hover:bg-gray-100 hover:text-[#333] transition-colors" title="Change icon">
              <i data-lucide="${e?.icon||`file-text`}" class="w-[14px] h-[14px]"></i>
            </button>
            <div id="icon-picker" class="absolute top-[calc(100%+4px)] left-0 w-[240px] bg-white border border-[#e8e8e8] rounded-[6px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] p-2 z-[60] ${this.iconPickerOpen?`block`:`hidden`}">
              <div class="text-[11px] font-semibold text-[#999] uppercase tracking-[0.05em] mb-2 px-1">Choose Icon</div>
              <div class="grid grid-cols-6 gap-1 max-h-[200px] overflow-y-auto pr-1">
                ${gt.map(t=>`
                  <button class="icon-pick-btn w-[30px] h-[30px] flex items-center justify-center rounded-[4px] border-none bg-transparent cursor-pointer text-[#666] hover:bg-[#f0f0f0] hover:text-[#111] transition-colors ${e?.icon===t?`bg-[#e8e8e8] text-[#111]`:``}" data-icon="${t}">
                    <i data-lucide="${t}" class="w-[14px] h-[14px]"></i>
                  </button>
                `).join(``)}
              </div>
            </div>
          </div>
          
          <span id="workspace-title" contenteditable="true" spellcheck="false" class="text-[14px] font-semibold text-gray-800 px-1 py-0.5 rounded-[4px] outline-none hover:bg-gray-100 focus:bg-white focus:ring-2 focus:ring-gray-200 transition-all max-w-[200px] truncate ml-0">${t}</span>
        </div>
        
        <div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] md:absolute md:top-1/2 md:-translate-y-1/2 md:bottom-auto md:z-auto flex items-center group/nav">
          <div class="flex items-center gap-3 relative px-0" id="nav-island">
            <!-- View Modes -->
            <div class="flex items-center bg-[#f5f5f5] rounded-[6px] p-[2px] gap-[2px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] md:shadow-none">
              <button data-mode="docs" class="mode-btn w-[46px] h-[28px] flex items-center justify-center rounded-[4px] border-none cursor-pointer font-inherit text-[12px] font-medium transition-all ${this.viewMode===`docs`?`bg-white text-[#111] shadow-[0_1px_3px_rgba(0,0,0,0.1)]`:`bg-transparent text-[#888] hover:text-[#333] hover:bg-[#eaeaea]`}">Docs</button>
              <button data-mode="both" class="mode-btn w-[46px] h-[28px] flex items-center justify-center rounded-[4px] border-none cursor-pointer font-inherit text-[12px] font-medium transition-all ${this.viewMode===`both`?`bg-white text-[#111] shadow-[0_1px_3px_rgba(0,0,0,0.1)]`:`bg-transparent text-[#888] hover:text-[#333] hover:bg-[#eaeaea]`}">Both</button>
              <button data-mode="draw" class="mode-btn w-[46px] h-[28px] flex items-center justify-center rounded-[4px] border-none cursor-pointer font-inherit text-[12px] font-medium transition-all ${this.viewMode===`draw`?`bg-white text-[#111] shadow-[0_1px_3px_rgba(0,0,0,0.1)]`:`bg-transparent text-[#888] hover:text-[#333] hover:bg-[#eaeaea]`}">Draw</button>
            </div>
            
            <!-- Navigation trigger -->
            <div class="flex items-center bg-[#f5f5f5] rounded-[6px] p-[2px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] md:shadow-none">
              <div id="nav-trigger" title="Search (Drag for Trail)" class="touch-none w-[30px] h-[28px] flex items-center justify-center rounded-[4px] cursor-pointer transition-colors ${this.navOpen?`bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)] text-[#111]`:`bg-transparent text-[#888] hover:text-[#333] hover:bg-[#eaeaea]`}">
                <div class="relative w-[18px] h-[18px]">
                   <i data-lucide="search" class="w-full h-full pointer-events-none"></i>
                   <div class="absolute flex items-center justify-center pointer-events-none" style="top: 45%; left: 45.29%; transform: translate(-50%, -50%);">
                      <i data-lucide="chevrons-up-down" class="w-[9px] h-[9px]"></i>
                   </div>
                </div>
              </div>
            </div>
            
            <!-- Navigation dropdown — trail pages -->
            <div id="nav-dropdown" class="absolute bottom-[calc(100%+8px)] md:bottom-auto md:top-[calc(100%+4px)] right-0 min-w-[220px] max-h-[320px] overflow-y-auto bg-white border border-[#e8e8e8] rounded-[4px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] p-1 z-50 ${this.navOpen?`block`:`hidden`}">
              ${this.renderTrailList()}
            </div>
          </div>
        </div>

        <div class="flex items-center gap-1 relative" id="more-menu-container">
          <button id="more-menu-btn" title="More options" class="w-[30px] h-[30px] flex items-center justify-center rounded-[4px] border-none bg-transparent cursor-pointer text-[#888] hover:bg-gray-100 hover:text-[#333] transition-colors ${this.moreMenuOpen?`bg-gray-100 text-[#333]`:``}">
            <i data-lucide="more-vertical" class="w-[18px] h-[18px]"></i>
          </button>
          <div id="more-dropdown" class="absolute top-[calc(100%+4px)] right-0 min-w-[200px] bg-white border border-[#e8e8e8] rounded-[4px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] p-1 z-50 ${this.moreMenuOpen?`block`:`hidden`}">
            ${this.renderMoreMenuOptions()}
          </div>
          <button id="toggle-sidebar" title="Toggle Sidebar" class="w-[30px] h-[30px] flex items-center justify-center rounded-[4px] border-none bg-transparent cursor-pointer text-[#888] hover:bg-gray-100 hover:text-[#333] transition-colors ${this.isRightSidebarOpen?`hidden`:``}">
            <i data-lucide="panel-right" class="w-[18px] h-[18px]"></i>
          </button>
        </div>
      </header>
      
        <main class="flex-1 flex flex-row overflow-hidden relative" id="ws-main"></main>
        </div>
        <!-- Right Sidebar slot -->
        <div id="right-sidebar-slot" class="shrink-0 h-full ${this.isRightSidebarOpen?`block`:`hidden`}"></div>
      </div>
    `;this.container.innerHTML=n;let i=this.container.querySelector(`#ws-main`);this.editorDiv.className=`bg-white overflow-hidden flex flex-col`,this.canvasDiv.className=`bg-[#fafafa] relative`,this.updatePanes(i);let a=this.container.querySelector(`#nav-home`),o=this.container.querySelector(`#home-dropdown`);a&&o&&a.addEventListener(`pointerdown`,e=>{if(e.pointerType===`mouse`&&e.button!==0)return;e.preventDefault();let t=e.clientX,n=e.clientY,i=!1,a=o.querySelectorAll(`.nav-page-btn`),s=e=>{if(!i&&(Math.abs(e.clientX-t)>3||Math.abs(e.clientY-n)>3)&&(i=!0,o.classList.remove(`hidden`)),i){let t=document.elementFromPoint(e.clientX,e.clientY);if(a.forEach(e=>e.classList.remove(`bg-[#f5f5f5]`)),t){let e=t.closest(`.nav-page-btn`);e&&e.classList.add(`bg-[#f5f5f5]`)}}},c=e=>{if(document.removeEventListener(`pointermove`,s),document.removeEventListener(`pointerup`,c),!i){r.setRoute(`home`);return}let t=document.elementFromPoint(e.clientX,e.clientY);if(t){let e=t.closest(`.nav-page-btn`);if(e){let t=e.dataset.id;if(t){o.classList.add(`hidden`),t!==this.pageId&&this.navigateTo(t);return}}}o.classList.add(`hidden`)};document.addEventListener(`pointermove`,s),document.addEventListener(`pointerup`,c)}),this.container.querySelector(`#workspace-title`)?.addEventListener(`input`,e=>{let t=e.currentTarget.textContent;t!==null&&r.renamePage(this.pageId,t)}),this.container.querySelector(`#more-menu-btn`)?.addEventListener(`click`,e=>{e.stopPropagation(),this.moreMenuOpen=!this.moreMenuOpen,this.iconPickerOpen=!1,this.render()}),this.container.querySelector(`#title-icon-btn`)?.addEventListener(`click`,e=>{e.stopPropagation(),this.iconPickerOpen=!this.iconPickerOpen,this.moreMenuOpen=!1,this.render()}),this.container.querySelectorAll(`.icon-pick-btn`).forEach(e=>{e.addEventListener(`click`,e=>{e.stopPropagation();let t=e.currentTarget.dataset.icon;t&&(r.updateIcon(this.pageId,t),this.iconPickerOpen=!1,this.render())})}),this.container.querySelectorAll(`.page-width-btn`).forEach(e=>{e.addEventListener(`click`,e=>{e.stopPropagation();let t=e.currentTarget.dataset.width;r.setPageWidth(this.pageId,t),this.blockEditor.updateWidth(),this.render()})}),this.container.querySelector(`#toggle-sidebar`)?.addEventListener(`click`,()=>{this.isRightSidebarOpen=!this.isRightSidebarOpen,this.render()}),this.container.querySelectorAll(`.mode-btn`).forEach(e=>{e.addEventListener(`click`,e=>{this.viewMode=e.currentTarget.dataset.mode,this.render()})}),this.container.querySelectorAll(`.nav-page-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.id;t&&t!==this.pageId&&this.navigateTo(t)})});let s=this.container.querySelector(`#nav-trigger`),c=this.container.querySelector(`#nav-dropdown`);s&&c&&s.addEventListener(`pointerdown`,e=>{if(e.pointerType===`mouse`&&e.button!==0)return;e.preventDefault();let t=e.clientX,n=e.clientY,r=!1,i=c.querySelectorAll(`.nav-page-btn`),a=e=>{if(!r&&(Math.abs(e.clientX-t)>3||Math.abs(e.clientY-n)>3)&&(r=!0,this.navOpen=!0,s.classList.remove(`bg-transparent`,`text-[#888]`,`hover:text-[#333]`,`hover:bg-[#eaeaea]`),s.classList.add(`bg-white`,`shadow-[0_1px_3px_rgba(0,0,0,0.1)]`,`text-[#111]`),c.classList.remove(`hidden`)),r){let t=document.elementFromPoint(e.clientX,e.clientY);if(i.forEach(e=>e.classList.remove(`bg-[#f5f5f5]`)),t){let e=t.closest(`.nav-page-btn`);e&&e.classList.add(`bg-[#f5f5f5]`)}}},o=e=>{if(document.removeEventListener(`pointermove`,a),document.removeEventListener(`pointerup`,o),!r){this.navOpen=!1,s.classList.remove(`bg-white`,`shadow-[0_1px_3px_rgba(0,0,0,0.1)]`,`text-[#111]`),s.classList.add(`bg-transparent`,`text-[#888]`,`hover:text-[#333]`,`hover:bg-[#eaeaea]`),c.classList.add(`hidden`),this.searchPalette.show();return}let t=document.elementFromPoint(e.clientX,e.clientY);if(t){let e=t.closest(`.nav-page-btn`);if(e){let t=e.dataset.id;if(t){this.navOpen=!1,s.classList.remove(`bg-white`,`shadow-[0_1px_3px_rgba(0,0,0,0.1)]`,`text-[#111]`),s.classList.add(`bg-transparent`,`text-[#888]`,`hover:text-[#333]`,`hover:bg-[#eaeaea]`),c.classList.add(`hidden`),t!==this.pageId&&this.navigateTo(t);return}}}this.navOpen=!1,s.classList.remove(`bg-white`,`shadow-[0_1px_3px_rgba(0,0,0,0.1)]`,`text-[#111]`),s.classList.add(`bg-transparent`,`text-[#888]`,`hover:text-[#333]`,`hover:bg-[#eaeaea]`),c.classList.add(`hidden`)};document.addEventListener(`pointermove`,a),document.addEventListener(`pointerup`,o)});let l=this.container.querySelector(`#nav-island`);l&&l.addEventListener(`wheel`,(e=>{e.preventDefault();let t=(e,n=[])=>{let i=r.state.pages.find(t=>t.id===e);return i?i.parentId?t(i.parentId,[i,...n]):[i,...n]:n},n=t(this.pageId),i=n.findIndex(e=>e.id===this.pageId);if(i!==-1){let t=i;e.deltaY>0&&i<n.length-1?t++:e.deltaY<0&&i>0&&t--,t!==i&&this.navigateTo(n[t].id)}}),{passive:!1}),this.globalClickHandler||(this.globalClickHandler=e=>{if(this.navOpen&&!e.target.closest(`#nav-island`)){this.navOpen=!1;let e=this.container.querySelector(`#nav-dropdown`);e&&e.classList.add(`hidden`)}let t=this.container.querySelector(`#home-dropdown`);t&&!t.classList.contains(`hidden`)&&!e.target.closest(`#home-nav-container`)&&t.classList.add(`hidden`);let n=this.container.querySelector(`#more-menu-container`);this.moreMenuOpen&&n&&!n.contains(e.target)&&(this.moreMenuOpen=!1,this.render());let r=this.container.querySelector(`#title-icon-container`);this.iconPickerOpen&&r&&!r.contains(e.target)&&(this.iconPickerOpen=!1,this.render())},document.addEventListener(`mousedown`,this.globalClickHandler)),K(this.container)}navigateTo(e){this.pageId=e,r.state.activeId=e,this.navOpen=!1,this.blockEditor=new Y(e,e=>{this.whiteboard.addCard(e)}),this.editorDiv.innerHTML=``,this.render()}renderTrailList(){let e=(t,n=[])=>{let i=r.state.pages.find(e=>e.id===t);return i?i.parentId?e(i.parentId,[i,...n]):[i,...n]:n},t=e(this.pageId);return!t||t.length<=1?`<div class="p-2 text-center text-[#999] text-[13px]">Nothing here</div>`:t.map((e,t)=>{let n=e.id===this.pageId,r=8+t*16;return`
        <button class="nav-page-btn w-full text-left px-2 py-1.5 border-none rounded-[4px] cursor-pointer font-inherit text-[13px] transition-colors flex items-center ${n?`bg-[#f0f0f0] font-semibold text-[#111]`:`bg-transparent font-normal text-[#555] hover:bg-[#f5f5f5]`}" data-id="${e.id}" style="padding-left: ${r}px">
          <i data-lucide="${e.icon}" class="w-3.5 h-3.5 mr-2 shrink-0 ${n?`text-[#333]`:`text-[#888]`}"></i><span class="truncate">${e.title}</span>
        </button>
      `}).join(``)}renderTopLevelPages(){let e=r.state.pages.filter(e=>!e.parentId);return e.length===0?`<div class="p-2 text-center text-[#999] text-[13px]">No pages</div>`:e.map(e=>`
      <button class="nav-page-btn w-full text-left px-2 py-1.5 border-none rounded-[4px] cursor-pointer font-inherit text-[13px] transition-colors flex items-center ${e.id===this.pageId?`bg-[#f0f0f0] font-semibold text-[#111]`:`bg-transparent font-normal text-[#555] hover:bg-[#f5f5f5]`}" data-id="${e.id}">
        <i data-lucide="${e.icon}" class="w-3.5 h-3.5 mr-2 shrink-0 ${e.id===this.pageId?`text-[#333]`:`text-[#888]`}"></i><span class="truncate">${e.title}</span>
      </button>
    `).join(``)}renderMoreMenuOptions(){let e=this.getCurrentPage()?.pageWidth||`full`;return`
      <div class="px-2 py-1.5">
        <span class="text-[11px] font-semibold text-[#999] uppercase tracking-[0.05em]">Page Width</span>
      </div>
      <div class="flex items-center bg-[#f5f5f5] rounded-[4px] p-0.5 gap-0.5 mt-0.5">
        <button data-width="full" class="page-width-btn flex-1 px-2 py-1.5 flex items-center justify-center rounded-[3px] border-none cursor-pointer font-inherit text-[12px] font-medium transition-all ${e===`full`?`bg-white text-[#111] shadow-[0_1px_2px_rgba(0,0,0,0.05)]`:`bg-transparent text-[#777] hover:text-[#333] hover:bg-[#ebebeb]`}">
          Full
        </button>
        <button data-width="standard" class="page-width-btn flex-1 px-2 py-1.5 flex items-center justify-center rounded-[3px] border-none cursor-pointer font-inherit text-[12px] font-medium transition-all ${e===`standard`?`bg-white text-[#111] shadow-[0_1px_2px_rgba(0,0,0,0.05)]`:`bg-transparent text-[#777] hover:text-[#333] hover:bg-[#ebebeb]`}">
          Standard
        </button>
      </div>
    `}updatePanes(e){if(e.innerHTML=``,(this.viewMode===`docs`||this.viewMode===`both`)&&(this.editorDiv.className=`bg-white overflow-hidden flex flex-col ${this.viewMode===`both`?`flex-1 border-r border-[#ebebeb]`:`flex-1`}`,this.editorDiv.childNodes.length||this.editorDiv.appendChild(this.blockEditor.container),e.appendChild(this.editorDiv)),(this.viewMode===`draw`||this.viewMode===`both`)&&(this.canvasDiv.className=`bg-white relative ${this.viewMode,`flex-1`}`,this.canvasDiv.childNodes.length||this.canvasDiv.appendChild(this.whiteboard.container),e.appendChild(this.canvasDiv),setTimeout(()=>this.whiteboard.resize(),10)),this.isRightSidebarOpen){let e=this.container.querySelector(`#right-sidebar-slot`);e&&(e.appendChild(this.rightSidebar.container),this.rightSidebar.render())}}},Z=document.getElementById(`app`),Q=null,$=()=>{Z.innerHTML=``,r.state.route===`home`?(Q=new ut,Z.appendChild(Q.container)):r.state.route===`workspace`&&r.state.activeId&&(Q=new _t(r.state.activeId),Z.appendChild(Q.container))};r.subscribe($),$();