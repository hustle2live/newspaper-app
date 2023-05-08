import { configureStore } from '@reduxjs/toolkit';

import userReducer from './redux/userSlice';
import newsReducer from './redux/newsSlice';

export default configureStore({
  reducer: {
    news: newsReducer,
    user: userReducer
  }
});
