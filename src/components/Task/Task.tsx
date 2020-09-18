import React, { FunctionComponent } from 'react'
import './Task.css'

interface Params {
    customStyle?: {[s: string]: string}
    taskName: string
}

const Task: FunctionComponent<Params> = ({ customStyle, taskName }) => {
    return (
        <div className="task" style={ customStyle }>
            { taskName }
        </div>
    )
}

export default Task
