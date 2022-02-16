import React, { useState } from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';

//  Example 2: A Component with State
function Counter() {
  const [count, setCount] = useState(0);

  return <button>
    { /* ... */ }
  </button>
}

describe('React Example 2', () => {
  it('increments the counter', async () => {
    const result = render(<Counter />);
    const element = await result.findByRole('button');

    fireEvent.click(element);
    fireEvent.click(element);

    expect(element.textContent).toContain('Clicked 2 times');
  })
})