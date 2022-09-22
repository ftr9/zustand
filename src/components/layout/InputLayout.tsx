import React, { useEffect, useId, useState } from 'react';
import './inputLayout.css';
import useTodoState from '../../store/Todo.state';
import { v4 as generateUUID } from 'uuid';

const InputLayout: React.FC = () => {
  const addTodo = useTodoState(state => state.addTodo);
  const [values, setValue] = useState<string>('');
  const onKeyChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && values) {
      //add to the store
      addTodo({
        id: generateUUID(),
        name: values,
        isCompleted: false,
        isModified: false,
      });
      setValue('');
    }
  };

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="inputContainer">
      <input
        onKeyDown={onKeyChange}
        onChange={onValueChange}
        value={values}
        className="inputContainer_inputfield"
        type={'text'}
        placeholder={'enter todo'}
      />
    </div>
  );
};

export default InputLayout;
