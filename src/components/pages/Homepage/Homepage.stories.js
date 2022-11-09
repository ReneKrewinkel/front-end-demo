import React from 'react'
import Homepage from './Homepage'

const HomepageMeta = {
    title: "Pages/Home",
    component: Homepage,
    argTypes: {
        testID: { table: { disable: true } },
    }
}

const testID = "Homepage-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Homepage {...args} />

export const Home = Template.bind({})
Home.args = {
    testID: testID,
}

export default HomepageMeta