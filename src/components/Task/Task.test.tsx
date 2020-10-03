import React from 'react'
import { render } from '../../utilities/testing-utils'
import Task from './Task'

test('renders Task component', () => {
    const task = {
        id: '1',
        name: 'First task',
        list: 'main',
        seq: 0,
        x: 200,
        y: 150,
        z: 100
    }
    const { getByText } = render(
        <Task type='list' taskData={task} />
    )

    expect(getByText(task.name)).toBeInTheDocument()
})
