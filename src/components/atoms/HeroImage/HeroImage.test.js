import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultHeroImage } from './HeroImage.stories'

const testID = "HeroImage-" + Math.floor(Math.random()*90000) + 10000

describe("HeroImage", () => {

    it("Can render HeroImage", () => {
        render(<DefaultHeroImage testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})