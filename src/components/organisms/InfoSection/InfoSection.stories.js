import React from 'react'
import InfoSection from './InfoSection'

const InfoSectionMeta = {
    title: "organisms/Sections",
    component: InfoSection,
    argTypes: {
        testID: { table: { disable: true } },
    }
}

const testID = "InfoSection-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <InfoSection {...args} />

export const InformationSection = Template.bind({})
InformationSection.args = {
    testID: testID,
}

export default InfoSectionMeta