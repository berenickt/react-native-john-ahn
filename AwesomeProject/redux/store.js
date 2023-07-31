import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlice'

export const store = configureStore({
  // 생성한 Reducer를 store에 등록
  reducer: {
    todo: todoReducer,
  },
})
