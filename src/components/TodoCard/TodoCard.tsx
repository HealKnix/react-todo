import { Todo } from '../../types/TodoType';
import './TodoCard.css';

export default function TodoCard({ id, title, desctiption }: Todo) {
  return (
    <>
      <div className="todo">
        <h6>{id}</h6>
        <h2 className="todo__title">{title}</h2>
        <p className="todo__description">{desctiption}</p>
      </div>
    </>
  );
}
