import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import './Board.css'

import {
    selectTasks, TaskData
} from '../Task/tasksSlice'
import Task from '../Task/Task'

const Board: FunctionComponent = () => {
    const tasks = useSelector(selectTasks)
    return (
        <div className='board'>
            { tasks.map((task: TaskData) => <Task key={ task.id } type='board' taskData={ task } />) }
        </div>
    )
}

export default Board
