import React from 'react';
import { render } from '@testing-library/react';
import Index from '@pages/index';

describe(Index, () => {
  it('render collectly', () => {
    const { queryByText } = render(<Index/>);
    expect(queryByText('Welcome to Next.js!'));
  });
});
