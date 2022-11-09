import React from 'react'
import MenuTrigger from './MenuTrigger'

const MenuTriggerMeta = {
    title: "atoms/MenuTrigger",
    component: MenuTrigger,
    argTypes: {
        testID: { table: { disable: true } },
    }
}

const testID = "MenuTrigger-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <MenuTrigger {...args} />

export const DefaultMenuTrigger = Template.bind({})
DefaultMenuTrigger.args = {
    testID: testID,
}

export default MenuTriggerMeta