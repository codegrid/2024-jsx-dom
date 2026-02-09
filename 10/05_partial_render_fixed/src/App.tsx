import { h } from './h.js';
import { domReplacer } from './domReplacer.js';
import styles from './App.module.css';

export const App = () => {
  let inputValue = '';

  const inputDom = (
    <input
      class={styles._Input}
      value={inputValue}
      onKeyup={(e: KeyboardEvent) => {
        if (e.isComposing) return;
        inputValue = inputDom.value;
        valueDisplayReplacer.render();
      }}
    />
  );

  const valueDisplayReplacer = domReplacer(() =>
    <p class={styles._Output}>入力値: {inputValue}</p>
  );

  return (
    <div class={styles.App}>
      {inputDom}
      {valueDisplayReplacer.dom}
    </div>
  );
};
