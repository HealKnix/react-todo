import { useState } from 'react';
import { Todo } from '../../types/TodoType';
import BgRects from '../BgRects/BgRects';
import TodoCard from '../TodoCard/TodoCard';
import './App.css';

const todoList: Todo[] = [
  {
    id: 0,
    title: 'Title',
    desctiption: 'Description',
  },
  {
    id: 1,
    title: 'Title',
    desctiption: 'Description',
  },
  {
    id: 2,
    title: 'Title',
    desctiption: 'Description',
  },
  {
    id: 3,
    title: 'Title',
    desctiption: 'Description',
  },
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(todoList); // Тудушка

  const [id, setId] = useState<number>(todoList.length); // Id'шник тудушки

  const [titleToDo, setTitleToDo] = useState<string>(''); // Заголовок тудушки
  const [descriptionToDo, setDescriptionToDo] = useState<string>(''); // Описание тудушки

  const [titleError, setTitleError] = useState<string>('');

  const [descriptionError, setDescriptionError] = useState<string>('');

  const handleClick = () => {
    if (!titleToDo) {
      setTitleError('error');
      if (descriptionToDo) {
        setDescriptionError('');
      }
    }
    if (!descriptionToDo) {
      setDescriptionError('error');
      if (titleToDo) {
        setTitleError('');
      }
    }
    if (!titleToDo || !descriptionToDo) {
      return;
    }

    setDescriptionError('');
    setTitleError('');

    setTodos((todo) =>
      todo.concat({ id: id, title: titleToDo, desctiption: descriptionToDo }),
    );

    setId((id) => id + 1);
  };

  const handleInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleToDo(e.target.value);
  };

  const handleInputDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptionToDo(e.target.value);
  };

  return (
    <>
      <BgRects />

      <div className="main">
        <h1 className="title">To Do</h1>

        <div className="input__wrapper">
          <label htmlFor="todo_title" className={titleError}>
            Title
            {titleError && <> is required</>}
          </label>
          <input
            type="text"
            placeholder="Type here..."
            value={titleToDo}
            id="todo_title"
            onInput={handleInputTitle}
            className={titleError}
          />
        </div>

        <div className="input__wrapper">
          <label htmlFor="todo_description" className={descriptionError}>
            Description
            {descriptionError && <> is required</>}
          </label>
          <input
            type="text"
            placeholder="Type here..."
            value={descriptionToDo}
            id="todo_description"
            onInput={handleInputDescription}
            className={descriptionError}
          />
        </div>

        <hr />

        <button className="btn_new_todo" onClick={handleClick}>
          +
        </button>

        {todoList.length > 0 ? (
          todos.map((todo) => <TodoCard {...todo} />)
        ) : (
          <p>No todos</p>
        )}
      </div>
    </>
  );
}

export default App;
