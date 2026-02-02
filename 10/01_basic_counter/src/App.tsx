import { h } from './h.js';
import { domReplacer } from './domReplacer.js';

export const App = () => {
  let count = 0;

  const appReplacer = domReplacer(() => (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => {
        count++;
        appReplacer.render();
      }}>
        +1
      </button>
    </div>
  ));

  return appReplacer.dom;
};
