import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import authReducer from './slices/authSlice'
import { persistMiddleware, loadState } from './middleware/persistMiddleware';

export const store = configureStore({
  reducer: {
    productReducer,
    auth: authReducer
  },
  // preloadedState: loadState() as undefined,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(persistMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;