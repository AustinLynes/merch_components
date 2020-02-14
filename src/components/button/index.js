import React from 'react'
import { BUTTON } from './style.js'
const Button = (props) => {
    const { name, onClickCallback, ...rest } = props
    
    return <BUTTON name={name} value={name} onClick={onClickCallback} />
}

export default Button