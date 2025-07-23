import { h } from './h.js';
import { Card } from './Card.js';

const App = () => {
  return (
    <section>
      <Card title='ユーザー情報'>
        <p>名前: 山田 太郎</p>
        <p>年齢: 30歳</p>
      </Card>
    </section>
  );
};
const dom = App();
document.body.append(dom);
