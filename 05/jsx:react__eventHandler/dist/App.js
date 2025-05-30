import { h } from './h.js';
const App = () => {
    let count = 0;
    return (h("button", { onClick: (event) => {
            count++;
            event.target.textContent = count.toString();
        } }, count));
};
const dom = App();
document.body.append(dom);
