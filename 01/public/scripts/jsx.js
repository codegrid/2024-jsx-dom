"use strict";(()=>{var l=new Set(["disabled","selected","checked","aria-checked"]),i=new Set(["svg","rect","circle","ellipse","line","polyline","polygon","path","image","text","defs","g","symbol","use"]);var d=(t,n)=>{let r=e=>e==null||typeof e=="boolean"||t.append(e);n.forEach(e=>Array.isArray(e)?e.forEach(r):r(e))};var c=(t,n,...r)=>{if(typeof t=="function")return t(n,r);let e=i.has(t)?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);for(let o in n)if(/^on[A-Z][a-z]/.test(o)){let s=o.slice(2).toLowerCase();e.addEventListener(s,n[o])}else if(l.has(o))n[o]===!0&&e.setAttribute(o,"true");else{let s=n[o];[null,void 0].includes(s)||e.setAttribute(o,n[o])}return d(e,r),e};var a=()=>{let t=0;return c("div",{class:"counter-widget"},c("button",{onClick:n=>{t++,n.target.textContent=t.toString()}},t))},u=a();document.querySelector("#counterWidget")?.appendChild(u);})();
