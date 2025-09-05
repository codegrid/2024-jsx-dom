export const styleFormat = (
  styles: string | { [name: string]: any }
): string | undefined => {
  if (typeof styles === 'string') return styles; // 文字列の場合はそのまま返す
  const buf: string[] = [];
  for (const [key, value] of Object.entries(styles)) {
    // 有効な値（空文字以外の文字列、数値、真偽値）のみを対象とする
    if (
      (typeof value === 'string' && value !== '') ||
      typeof value === 'number' ||
      typeof value === 'boolean'
    ) {
      buf.push(`${key}: ${String(value)}`);
    }
  }
  return buf.length === 0 ? undefined : buf.join(';'); // 有効な指定がない場合はundefinedを返す
};
