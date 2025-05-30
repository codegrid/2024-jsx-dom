// const App = () => {
//   return (
//     <ul>
//       <li style='color: red'>red</li>
//       <li style='color: blue'>blue</li>
//     </ul>
//   );
// };

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
