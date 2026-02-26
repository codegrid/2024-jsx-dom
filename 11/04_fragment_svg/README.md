# 04_fragment_svg

Fragment & SVG Demo - JSXのFragmentとSVG要素の対応

## 主な機能

### Fragment対応
- `<></>` 構文（Fragment）を使用して複数の要素をグループ化
- `domReplacer`内でFragmentを使い、複数の要素を同時に再レンダリング

### SVG対応
- SVG要素を`createElementNS`で正しく作成
- アイコンボタンにSVGアイコンを使用

## 実装のポイント

- `h.ts`に`Fragment`関数を追加
- SVG要素名のリストを用意し、`createElementNS`で作成
- `tsconfig.json`に`jsxFragmentFactory: "Fragment"`を設定
