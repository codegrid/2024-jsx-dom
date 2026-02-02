import { h } from './h.js';
import { domReplacer } from './domReplacer.js';
export const App = () => {
    let name = '';
    const inputDom = (h("input", { value: name, onKeyup: (e) => {
            if (e.isComposing)
                return;
            name = inputDom.value;
            valueDisplayReplacer.render();
        } }));
    const valueDisplayReplacer = domReplacer(() => h("p", null,
        "\u5165\u529B\u5024: ",
        name));
    return (h("div", null,
        inputDom,
        valueDisplayReplacer.dom));
};
