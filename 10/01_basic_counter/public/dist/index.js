globalThis['__css-content-ee99c97624aa3bd0df0ff34e8da2ef24__']=".App-module__gPMrEW__App{padding:20px}.App-module__gPMrEW___Count{color:#333;background:#f8f9fa;border-left:3px solid #4a90e2;border-radius:4px;margin-bottom:16px;padding:16px 20px;font-size:18px}.App-module__gPMrEW___Button{cursor:pointer;color:#4a90e2;background:#fff;border:2px solid #4a90e2;border-radius:8px;padding:12px 24px;font-size:20px}.App-module__gPMrEW___Button:active{background:#e8f2fc;transform:scale(.96)}\n";globalThis['__css-digest-ee99c97624aa3bd0df0ff34e8da2ef24__']="ee99c97624aa3bd0df0ff34e8da2ef24";
"use strict";
(() => {
  // src/h.ts
  var h = (element, attributes, ...children) => {
    if (typeof element === "function") {
      return element(attributes || {}, children);
    }
    const el = document.createElement(element);
    for (const attrName in attributes) {
      const attrValue = attributes[attrName];
      if (/^on[A-Z][a-z]/.test(attrName) && typeof attrValue === "function") {
        const eventName = attrName.slice(2).toLowerCase();
        el.addEventListener(eventName, attrValue);
      } else {
        el.setAttribute(attrName, attrValue);
      }
    }
    el.append(...children.flat(Infinity));
    return el;
  };

  // src/domReplacer.ts
  var domReplacer = (component) => {
    let dom = component();
    function replaceDom() {
      const newDom = component();
      dom.replaceWith(newDom);
      return dom = newDom;
    }
    function render() {
      replaceDom();
    }
    return {
      render,
      // 再レンダリング用の関数（DOMの置換を行う）
      dom
      // 初回レンダリングで生成したDOM
    };
  };

  // esbuild-css-modules-plugin-ns-js::src/App.module.css:injector.js
  var content = globalThis['__css-content-ee99c97624aa3bd0df0ff34e8da2ef24__'];
  var digest = globalThis['__css-digest-ee99c97624aa3bd0df0ff34e8da2ef24__'];
  var inject = () => {
    setTimeout(() => {
      if (!globalThis.document) {
        return;
      }
      let root = globalThis.document.querySelector("head");
      if (root && root.shadowRoot) {
        root = root.shadowRoot;
      }
      if (!root) {
        root = globalThis.document.head;
      }
      let container = root.querySelector("#_" + digest);
      if (!container) {
        container = globalThis.document.createElement("style");
        container.id = "_" + digest;
        const text = globalThis.document.createTextNode(content);
        container.appendChild(text);
        root.appendChild(container);
      }
    }, 0);
  };

  // src/App.module.css
  var App_default = new Proxy({
    "app": "App-module__gPMrEW__App",
    "button": "App-module__gPMrEW___Button",
    "count": "App-module__gPMrEW___Count",
    "App": "App-module__gPMrEW__App",
    "_Button": "App-module__gPMrEW___Button",
    "_Count": "App-module__gPMrEW___Count"
  }, {
    get: function(source, key) {
      inject();
      return source[key];
    }
  });

  // src/App.tsx
  var App = () => {
    let count = 0;
    const appReplacer = domReplacer(() => /* @__PURE__ */ h("div", { class: App_default.App }, /* @__PURE__ */ h("p", { class: App_default._Count }, "\u30AB\u30A6\u30F3\u30C8: ", count), /* @__PURE__ */ h("button", { class: App_default._Button, onClick: () => {
      count++;
      appReplacer.render();
    } }, "+1")));
    return appReplacer.dom;
  };

  // src/index.tsx
  document.querySelector("#app")?.appendChild(/* @__PURE__ */ h(App, null));
})();
