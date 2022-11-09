import React from 'react'
import Image from './Image'

const ImageMeta = {
    title: "atoms/Image",
    component: Image,
    argTypes: {
        testID: { table: { disable: true } },
    }
}

const testID = "Image-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Image {...args} />

export const DefaultImage = Template.bind({})
DefaultImage.args = {
    testID: testID,
}

export default ImageMeta