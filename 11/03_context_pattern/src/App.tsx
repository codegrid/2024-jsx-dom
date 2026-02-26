import { h } from './h';
import { injectInputDisplaySync } from './useInputDisplaySync';
import { ValueInput } from './ValueInput';
import { ValueDisplay } from './ValueDisplay';
import styles from './App.module.css';

export const App = () => {
  // コンテキストの取得
  const selfCtx = injectInputDisplaySync();

  // コンテキストの初期化状態に応じて表示を切り替える
  return selfCtx.initialized ? (
    <div class={styles.App}>
      <ValueInput />
      <ValueDisplay />
    </div>
  ) : (
    <p>Loading...</p>
  );
};
