import React from 'react';

import Background from '../../src/components/Background';

describe('Background', () => {
  const wrapper = mount(<Background />);

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
