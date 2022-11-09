import React from 'react'
import Logo from './Logo'

const LogoMeta = {
    title: "atoms/Logo",
    component: Logo,
    argTypes: {
        testID: { table: { disable: true } },
    }
}

const testID = "Logo-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Logo {...args} />

export const DefaultLogo = Template.bind({})
DefaultLogo.args = {
    testID: testID,
}

export default LogoMeta