import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

import userReducer from '../features/userSlice';
import newsReducer from '../features/newsSlice';

const reducer = combineReducers({
  news: newsReducer,
  user: userReducer
});

export default configureStore({
  reducer: reducer
});

// export default configureStore({
//   reducer: {
//     user: userReducer,
//     news: newsReducer
//   }
// });

// export default configureStore(reducer);
