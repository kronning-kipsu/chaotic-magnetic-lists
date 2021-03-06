import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { useDispatch } from "react-redux"
import counterReducer from '../features/counter/counterSlice'
import tasksReducer from '../components/Task/tasksSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: tasksReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
