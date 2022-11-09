import React from 'react'
import Heading from './Heading'

const HeadingMeta = {
    title: "atoms/Heading",
    component: Heading,
    argTypes: {
        testID: { table: { disable: true } },
        type: { name: "Type",  control: { type: "select"}}
    }
}

const txt = "about us"

const testID = "Heading-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Heading {...args} />

export const H1 = Template.bind({})
H1.args = {
    testID: testID,
    type: 'h1',
    text: txt
}

export const H2 = Template.bind({})
H2.args = {
    testID: testID,
    type: 'h2',
    text: txt
}

export const H3 = Template.bind({})
H3.args = {
    testID: testID,
    type: 'h3',
    text: txt
}

export default HeadingMeta