import { h } from './h.js';

const App = () => {
  const notifications = ['通知メッセージ1', '通知メッセージ2'];
  // const notifications: string[] = [];
  return (
    <div>
      {notifications.length > 0 ? (
        notifications.map((text) => <p>{text}</p>)
      ) : (
        <p>通知はありません</p>
      )}
    </div>
  );
};
const dom = App();
document.body.append(dom);
