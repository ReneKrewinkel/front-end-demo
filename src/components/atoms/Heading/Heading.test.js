import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultHeading } from './Heading.stories'

const testID = "Heading-" + Math.floor(Math.random()*90000) + 10000

describe("Heading", () => {

    it("Can render Heading", () => {
        render(<DefaultHeading testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})