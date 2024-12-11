import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom';

test('renders todo items', () => {
  const todos = [{ task: 'Test task', completed: false }];
  render(<TodoList todos={todos} toggleComplete={jest.fn()} deleteTodo={jest.fn()} />);
  const todoElement = screen.getByText(/Test task/i);
  expect(todoElement).toBeInTheDocument();
});