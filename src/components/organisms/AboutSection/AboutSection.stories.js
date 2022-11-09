import React from 'react'
import AboutSection from './AboutSection'

const AboutSectionMeta = {
    title: "organisms/Sections",
    component: AboutSection,
    argTypes: {
        testID: { table: { disable: true } },
    }
}

const testID = "AboutSection-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <AboutSection {...args} />

export const SectionAbout  = Template.bind({})
SectionAbout.args = {
    testID: testID,
}

export default AboutSectionMeta