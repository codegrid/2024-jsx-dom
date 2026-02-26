import { h } from './h';
import { domReplacer } from './domReplacer';
import { ValueInput } from './ValueInput';
import { ValueDisplay } from './ValueDisplay';
import styles from './App.module.css';

export const App = () => {
  let inputValue = ''; // 状態データの管理

  const valueDisplayReplacer = domReplacer(() =>
    /* 入力値の表示用コンポーネント */
    <ValueDisplay value={inputValue} />
  );

  return (
    <div class={styles.App}>
      {/* 入力フィールド用コンポーネント */}
      <ValueInput
        value={inputValue}
        onInput={(value) => {
          inputValue = value; // 状態データの更新
          valueDisplayReplacer.render(); // 最新の値を必要とする子のみを再レンダリング
        }}
      />
      {valueDisplayReplacer.dom}
    </div>
  );
};
