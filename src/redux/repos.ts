import { createSlice } from '@reduxjs/toolkit';
import { ApiRequest } from '.';

export interface Repo {
  name: string;
  description: string;
  created_at: string;
}

interface ReposState extends ApiRequest {
  data: Repo[];
}

const initialReposState: ReposState = {
  data: [],
  isFetching: false,
  hasError: false,
};

const reposSlice = createSlice({
  name: 'repos',
  initialState: initialReposState,
  reducers: {
    startFetching(state) {
      state.isFetching = true;
    },
    successfulFetch(state, action) {
      state.isFetching = false;
      state.hasError = false;
      state.data = action.payload;
    },
  },
});

export default reposSlice;
