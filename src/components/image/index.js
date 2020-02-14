import React from 'react'
import {IMAGE}from './style'

const Image = (props) => {

    const { src, size, ...rest } = props
   
    return (
        <IMAGE size={size} src={src} />
    )
}
export default Image