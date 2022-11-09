import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { SectionAbout } from './AboutSection.stories'

const testID = "AboutSection-" + Math.floor(Math.random()*90000) + 10000

describe("AboutSection", () => {

    it("Can render AboutSection", () => {
        render(<SectionAbout testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})