import React, { CSSProperties, FunctionComponent } from 'react'
import { DragSourceMonitor, useDrag } from 'react-dnd'
import './Task.css'
import { TaskData } from './tasksSlice'

interface Params {
    type: string
    taskData: TaskData
}

interface AdditionalStyles {
    [s: string]: string
}

const combineWithStylesForBoard = (taskData: TaskData, additionalStyles: AdditionalStyles): CSSProperties => ({
    position: 'absolute',
    top: taskData.y + 'px',
    left: taskData.x + 'px',
    maxWidth: '230px',
    ...additionalStyles
})

const combineWithStyleForList = (taskData: TaskData, additionalStyles: AdditionalStyles): CSSProperties => ({
    zIndex: taskData.seq,
    ...additionalStyles
})

const Task: FunctionComponent<Params> = ({ type, taskData }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { id: taskData.id , type: type },
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    const stylesFunc = type === 'list' ? combineWithStyleForList : combineWithStylesForBoard
    return (
        <div ref={ drag }
             className='task'
             style={stylesFunc(taskData, {
                 opacity: isDragging ? '0.0' : '1.0'
             })}>
            { taskData.name }
        </div>
    )
}

export default Task
