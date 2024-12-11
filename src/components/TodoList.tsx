import React from 'react';
import TodoItem from './TodoItem.tsx';

interface TodoListProps {
  todos: { task: string; completed: boolean }[];
  toggleComplete: (index: number) => void;
  deleteTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          task={todo.task}
          completed={todo.completed}
          toggleComplete={() => toggleComplete(index)}
          deleteTodo={() => deleteTodo(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;