import React from 'react'

const Image = (props) => {

    const { src, size, ...rest } = props
   
    return (
        <IMAGE size={size} src={src} />
    )
}
export default Image