import React, { FunctionComponent } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './App.css'

import Board from '../components/Board/Board'
import List from '../components/List/List'

const App: FunctionComponent = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="app">
                <Board />
                <List />
            </div>
        </DndProvider>
    )
}

export default App
