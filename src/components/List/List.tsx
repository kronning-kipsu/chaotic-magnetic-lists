import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import './List.css'

import {
    selectTasks, TaskData
} from '../Task/tasksSlice'
import Task from '../Task/Task'

const List: FunctionComponent = () => {
    const tasks = useSelector(selectTasks)
    return (
        <div className='list'>
            {
                tasks.sort((task: TaskData) => task.seq).map((task: TaskData) => (
                    <Task key={ task.id } type='list' taskData={task} />
                ))
            }
        </div>
    )
}

export default List
