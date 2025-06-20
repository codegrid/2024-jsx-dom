import { h } from './h.js';

export const App = () => {
  return (
    <ul>
      <li style='color: red' data-html='<div>&^^&</div>'>
        red
      </li>
      <li style='color: blue'>blue</li>
    </ul>
  );
};

const html = App();
document.body.innerHTML = html;
