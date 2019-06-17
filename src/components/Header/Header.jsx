import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import { Container, utils } from 'styled-minimal';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import theme, { headerHeight } from '../../modules/theme';

import { logOut } from '../../actions';

import Icon from '../Icon';
import Logo from '../Logo';

const { responsive, spacer } = utils;

const HeaderWrapper = styled.header`
  background-color: ${rgba(theme.palette.overlay, 0.5)};
  height: ${headerHeight}px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 200;

  &:before {
    background-color: ${theme.palette.overlay};
    bottom: 0;
    content: '';
    height: 0.2rem;
    left: 0;
    position: absolute;
    right: 0;
  }
`;

const HeaderContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  padding-bottom: ${spacer(2)};
  padding-top: ${spacer(2)};
`;

const Logout = styled.button`
  align-items: center;
  color: #333;
  display: flex;
  font-size: 1.3rem;
  padding: ${spacer(2)};

  ${responsive({ lg: 'font-size: 1.6rem;' })}; /* stylelint-disable-line */

  &.active {
    color: #000;
  }

  span {
    display: inline-block;
    margin-right: 0.4rem;
    text-transform: uppercase;
  }
`;

export default class Header extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  handleClickLogout = () => {
    const { dispatch } = this.props;

    dispatch(logOut());
  };

  render() {
    const { user } = this.props;

    if (user.isAuthenticated)
      return (
        <HeaderWrapper>
          <HeaderContainer>
            <Logo />
            <Logout onClick={this.handleClickLogout}>
              <span>logout</span>
              <Icon name="sign-out" width={16} />
            </Logout>
          </HeaderContainer>
        </HeaderWrapper>
      );
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <div className="left">
            <Logo />

            <InputBase placeholder="CS 3323 from Prof. Kumar" />
          </div>
          <div className="right">
            <Button
              style={{ color: theme.textColor.revertedPrimary, fontSize: '1.5rem' }}
              size="large"
            >
              Explore
            </Button>
            <Button
              style={{ color: theme.textColor.revertedPrimary, fontSize: '1.5rem' }}
              size="large"
            >
              Premium
            </Button>
            <span style={{ color: theme.textColor.revertedPrimary, fontSize: '2.5rem' }}> |</span>
            <Button
              style={{ color: theme.textColor.revertedPrimary, fontSize: '1.5rem' }}
              size="large"
            >
              Sign in
            </Button>
            <Button
              style={{
                color: theme.textColor.revertedPrimary,
                fontSize: '1.5rem',
                backgroundColor: theme.palette.primary,
              }}
              size="large"
              variant="contained"
            >
              Join now
            </Button>
          </div>
        </HeaderContainer>
      </HeaderWrapper>
    );
  }
}
