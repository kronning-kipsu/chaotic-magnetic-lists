import React, { FunctionComponent, useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { AppDispatch, store } from './store'
import './App.css'

import Board from '../components/Board/Board'
import List from '../components/List/List'
import { loadTasksAsync } from "../components/Task/tasksSlice"

const InnerApp: FunctionComponent = ({ children }) => {
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(loadTasksAsync())
    }, [])

    return (
        <>
            <Board />
            <List />
        </>
    )
}

const App: FunctionComponent = () => {
    return (
        <Provider store={ store }>
            <DndProvider backend={ HTML5Backend }>
                <div className='app'>
                    <InnerApp />
                </div>
            </DndProvider>
        </Provider>
    )
}

export default App
