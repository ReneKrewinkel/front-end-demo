import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { InformationSection } from './InfoSection.stories'

const testID = "InfoSection-" + Math.floor(Math.random()*90000) + 10000

describe("InfoSection", () => {

    it("Can render InfoSection", () => {
        render(<InformationSection testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})