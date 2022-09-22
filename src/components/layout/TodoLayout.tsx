import React, { useId } from 'react';
import './todoLayout.css';
import TodoCard from '../card/TodoCard';
import useTodoState from '../../store/Todo.state';
const TodoLayout: React.FC = () => {
  const { todos } = useTodoState();
  return (
    <div>
      <h1>Todos</h1>
      {/**TODO CARD */}
      {todos.map(todo => (
        <TodoCard
          key={todo.id}
          id={todo.id}
          todoValue={todo.name}
          isCompleted={todo.isCompleted}
          isModified={todo.isModified}
        />
      ))}
    </div>
  );
};

export default TodoLayout;
