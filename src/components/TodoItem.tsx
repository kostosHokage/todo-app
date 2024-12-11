import React from 'react';

interface TodoItemProps {
  task: string;
  completed: boolean;
  toggleComplete: () => void;
  deleteTodo: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, completed, toggleComplete, deleteTodo }) => {
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={toggleComplete} />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</span>
      <button onClick={deleteTodo}>Удалить</button>
    </div>
  );
};

export default TodoItem;