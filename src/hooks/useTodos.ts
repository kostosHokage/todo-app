import { useState } from 'react';

const useTodos = () => {
  const [todos, setTodos] = useState<{ task: string; completed: boolean }[]>([]);

  const addTodo = (task: string) => {
    setTodos([...todos, { task, completed: false }]);
  };

  const toggleComplete = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return { todos, addTodo, toggleComplete, deleteTodo };
};

export default useTodos;