import { createSlice } from "@reduxjs/toolkit";
import { ApiRequest } from ".";

type userData = {
  username: string,
  avatar_url: string,
  isAdmin: string,
}

interface UserState extends ApiRequest {
  loggedIn: boolean;
  data: userData | null
}

const initialUserState: UserState = {
  loggedIn: false,
  hasError: false,
  isFetching: false,
  data: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    initLogin (state, action) {
      state.isFetching = true;
    },
    succesfulLogin (state, action) {
      state.isFetching = false;
      state.hasError = false;
      state.loggedIn = true;
      state.data = action.payload;
    },
    failedLogin (state) {
      state.isFetching = false;
      state.hasError = true;
      state.loggedIn = false;
    },
    logOut(state) {
      state.loggedIn = false;
    },
  },
});

export default userSlice;
