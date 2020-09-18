import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { render } from '@testing-library/react'
import Task from './Task'

test('renders List component', () => {
    const taskName = "Task name"
    const { getByText } = render(
        <DndProvider backend={HTML5Backend}>
            <Task taskName={taskName} />
        </DndProvider>
    )

    expect(getByText(taskName)).toBeInTheDocument()
})
