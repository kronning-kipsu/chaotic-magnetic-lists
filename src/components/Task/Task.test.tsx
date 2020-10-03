import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { render } from '../../utilities/testing-utils'
import Task from './Task'

test('renders Task component', () => {
    const taskName = "Task name"
    const { getByText } = render(
        <Task taskName={taskName} />
    )

    expect(getByText(taskName)).toBeInTheDocument()
})
