import { h } from './h.js';
import { domReplacer } from './domReplacer.js';

export const App = () => {
  let name = '';

  const inputDom = (
    <input
      value={name}
      onKeyup={() => {
        name = inputDom.value;
        valueDisplayReplacer.render();
      }}
    />
  );

  const valueDisplayReplacer = domReplacer(() =>
    <p>入力値: {name}</p>
  );

  return (
    <div>
      {inputDom}
      {valueDisplayReplacer.dom}
    </div>
  );
};
