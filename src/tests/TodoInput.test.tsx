import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoInput from '../components/TodoInput';
import '@testing-library/jest-dom';

test('renders input and button', () => {
  render(<TodoInput addTodo={jest.fn()} />);
  const inputElement = screen.getByPlaceholderText(/Введите новую задачу/i);
  const buttonElement = screen.getByText(/Добавить/i);
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});