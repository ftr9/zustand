import InputLayout from './components/layout/InputLayout';
import TodoLayout from './components/layout/TodoLayout';
import './App.css';
import useTodoState from './store/Todo.state';
function App() {
  const state = useTodoState();

  console.log(state);

  return (
    <div className="App">
      <h1>Zustand todo</h1>
      {/**INput container */}
      <InputLayout />
      {/**todo container */}
      <TodoLayout />
    </div>
  );
}

export default App;
