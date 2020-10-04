import React from 'react'
import { render } from '../../utilities/testing-utils'
import List from './List'

test('renders List component', () => {
    const { container } = render(
        <List />
    )

    expect(container.firstChild).not.toBeNull()
    expect(container.firstChild).toBeEmpty()
})
