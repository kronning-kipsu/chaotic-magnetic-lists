import React, { FunctionComponent } from 'react'
import { useDrag } from 'react-dnd'
import './Task.css'

interface Params {
    customStyle?: {[s: string]: string}
    taskName: string
}

const Task: FunctionComponent<Params> = ({ customStyle, taskName }) => {
    const [collectedProps, drag] = useDrag({
        item: { id: taskName + Math.random() , type: 'task' }
    })
    return (
        <div ref={drag}
             className="task"
             style={ customStyle }>
            { taskName }
        </div>
    )
}

export default Task
