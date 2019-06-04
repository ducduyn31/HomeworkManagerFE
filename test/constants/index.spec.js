import { ActionTypes, STATUS } from '../../src/constants/index';

describe('constants', () => {
  it('should match the snapshot', () => {
    expect(ActionTypes).toMatchSnapshot();
    expect(STATUS).toMatchSnapshot();
  });
});
