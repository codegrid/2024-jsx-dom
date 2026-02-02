globalThis['__css-content-808794906c4839b82ed240e38daf1f1c__']=".App-module__gPMrEW__App{padding:20px}.App-module__gPMrEW___Input{border:2px solid #e0e0e0;border-radius:8px;width:320px;padding:10px 14px;font-size:16px}.App-module__gPMrEW___Output{color:#333;background:#f8f9fa;border-left:3px solid #4a90e2;border-radius:4px;margin-top:16px;padding:12px 16px;font-size:16px}\n";globalThis['__css-digest-808794906c4839b82ed240e38daf1f1c__']="808794906c4839b82ed240e38daf1f1c";
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

  // src/getFocusHandler.ts
  var getFocusHandler = (node) => {
    return (selector, cursorPosition = 0) => {
      const target = node.querySelector(selector) || node.parentElement?.querySelector(selector);
      if (!target) return;
      target?.focus();
      if (cursorPosition) {
        target?.setSelectionRange(cursorPosition, cursorPosition);
      }
    };
  };

  // src/domReplacer.ts
  var domReplacer = (domFactory) => {
    let dom = domFactory();
    function replaceDom() {
      const newDom = domFactory();
      dom.replaceWith(newDom);
      return dom = newDom;
    }
    function render() {
      const id = document.activeElement?.id;
      const selectionStart = document.activeElement?.selectionStart;
      const newDom = replaceDom();
      const focus = getFocusHandler(newDom);
      if (id && focus) {
        focus(`#${id}`, selectionStart);
      }
    }
    return {
      render,
      dom
    };
  };

  // esbuild-css-modules-plugin-ns-js::src/App.module.css:injector.js
  var content = globalThis['__css-content-808794906c4839b82ed240e38daf1f1c__'];
  var digest = globalThis['__css-digest-808794906c4839b82ed240e38daf1f1c__'];
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
    "input": "App-module__gPMrEW___Input",
    "output": "App-module__gPMrEW___Output",
    "App": "App-module__gPMrEW__App",
    "_Input": "App-module__gPMrEW___Input",
    "_Output": "App-module__gPMrEW___Output"
  }, {
    get: function(source, key) {
      inject();
      return source[key];
    }
  });

  // src/App.tsx
  var App = () => {
    let name = "";
    const appReplacer = domReplacer(() => {
      const inputDom = /* @__PURE__ */ h(
        "input",
        {
          id: "name-input",
          class: App_default._Input,
          value: name,
          onKeyup: (e) => {
            if (e.isComposing) return;
            name = inputDom.value;
            appReplacer.render();
          }
        }
      );
      return /* @__PURE__ */ h("div", { class: App_default.App }, inputDom, /* @__PURE__ */ h("p", { class: App_default._Output }, "\u5165\u529B\u5024: ", name));
    });
    return appReplacer.dom;
  };

  // src/index.tsx
  document.querySelector("#app")?.appendChild(/* @__PURE__ */ h(App, null));
})();
