import React from 'react'
import { render } from '@testing-library/react'
import Task from './Task'

test('renders List component', () => {
    const taskName = "Task name"
    const { getByText } = render(
        <Task taskName={taskName} />
    )

    expect(getByText(taskName)).toBeInTheDocument()
})
