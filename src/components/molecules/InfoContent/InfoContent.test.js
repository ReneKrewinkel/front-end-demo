import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultInfoContent } from './InfoContent.stories'

const testID = "InfoContent-" + Math.floor(Math.random()*90000) + 10000

describe("InfoContent", () => {

    it("Can render InfoContent", () => {
        render(<DefaultInfoContent testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})