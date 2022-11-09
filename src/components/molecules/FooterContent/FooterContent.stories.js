import React from 'react'
import FooterContent from './FooterContent'

const FooterContentMeta = {
    title: "molecules/FooterContent",
    component: FooterContent,
    argTypes: {
        testID: { table: { disable: true } },
    }
}

const testID = "FooterContent-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <FooterContent {...args} />

export const DefaultFooterContent = Template.bind({})
DefaultFooterContent.args = {
    testID: testID,
}

export default FooterContentMeta