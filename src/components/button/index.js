import React from 'react'
import { BUTTON } from './style.js'
const Button = (props) => {
    const { name, onClickCallback, ...rest } = props

    return <BUTTON name={name} onClick={onClickCallback}>{name}</BUTTON>
}

export default Button