/**
 * @module Sagas/User
 * @desc User
 */

import { all, delay, put, takeLatest } from 'redux-saga/effects';

import uuid from 'uuid/v4';
import { ActionTypes } from '../constants/index';

import authenticate from '../../mock-up/auth';

/**
 * Login
 */
export function* login({ payload }) {
  try {
    yield authenticate(payload.username, payload.password);

    yield put({
      type: ActionTypes.USER_LOGIN_SUCCESS,
    });
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.USER_LOGIN_FAILURE,
      payload: err,
    });

    yield put({
      type: ActionTypes.SHOW_ALERT,
      payload: {
        id: uuid(),
        message: 'Login Failed',
        position: 'bottom-right',
        variant: 'danger',
        timeout: 5,
      },
    });
  }
}

/**
 * Logout
 */
export function* logout() {
  try {
    yield delay(200);

    yield put({
      type: ActionTypes.USER_LOGOUT_SUCCESS,
    });
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.USER_LOGOUT_FAILURE,
      payload: err,
    });
  }
}

/**
 * User Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.USER_LOGIN, login),
    takeLatest(ActionTypes.USER_LOGOUT, logout),
  ]);
}
