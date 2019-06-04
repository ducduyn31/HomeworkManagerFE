import { login, logOut } from '../../src/actions/user';

describe('App', () => {
  it('login should return an action', () => {
    expect(login()).toMatchSnapshot();
  });

  it('logOut should return an action', () => {
    expect(logOut()).toMatchSnapshot();
  });
});
