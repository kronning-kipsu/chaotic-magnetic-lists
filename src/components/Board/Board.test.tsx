import React from 'react'
import { render } from '@testing-library/react'
import Board from './Board'

test('renders Board component', () => {
    const { getByText } = render(
        <Board />
    )

    expect(getByText(/A chaotic magnetic list task/i)).toBeInTheDocument()
})
