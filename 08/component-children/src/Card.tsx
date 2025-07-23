import { h } from './h.js';

export const Card = ({ title }: { title: string }, children: any[]) => {
  return (
    <div class='card'>
      <h3>{title}</h3>
      <div class='content'>{...children}</div>
    </div>
  );
};
