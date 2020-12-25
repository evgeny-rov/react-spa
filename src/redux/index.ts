import { combineReducers } from 'redux';
import userSlice from './user';
import postsSlice from './posts';

export interface ApiRequest {
  isFetching: boolean;
  hasError: boolean;
}

const rootReducer = combineReducers({
  user: userSlice.reducer,
  posts: postsSlice.reducer,
});

export const userActions = userSlice.actions;
export const postsActions = postsSlice.actions;

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
