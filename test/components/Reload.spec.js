import React from 'react';

import Reload from '../../src/components/Reload';

describe('Reload', () => {
  const wrapper = mount(<Reload />);

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
