import React from 'react'
import Header from './Header'

const HeaderMeta = {
    title: "organisms/Sections",
    component: Header,
    argTypes: {
        testID: { table: { disable: true } },
    }
}

const testID = "Header-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Header {...args} />

export const PageHeader = Template.bind({})
PageHeader.args = {
    testID: testID,
}

export default HeaderMeta