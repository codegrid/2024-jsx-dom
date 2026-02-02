export const fetchUsers = () => {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve([
        '山田太郎',
        '佐藤花子',
        '鈴木一郎',
        '田中五郎',
        '高橋美咲',
        '伊藤健太',
        '青木智子',
        '小橋翔',
        '田村太一',
        '花村春菜',
        '藤原明',
        '木下陽子',
      ]);
    }, 1000);
  });
};
