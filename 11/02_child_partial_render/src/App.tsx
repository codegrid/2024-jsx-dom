import { h } from './h';
import { ValueInput } from './ValueInput';
import { ValueDisplay } from './ValueDisplay';
import styles from './App.module.css';

export const App = () => {
  let inputValue = '';
  let valueDisplayRender: (() => void) | null = null; // 子のrender関数を受け取るための変数

  return (
    <div class={styles.App}>
      <ValueInput
        value={inputValue}
        onInput={(value) => {
          inputValue = value;
          if (!valueDisplayRender) {
            throw new Error('ValueDisplayのrender関数が設定されていません');
          }
          valueDisplayRender(); // 子のrender関数を実行
        }}
      />
      <ValueDisplay
        onInitialized={(render) => {
          valueDisplayRender = render;
        }}
        valueRef={{
          get value() {
            return inputValue;
          }
        }}
      />
    </div>
  );
};
