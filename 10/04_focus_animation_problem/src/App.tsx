import { h } from './h.js';
import { domReplacer } from './domReplacer.js';

export const App = () => {
  let name = '';

  const appReplacer = domReplacer(() => {
    const inputDom = (
      <input
        id="name-input"
        value={name}
        onKeyup={() => {
          name = inputDom.value;
          appReplacer.render();
        }}
      />
    );
    return (
      <div>
        {inputDom}
        <p>入力値: {name}</p>
      </div>
    );
  });

  return appReplacer.dom;
};
