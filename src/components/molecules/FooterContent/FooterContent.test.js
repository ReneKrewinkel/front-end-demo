import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultFooterContent } from './FooterContent.stories'

const testID = "FooterContent-" + Math.floor(Math.random()*90000) + 10000

describe("FooterContent", () => {

    it("Can render FooterContent", () => {
        render(<DefaultFooterContent testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})