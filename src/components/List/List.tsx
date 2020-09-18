import React, { FunctionComponent } from 'react'
import './List.css'

import Task from '../Task/Task'

const List: FunctionComponent = () => {
    return (
        <div className="list">
            <Task taskName="I am a task in a list" />
        </div>
    )
}

export default List
