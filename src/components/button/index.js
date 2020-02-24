import React from 'react'
import { BUTTON } from './style.js'
const Button = (props) => {
    const { style, name, onClickCallback, ...rest } = props

    return <BUTTON style={style} name={name} onClick={onClickCallback}>{name}</BUTTON>
}

export default Button