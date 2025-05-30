import { h } from './h.js';

const App = () => {
  let count = 0;
  return (
    <button
      onClick={(event: Event) => {
        count++;
        (event.target! as HTMLButtonElement).textContent = count.toString();
      }}
    >
      {count}
    </button>
  );
};

const dom = App();
document.body.append(dom);
