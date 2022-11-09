import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultMenuTrigger } from './MenuTrigger.stories'

const testID = "MenuTrigger-" + Math.floor(Math.random()*90000) + 10000

describe("MenuTrigger", () => {

    it("Can render MenuTrigger", () => {
        render(<DefaultMenuTrigger testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})