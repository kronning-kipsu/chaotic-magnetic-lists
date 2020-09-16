import React, { FunctionComponent } from 'react'
import './App.css'
import Board from '../components/Board/Board'
import List from '../components/List/List'

const App: FunctionComponent = () => {
    return (
        <div className="app">
            <Board />
            <List />
        </div>
    )
}

export default App
