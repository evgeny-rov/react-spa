import { combineReducers } from 'redux';
import userSlice from './user';
import postsSlice from './posts';
import reposSlice from './repos';

export interface ApiRequest {
  isFetching: boolean;
  hasError: boolean;
}

const rootReducer = combineReducers({
  user: userSlice.reducer,
  posts: postsSlice.reducer,
  repos: reposSlice.reducer,
});

export const userActions = userSlice.actions;
export const postsActions = postsSlice.actions;
export const reposActions = reposSlice.actions;

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
