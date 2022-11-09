import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import {PageHeader} from './Header.stories'

const testID = "Header-" + Math.floor(Math.random()*90000) + 10000

describe("Header", () => {

    it("Can render Header", () => {
        render(<PageHeader testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})