import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { Open, Closed, Colored } from './Button.stories'

const testID = "Button-" + Math.floor(Math.random()*90000) + 10000

describe("Button", () => {

    it("Can render Closed Button", () => {
        render(<Closed testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

    it("Can render Open Button", () => {
        render(<Open testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

    it("Can render Colored Button", () => {
        render(<Colored testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })
})