export type InputDisplaySyncCtx = ReturnType<typeof useInputDisplaySync>;

let cache: InputDisplaySyncCtx | null = null;

export const provideInputDisplaySync = (
  v: InputDisplaySyncCtx,
): InputDisplaySyncCtx => {
  if (cache !== null) {
    throw new Error('InputDisplaySyncは既に提供されています');
  }
  cache = v;
  return v;
};

export const injectInputDisplaySync = (): InputDisplaySyncCtx => {
  if (cache === null) {
    throw new Error('InputDisplaySyncが提供されていません');
  }
  return cache;
};

const fetchInitialData = async () => {
  // 非同期データ取得をシミュレート
  await new Promise((resolve) => setTimeout(resolve, 3000));
};

export const useInputDisplaySync = ({
  appRender,
}: {
  appRender: () => void;
}) => {
  // 状態データの管理
  const state = {
    inputValue: '',
    initialized: false,
  };

  // 描画関数の管理
  const handler = {
    valueDisplayRender: null as (() => void) | null,
  };

  return {
    // 初期化状態
    get initialized() {
      return state.initialized;
    },

    // 入力値
    get inputValue() {
      return state.inputValue;
    },

    // 描画関数の設定
    setValueDisplayRender: (render: () => void) => {
      handler.valueDisplayRender = render;
    },

    // 入力データの更新
    updateInputValue: (value: string) => {
      if (!handler.valueDisplayRender) {
        throw new Error('ValueDisplayのrender関数が設定されていません');
      }
      state.inputValue = value;
      handler.valueDisplayRender(); // 値の表示UIのみを再レンダリング
    },

    // 初期化処理
    initialize: async () => {
      appRender(); // 初期表示（スケルトンやloading表示）

      // 非同期データの取得
      await fetchInitialData();

      state.initialized = true;
      appRender(); // 初期化完了後の再描画
    },
  };
};
