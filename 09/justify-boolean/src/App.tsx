import { h } from './h.js';

const CheckBox = ({ checked }: { checked: boolean }) => (
  <input type='checkbox' checked={checked} />
);

const App = () => {
  return (
    <div>
      <CheckBox checked={true} />
      <CheckBox checked={false} />
    </div>
  );
};
const dom = App();
document.body.append(dom);
