import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';

//  Example 3: A Component with a Callback
function TellMeWhenClicked(props: { onSubmit(): void }) {
  return <button>
    { /* ... */ }
  </button>
}

describe('React Example 3', () => {
  it('calls back', async () => {
    const clickSpy = jest.fn();
    const result = render(<TellMeWhenClicked onSubmit={clickSpy} />);
    
    const element = await result.findByRole('button');
    fireEvent.click(element);

    expect(clickSpy).toHaveBeenCalledTimes(1);
  })
})