globalThis['__css-content-23c89480740ac69d688f46ab62f1e4a8__']=".App-module__gPMrEW__App{text-align:center;border:1px solid silver;margin:20px;padding:20px}.CountButton-module__zmuYfq__CountButton{color:#fff;cursor:pointer;background-color:#007bff;border:none;border-radius:5px;min-width:100px;margin:5px;padding:10px 20px;font-size:30px}.CountButton-module__zmuYfq__CountButton:focus{outline:thick double #32a1ce}\n";globalThis['__css-digest-23c89480740ac69d688f46ab62f1e4a8__']="23c89480740ac69d688f46ab62f1e4a8";
"use strict";(()=>{var a=globalThis['__css-content-23c89480740ac69d688f46ab62f1e4a8__'],n=globalThis['__css-digest-23c89480740ac69d688f46ab62f1e4a8__'],r=()=>{setTimeout(()=>{if(!globalThis.document)return;let t=globalThis.document.querySelector("head");t&&t.shadowRoot&&(t=t.shadowRoot),t||(t=globalThis.document.head);let o=t.querySelector("#_"+n);if(!o){o=globalThis.document.createElement("style"),o.id="_"+n;let e=globalThis.document.createTextNode(a);o.appendChild(e),t.appendChild(o)}},0)};var u=new Proxy({app:"App-module__gPMrEW__App",App:"App-module__gPMrEW__App"},{get:function(t,o){return r(),t[o]}});var s=globalThis['__css-content-23c89480740ac69d688f46ab62f1e4a8__'],d=globalThis['__css-digest-23c89480740ac69d688f46ab62f1e4a8__'],l=()=>{setTimeout(()=>{if(!globalThis.document)return;let t=globalThis.document.querySelector("head");t&&t.shadowRoot&&(t=t.shadowRoot),t||(t=globalThis.document.head);let o=t.querySelector("#_"+d);if(!o){o=globalThis.document.createElement("style"),o.id="_"+d;let e=globalThis.document.createTextNode(s);o.appendChild(e),t.appendChild(o)}},0)};var i=new Proxy({countButton:"CountButton-module__zmuYfq__CountButton",CountButton:"CountButton-module__zmuYfq__CountButton"},{get:function(t,o){return l(),t[o]}});var c=({count:t,onClick:o})=>{let e=document.createElement("button");return e.textContent=t.toString(),e.classList.add(i.CountButton),e.addEventListener("click",o),e};var p=()=>{let t=0,o=document.createElement("div");return o.classList.add(u.App),o.appendChild(c({count:0,onClick:e=>{t++,e.target.textContent=t.toString()}})),o};document.querySelector("#counterWidget")?.appendChild(p());})();
