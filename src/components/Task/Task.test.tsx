import React from 'react'
import { render } from '@testing-library/react'
import Task from './Task'

test('renders List component', () => {
    const { getByText } = render(
        <Task taskName="Task name" />
    )

    expect(getByText(/Task name/)).toBeInTheDocument()
})
