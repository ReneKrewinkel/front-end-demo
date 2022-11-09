import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { Home } from './Homepage.stories'

const testID = "Homepage-" + Math.floor(Math.random()*90000) + 10000

describe("Homepage", () => {

    it("Can render Homepage", () => {
        render(<Home testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})