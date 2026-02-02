import { h } from './h.js';
import { domReplacer } from './domReplacer.js';
export const App = () => {
    let name = '';
    const appReplacer = domReplacer(() => {
        const inputDom = (h("input", { id: "name-input", value: name, onKeyup: (e) => {
                if (e.isComposing)
                    return;
                name = inputDom.value;
                appReplacer.render();
            } }));
        return (h("div", null,
            inputDom,
            h("p", null,
                "\u5165\u529B\u5024: ",
                name)));
    });
    return appReplacer.dom;
};
