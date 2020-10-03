import React, { FunctionComponent } from 'react'
import { store } from './store'
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './App.css'

import Board from '../components/Board/Board'
import List from '../components/List/List'

const App: FunctionComponent = () => {
    return (
        <Provider store={store}>
            <DndProvider backend={HTML5Backend}>
                <div className="app">
                    <Board />
                    <List />
                </div>
            </DndProvider>
        </Provider>
    )
}

export default App
