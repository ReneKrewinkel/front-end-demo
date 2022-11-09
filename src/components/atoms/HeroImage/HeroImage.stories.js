import React from 'react'
import HeroImage from './HeroImage'

const HeroImageMeta = {
    title: "atoms/HeroImage",
    component: HeroImage,
    argTypes: {
        testID: { table: { disable: true } },
    }
}

const testID = "HeroImage-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <HeroImage {...args} />

export const DefaultHeroImage = Template.bind({})
DefaultHeroImage.args = {
    testID: testID,
}

export default HeroImageMeta