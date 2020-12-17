import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

interface ApiCall {
  isFetching: boolean;
  hasError: boolean;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface UserState extends ApiCall {
  loggedIn: boolean;
}

interface PostState extends ApiCall {
  posts: Post[];
}

const initialUserState: UserState = {
  loggedIn: false,
  hasError: false,
  isFetching: false,
};

const initialPostsState: PostState = {
  posts: [],
  isFetching: false,
  hasError: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    initLogin (state, action) {
      state.hasError = false;
      state.loggedIn = false;
      state.isFetching = true;
    },
    succesfulLogin (state) {
      state.hasError = false;
      state.isFetching = false;
      state.loggedIn = true;
    },
    failedLogin (state) {
      state.hasError = true;
      state.isFetching = false;
      state.loggedIn = false;
    },
    logOut(state) {
      state.loggedIn = false;
      state.hasError = false;
      state.isFetching = false;
    },
  },
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialPostsState,
  reducers: {
    startFetching(state) {
      state.isFetching = true;
    },
    successfulFetch(state, action) {
      state.isFetching = false;
      state.hasError = false;
      state.posts = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export const postsActions = postsSlice.actions;

const rootReducer = combineReducers({
  user: userSlice.reducer,
  posts: postsSlice.reducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
