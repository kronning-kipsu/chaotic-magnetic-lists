import React, { FunctionComponent } from 'react'
import {DragSourceMonitor, useDrag} from 'react-dnd'
import './Task.css'

interface Params {
    customStyle?: {[s: string]: string}
    taskName: string
}

const Task: FunctionComponent<Params> = ({ customStyle, taskName }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { id: taskName + Math.random() , type: 'task' },
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    return (
        <div ref={drag}
             className="task"
             style={ Object.assign({}, customStyle, {opacity: isDragging ? '0.0' : '1.0'}) }>
            { taskName }
        </div>
    )
}

export default Task
