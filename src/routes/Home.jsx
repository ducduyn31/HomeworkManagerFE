import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Container, utils } from 'styled-minimal';

import {
  Avatar,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import Background from '../components/Background';
import { login } from '../actions/index';

const { spacer } = utils;

const HomeContainer = styled(Container)`
  width: auto;
  display: block;
  margin-left: ${spacer(3)};
  margin-right: ${spacer(3)};
`;

const FormWrapper = styled(Paper)`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${spacer(8)}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacer(2)} ${spacer(3)} ${spacer(3)};
`;

const Header = styled.div`
  margin-top: ${spacer(1)};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${spacer(3)};
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FONT_SIZE = 16;

export class Home extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  state = {
    username: undefined,
    password: undefined,
  };

  handleClickLogin = () => {
    const { dispatch } = this.props;
    const { username, password } = this.state;

    dispatch(login(username, password));
  };

  handleFieldChange = key => e => {
    const { value } = e.target;
    this.setState(prevState => ({ ...prevState, [key]: value }));
  };

  render() {
    const { user } = this.props;

    return (
      <Background key="Home" data-testid="HomeWrapper">
        <HomeContainer verticalPadding>
          <FormWrapper elevation={4}>
            <CssBaseline />
            <Header>
              <Avatar>
                <LockOutlined color="action" />
              </Avatar>
              <Typography component="h1" variant="h3" align="center">
                Sign in
              </Typography>
            </Header>
            <form>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                name="username"
                inputProps={{
                  style: { fontSize: FONT_SIZE },
                }}
                InputLabelProps={{
                  style: { fontSize: FONT_SIZE },
                }}
                onChange={this.handleFieldChange('username')}
              />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                name="password"
                type="password"
                inputProps={{
                  style: { fontSize: FONT_SIZE },
                }}
                InputLabelProps={{
                  style: { fontSize: FONT_SIZE },
                }}
                onChange={this.handleFieldChange('password')}
              />

              <FormControlLabel control={<Checkbox value="remember" />} label="Remember Me" />

              <Button
                animate={user.status === 'running'}
                onClick={this.handleClickLogin}
                type="button"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                style={{ fontSize: FONT_SIZE }}
              >
                Sign in
              </Button>
            </form>
          </FormWrapper>
        </HomeContainer>
      </Background>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(Home);
