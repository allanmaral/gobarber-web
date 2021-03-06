import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signInSuccess } from './actions';
import api from '../../../services/api';
import history from '../../../services/history';

export function* signIn({ payload }) {
  const { email, password } = payload;
  try {
    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      console.tron.error('Usuário não é prestador');
      return;
    }

    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (err) {
    console.tron.error(err);
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
