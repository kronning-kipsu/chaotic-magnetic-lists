import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { render } from '@testing-library/react'
import Board from './Board'

test('renders Board component', () => {
    const { getByText } = render(
        <DndProvider backend={HTML5Backend}>
            <Board />
        </DndProvider>
    )

    expect(getByText(/A chaotic magnetic list task/i)).toBeInTheDocument()
})
