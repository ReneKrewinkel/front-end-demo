import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultHeroContent } from './HeroContent.stories'

const testID = "HeroContent-" + Math.floor(Math.random()*90000) + 10000

describe("HeroContent", () => {

    it("Can render HeroContent", () => {
        render(<DefaultHeroContent testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})