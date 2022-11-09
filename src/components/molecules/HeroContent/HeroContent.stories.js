import React from 'react'
import HeroContent from './HeroContent'

const HeroContentMeta = {
    title: "molecules/HeroContent",
    component: HeroContent,
    argTypes: {
        testID: { table: { disable: true } },
    }
}

const testID = "HeroContent-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <HeroContent {...args} />

export const DefaultHeroContent = Template.bind({})
DefaultHeroContent.args = {
    testID: testID,
}

export default HeroContentMeta