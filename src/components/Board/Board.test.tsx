import React from 'react'
import { render } from '../../utilities/testing-utils'
import Board from './Board'

test('renders Board component', () => {
    const { container } = render(
        <Board />
    )

    expect(container.firstChild).not.toBeNull()
    expect(container.firstChild).toBeEmpty()
})
