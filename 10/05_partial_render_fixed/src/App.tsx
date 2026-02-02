import { h } from './h.js';
import { domReplacer } from './domReplacer.js';
import styles from './App.module.css';

export const App = () => {
  let name = '';

  const inputDom = (
    <input
      class={styles._Input}
      value={name}
      onKeyup={(e: KeyboardEvent) => {
        if (e.isComposing) return;
        name = inputDom.value;
        valueDisplayReplacer.render();
      }}
    />
  );

  const valueDisplayReplacer = domReplacer(() =>
    <p class={styles._Output}>入力値: {name}</p>
  );

  return (
    <div class={styles.App}>
      {inputDom}
      {valueDisplayReplacer.dom}
    </div>
  );
};
