import { App } from './src/App';
import * as fs from 'fs';
import * as path from 'path';

// Appコンポーネントを文字列として実行（レンダリング）
const appHtml = App();

// HTML全体を構築
const html = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JSX to HTML SSG Example</title>
</head>
<body>
  ${appHtml}
</body>
</html>`;

// 出力先のパスを設定
const outputPath = path.resolve(__dirname, './index.html');

// ファイルに書き出し
fs.writeFileSync(outputPath, html);

console.log(`HTMLの生成が完了しました: ${outputPath}`);
