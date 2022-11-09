import React from 'react'
import Hero from './Hero'

const HeroMeta = {
    title: "organisms/Sections",
    component: Hero,
    argTypes: {
        testID: { table: { disable: true } },
    }
}

const testID = "Hero-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Hero {...args} />

export const HeroSection = Template.bind({})
HeroSection.args = {
    testID: testID,
}

export default HeroMeta