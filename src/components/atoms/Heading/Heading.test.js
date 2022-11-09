import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// NOT FEASIBLE

import Heading from './Heading'
const testID = "Heading-" + Math.floor(Math.random()*90000) + 10000

describe("Heading", () => {

    it("Can render H1 Heading", () => {
        render(<Heading type={"h1"} testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

    it("Can render H2 Heading", () => {
        render(<Heading type={"h2"} testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

    it("Can render H3 Heading", () => {
        render(<Heading type={"h3"} testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})