import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/userSlice';
import newsReducer from '../features/newsSlice';

export default configureStore({
  reducer: {
    news: newsReducer,
    user: userReducer
  }
});
