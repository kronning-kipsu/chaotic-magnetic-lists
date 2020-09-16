import React from 'react'
import { render } from '@testing-library/react'
import List from './List'

test('renders List component', () => {
    const { getByText } = render(
        <List />
    )

    expect(getByText(/i am list/i)).toBeInTheDocument()
})
