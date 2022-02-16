import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

//  Example 1: A Plain-Ish Component
type ItemProps = { name: string, price: number }
function Item(props: ItemProps) {
  return <div>
    { /* ... */ }
  </div>
}

describe('React Example 1', () => {
  it('renders two child elements', () => {
    const result = render(<Item name='Test Item' price={100} />);

    expect(result.getByText('Test Item').tagName).toEqual('H3');
    expect(result.getByText('$100').tagName).toEqual('H5');
  })
})