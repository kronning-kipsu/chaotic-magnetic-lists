import React, { FunctionComponent } from 'react'
import './Board.css'

import Task from '../Task/Task'

const Board: FunctionComponent = () => {
    return (
        <div className="board">
            <Task customStyle={{ position: "absolute", top: "50px", left: "200px", maxWidth: "230px"}}
                  taskName="A chaotic magnetic list task" />
        </div>
    )
}

export default Board
