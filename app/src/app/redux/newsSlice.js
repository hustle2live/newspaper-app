import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  newsArray: [],
  status: null,
  error: null,
  postsLimit: 5,
  removed: []
};

const filteringNewsState = (data, deletedNews) =>
  data.filter(({ id }) => deletedNews.every((storyId) => storyId !== id));

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async function (limit = 5, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      if (!response.ok) throw new Error('Server error');

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteNews = createAsyncThunk(
  'news/deleteNews',
  async function (postId, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          method: 'DELETE'
        }
      );
      if (!response.ok) throw new Error("Server error. Can't delete news");

      dispatch(removePost(postId));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const newsSlice = createSlice({
  name: 'news',
  initialState: initialState,

  reducers: {
    getPosts: (state, action) => {
      state.newsArray = action.payload;
    },

    increasePostsLimit: (state) => {
      state.postsLimit = state.postsLimit + 5;
    },

    removePost: (state, action) => {
      state.removed = [...state.removed, action.payload];
      state.newsArray = filteringNewsState(state.newsArray, state.removed);
    }
  },
  extraReducers: {
    [fetchNews.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },

    [fetchNews.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.newsArray = state.removed.length
        ? filteringNewsState(action.payload, state.removed)
        : action.payload;
    },

    [fetchNews.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },

    [deleteNews.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },

    [deleteNews.fulfilled]: (state, action) => {
      state.status = 'resolved';
    },

    [deleteNews.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    }
  }
});

export const { getPosts, removePost, increasePostsLimit } = newsSlice.actions;

export default newsSlice.reducer;
