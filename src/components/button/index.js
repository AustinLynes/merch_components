import React from 'react'
import { BUTTON, BUTTON_WRAPPER } from './style.js'

const Button = (props) => {
    const { style, name, onClickCallback, ...rest } = props

    const OnClickCallback = (e) => {
        e.preventDefault();
        onClickCallback && onClickCallback(e);
    }

    return (
        <BUTTON_WRAPPER style={style && style.wrapperStyle}>
            <BUTTON  name={name} onClick={OnClickCallback}>{name}</BUTTON>
        </BUTTON_WRAPPER>
    )
}
export default Button