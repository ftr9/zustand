import React, { useEffect, useState } from 'react';
import './TodoCard.css';

import useTodoState, { TODOSTATE } from '../../store/Todo.state';

interface propsType {
  id: string;
  todoValue: string;
  isCompleted: boolean;
  isModified: boolean;
}

const TodoCard: React.FC<propsType> = ({
  id,
  todoValue,
  isCompleted,
  isModified,
}) => {
  const [todoInputValue, setTodoInputValue] = useState<string>(todoValue);
  const { deleteTodo, modifyTodoState, modifyTodoValue } = useTodoState();
  const onDeleteHandle = (todoId: string) => {
    deleteTodo(todoId);
  };

  const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInputValue(e.target.value);
  };

  const updateClickHandle = () => {
    modifyTodoValue(todoInputValue, id);
  };

  const completeClickHandle = () => {
    modifyTodoState(TODOSTATE.COMPLETED, id);
  };

  useEffect(() => {
    if (todoInputValue !== todoValue) {
      modifyTodoState(TODOSTATE.MODIFIED, id);
    } else {
      modifyTodoState(TODOSTATE.NOTMODIFIED, id);
    }
  }, [todoInputValue]);

  return (
    <div className={`todoCard ${isCompleted && 'todoCardComplete'}`}>
      <input
        type={'text'}
        value={todoInputValue}
        onChange={inputChangeHandle}
      ></input>
      <div className="todoCard__buttons">
        {isModified && <button onClick={updateClickHandle}>Update</button>}
        <button onClick={() => onDeleteHandle(id)}>delete</button>
        {!isCompleted && (
          <button onClick={completeClickHandle}>completed</button>
        )}
      </div>
    </div>
  );
};

export default TodoCard;
