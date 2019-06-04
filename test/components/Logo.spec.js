import React from 'react';

import Logo from '../../src/components/Logo';

describe('Logo', () => {
  const wrapper = mount(<Logo />);

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
