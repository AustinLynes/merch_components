import React, { useState } from 'react'
import { BUTTON, INPUT, EDIT_ICON, BUTTON_WRAPPER } from './style.js'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
const Button = (props) => {
    const { style, name, onClickCallback, onChangeCallback, ...rest } = props
    const [edit, setEdit] = useState(false)
    const OnChangeCallback = (e) => {
        e.preventDefault();
        onChangeCallback && onChangeCallback(e);
    }

    const OnClickCallback = (e) => {
        e.preventDefault();
        setEdit(!edit);
        onClickCallback && onClickCallback(e);
    }

    return (
        <BUTTON_WRAPPER>
            <EDIT_ICON icon={faPencilAlt} onClick={OnClickCallback} />
            {
                !edit ?
                    <BUTTON style={style && style.wrapperStyle} name={name} >{name}</BUTTON>
                    : <INPUT style={style && style.inputStyle} onChange={OnChangeCallback} value={name} />
            }
        </BUTTON_WRAPPER>
    )
}
export default Button