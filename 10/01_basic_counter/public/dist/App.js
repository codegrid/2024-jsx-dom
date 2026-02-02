import { h } from './h.js';
import { domReplacer } from './domReplacer.js';
export const App = () => {
    let count = 0;
    const { dom, render } = domReplacer(() => (h("div", null,
        h("p", null,
            "\u30AB\u30A6\u30F3\u30C8: ",
            count),
        h("button", { onClick: () => {
                count++;
                render();
            } }, "+1"))));
    return dom;
};
