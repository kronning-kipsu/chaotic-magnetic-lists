import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../../app/store'

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
    tasks: TaskData[]
}

// Initial State
const initialState: TasksState = {
    tasks: [
        {
            id: '1',
            name: 'First task',
            list: 'main',
            seq: 0,
            x: 200,
            y: 150,
            z: 100
        },
        {
            id: '2',
            name: 'Second task',
            list: 'main',
            seq: 1,
            x: 250,
            y: 190,
            z: 200
        }]
}

// Create state slice
export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {

    }
})

// Export actions

// Export async actions

// Export selectors
export const selectTasks = (state: RootState) => state.tasks.tasks

export default tasksSlice.reducer
