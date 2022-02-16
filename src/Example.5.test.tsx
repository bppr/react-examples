import React, { useState } from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';

//  Example 4: A Collection of Elements
type Task = { id: string, name: string, completed: boolean }

function TodoList(props: { initialTasks: Task[] }) {
  return <>
    { /* ... */ }
  </>
}

describe('React Example 4', () => {
  it('renders a list of task items', async () => {
    const tasks = [
      { id: 'a', name: 'task-one', completed: false },
      { id: 'b', name: 'task-two', completed: false },
    ];
    
    const result = render(<TodoList initialTasks={tasks} />);
    const buttons = await result.findAllByRole('button');
    
    fireEvent.click(buttons[0]);

    expect(buttons[0]).toBeDisabled();
    expect(buttons[1]).not.toBeDisabled();
  })
})