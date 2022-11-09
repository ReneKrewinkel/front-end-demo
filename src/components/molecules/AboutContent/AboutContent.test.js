import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultAboutContent } from './AboutContent.stories'

const testID = "AboutContent-" + Math.floor(Math.random()*90000) + 10000

describe("AboutContent", () => {

    it("Can render AboutContent", () => {
        render(<DefaultAboutContent testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})