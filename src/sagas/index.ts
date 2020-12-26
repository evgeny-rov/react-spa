import { put, takeEvery, all, call, delay, select } from 'redux-saga/effects';
import { fetchPosts, fetchRepos, getUser } from '../api';
import { userActions, postsActions, reposActions, AppState } from '../redux';

const getUsername = (state: AppState) => state.user.data?.username;

function* userLogin(action: any) {
  const user = yield call(getUser, action.payload);
  yield delay(1000);

  if (user) {
    yield put({ type: userActions.succesfulLogin, payload: user });
  } else {
    yield put({ type: userActions.failedLogin });
  }
}

function* getAllPosts() {
  const posts = yield call(fetchPosts);
  yield put({ type: postsActions.successfulFetch, payload: posts });
}

function* getAllRepos() {
  const username = yield select(getUsername);
  const repos = yield call(fetchRepos, username);
  yield put({ type: reposActions.successfulFetch, payload: repos });
}

function* watchUserLogin() {
  yield takeEvery(userActions.initLogin, userLogin);
}

function* watchGetAllPosts() {
  yield takeEvery(postsActions.startFetching, getAllPosts);
}

function* watchGetAllRepos() {
  yield takeEvery(reposActions.startFetching, getAllRepos);
}

export default function* rootSaga() {
  yield all([watchUserLogin(), watchGetAllPosts(), watchGetAllRepos()]);
}
