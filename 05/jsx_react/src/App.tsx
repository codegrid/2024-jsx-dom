import { h } from './h.js';

const App = () => {
  return (
    <ul>
      <li style='color: red'>red</li>
      <li style='color: blue'>blue</li>
    </ul>
  );
};
const dom = App();
document.body.append(dom);
