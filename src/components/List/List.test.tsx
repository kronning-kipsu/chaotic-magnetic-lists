import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { render } from '@testing-library/react'
import List from './List'

test('renders List component', () => {
    const { getByText } = render(
        <DndProvider backend={HTML5Backend}>
            <List />
        </DndProvider>
    )

    expect(getByText(/I am a task in a list/i)).toBeInTheDocument()
})
