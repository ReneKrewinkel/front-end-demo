import React from 'react'
import InfoContent from './InfoContent'

const InfoContentMeta = {
    title: "molecules/InfoContent",
    component: InfoContent,
    argTypes: {
        testID: { table: { disable: true } },
    }
}

const testID = "InfoContent-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <InfoContent {...args} />

export const DefaultInfoContent = Template.bind({})
DefaultInfoContent.args = {
    testID: testID,

}

export default InfoContentMeta