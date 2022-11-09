import React from 'react'
import Button from './Button'

const ButtonMeta = {
    title: "atoms/Button",
    component: Button,
    argTypes: {
        testID: { table: { disable: true } },
        text: { name: "Text" },
        type: { name: "Type"}
    }
}

const testID = "Button-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Button {...args} />

export const Closed = Template.bind({})
Closed.args = {
    testID: testID,
    text: "about us",
    type: "closed"
}

export const Open = Template.bind({})
Open.args = {
    testID: testID,
    text: "about us",
    type: "open"
}

export const Colored = Template.bind({})
Colored.args = {
    testID: testID,
    text: "about us",
    type: "colored"
}



export default ButtonMeta