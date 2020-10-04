import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../../app/store'
import TaskDataService from '../../services/TaskDataService'

// Define task data
export interface TaskData {
    id: string
    name: string
    list: string
    seq: number
    x: number
    y: number
    z: number
}

// Define tasks state
interface TasksState {
    loading: boolean
    tasks: TaskData[]
}

// Initial State
const initialState: TasksState = {
    loading: false,
    tasks: []
}

// Create state slice
export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        tasksLoadRequested: state => {
            state.loading = true
        },
        tasksLoaded: (state, action: PayloadAction<TaskData[]>) => {
            state.loading = false
            state.tasks = action.payload
        }
    }
})

// Export actions
export const { tasksLoadRequested, tasksLoaded } = tasksSlice.actions

// Export async actions
export const loadTasksAsync = (): AppThunk => async dispatch => {
    dispatch(tasksLoadRequested())
    const tasks: TaskData[] = await new TaskDataService().getTasks()
    dispatch(tasksLoaded(tasks))
}

// Export selectors
export const selectTasks = (state: RootState) => state.tasks.tasks

export default tasksSlice.reducer
