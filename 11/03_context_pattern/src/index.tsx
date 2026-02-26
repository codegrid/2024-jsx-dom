import { h } from './h';
import { domReplacer } from './domReplacer';
import { App } from './App';
import {
  useInputDisplaySync,
  provideInputDisplaySync,
} from './useInputDisplaySync';

// コンテキストの生成
const selfCtx = useInputDisplaySync({ appRender: () => render() });

// コンテキストの提供
provideInputDisplaySync(selfCtx);

// DOMと再レンダリング関数の取得
const { dom, render } = domReplacer(() => <App />);

// コンテキスト初期化の完了前の状態のDOMを表示
document.getElementById('app')!.appendChild(dom);

// コンテキストの初期化
selfCtx.initialize();
