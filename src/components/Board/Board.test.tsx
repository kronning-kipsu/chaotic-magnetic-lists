import React from 'react'
import { render } from '@testing-library/react'
import Board from './Board'

test('renders Board component', () => {
    const { getByText } = render(
        <Board />
    )

    expect(getByText(/i am board/i)).toBeInTheDocument()
})
