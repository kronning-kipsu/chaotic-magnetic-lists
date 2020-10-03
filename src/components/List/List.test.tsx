import React from 'react'
import { render } from '../../utilities/testing-utils'
import List from './List'

test('renders List component', () => {
    const { container, getByText } = render(
        <List />
    )

    expect(container.firstChild).not.toBeNull()
    expect(getByText(/First task/i)).toBeInTheDocument()
    expect(getByText(/Second task/i)).toBeInTheDocument()
})
