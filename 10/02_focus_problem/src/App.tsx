import { h } from './h.js';
import { domReplacer } from './domReplacer.js';
import styles from './App.module.css';

export const App = () => {
  let name = '';

  const appReplacer = domReplacer(() => {
    const inputDom = (
      <input
        class={styles._Input}
        value={name}
        onKeyup={(e: KeyboardEvent) => {
          if (e.isComposing) return;
          name = inputDom.value;
          appReplacer.render();
        }}
      />
    );
    return (
      <div class={styles.App}>
        {inputDom}
        <p class={styles._Output}>入力値: {name}</p>
      </div>
    );
  });

  return appReplacer.dom;
};
