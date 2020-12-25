import { createSlice } from "@reduxjs/toolkit";
import { ApiRequest } from ".";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostState extends ApiRequest {
  data: Post[];
}

const initialPostsState: PostState = {
  data: [],
  isFetching: false,
  hasError: false,
};

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
      state.data = action.payload;
    },
  },
});

export default postsSlice;