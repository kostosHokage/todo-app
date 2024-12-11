import React from 'react';
import TodoInput from './components/TodoInput.tsx';
import TodoList from './components/TodoList.tsx';
import useTodos from './hooks/useTodos.ts';
import './styles.css';

const App: React.FC = () => {
  const { todos, addTodo, toggleComplete, deleteTodo } = useTodos();

  return (
    <div className="App">
      <h1>Список дел</h1>
      <TodoInput addTodo={addTodo} />
      <h2>Все задачи</h2>
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;