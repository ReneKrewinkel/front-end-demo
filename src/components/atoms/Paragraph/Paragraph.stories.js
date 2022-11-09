import React from 'react'
import Paragraph from './Paragraph'

const ParagraphMeta = {
    title: "atoms/Paragraph",
    component: Paragraph,
    argTypes: {
        testID: { table: { disable: true } },
        type: { name: "Type"},
        text: { name: "Text"}
    }
}

const testID = "Paragraph-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Paragraph {...args} />

export const DefaultParagraph = Template.bind({})
DefaultParagraph.args = {
    testID: testID,
    type: "black"
}

export default ParagraphMeta