import React from 'react'
import AboutContent from './AboutContent'

const AboutContentMeta = {
    title: "molecules/AboutContent",
    component: AboutContent,
    argTypes: {
        testID: { table: { disable: true } },
    }
}

const testID = "AboutContent-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <AboutContent {...args} />

export const DefaultAboutContent = Template.bind({})
DefaultAboutContent.args = {
    testID: testID,
}

export default AboutContentMeta