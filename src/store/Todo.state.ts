import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
interface todo {
  id: string;
  name: string;
  isCompleted: boolean;
  isModified: boolean;
}
interface todoState {
  todos: todo[];
  addTodo: (newTodo: todo) => void;
  deleteTodo: (id: string) => void;
  modifyTodoState: (changeFactor: TODOSTATE, id: string) => void;
  modifyTodoValue: (newTodoValue: string, id: string) => void;
}

export const enum TODOSTATE {
  MODIFIED,
  NOTMODIFIED,
  COMPLETED,
}

const useTodoState = create<todoState>()(
  immer(set => {
    return {
      todos: [],
      addTodo: newTodo => {
        set(state => {
          state.todos.push(newTodo);
        });
      },
      deleteTodo: id => {
        set(state => {
          state.todos = state.todos.filter(todo => todo.id !== id);
        });
      },
      modifyTodoValue: (newTodoValue, id) => {
        set(state => {
          state.todos = state.todos.map(todo => {
            if (todo.id === id) {
              todo.name = newTodoValue;
              todo.isModified = false;
            }
            return todo;
          });
        });
      },
      modifyTodoState: (changeFactor, id) => {
        set(state => {
          state.todos = state.todos.map(todo => {
            if (todo.id === id) {
              switch (changeFactor) {
                case TODOSTATE.MODIFIED:
                  todo.isModified = true;
                  break;
                case TODOSTATE.NOTMODIFIED:
                  todo.isModified = false;
                  break;

                case TODOSTATE.COMPLETED:
                  todo.isCompleted = true;
                  break;
                default: {
                  todo.isCompleted = false;
                  todo.isModified = false;
                }
              }
            }
            return todo;
          });
        });
      },
    };
  })
);

export default useTodoState;
