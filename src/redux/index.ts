import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  loggedIn: boolean;
}

const initialState: UserState = { loggedIn: false };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn(state) {
      state.loggedIn = true;
    },
    logOut(state) {
      state.loggedIn = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

const rootReducer = combineReducers({ user: userSlice.reducer });

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
