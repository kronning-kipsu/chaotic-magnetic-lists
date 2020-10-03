import React, { FunctionComponent } from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { store as realStore } from '../app/store'

function render(
    ui: React.ReactElement,
    {
        initialState = {},
        store = realStore,
        ...renderOptions
    } = {}
) {
    const Wrapper: FunctionComponent = ({ children }) => {
        return <Provider store={store}><DndProvider backend={HTML5Backend}>{children}</DndProvider></Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
