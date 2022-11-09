import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import {
    DefaultFooter,
    FooterSection
} from './Footer.stories'

const testID = "Footer-" + Math.floor(Math.random()*90000) + 10000

describe("Footer", () => {

    it("Can render Footer", () => {
        render(<FooterSection testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})