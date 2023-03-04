import { createSlice } from '@reduxjs/toolkit';

export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: JSON.parse(localStorage.getItem('news')) || null
  },
  reducers: {
    getNews: (state, action) => {
      state.user = {
        ...action.payload,
        loggedIn: true
      };
    },

    deleteNews: (state) => {
      state.user = null;
    },

    filterNews: (state) => {
      state.user = null;
    }
  }
});

export const { getNews, deleteNews, filterNews } = newsSlice.actions;

export const selectNews = (state) => state.news.news;

export default newsSlice.reducer;
