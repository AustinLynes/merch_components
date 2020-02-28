import React, { useState } from 'react';
import { BANNER, MESSAGE, INPUT, EDIT_ICON } from './style';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

const TextBanner = (props) => {
    const { style, message, size, onChangeCallback, onClickCallback, ...rest } = props
    const [edit, setEdit] = useState(false)
    const OnClickCallback = (e) => {
        e.preventDefault();
        setEdit(!edit);
        onClickCallback && onClickCallback(e);
    }
    const OnChangeCallback = (e) => {
        e.preventDefault();
        onChangeCallback && onChangeCallback(e);
    }
    return (

        <BANNER style={style && style.wrapperStyle}>
            <EDIT_ICON icon={faPencilAlt} onClick={OnClickCallback} />
            {!edit ?
                <MESSAGE style={style && style.wrapperStyle} >{message}</MESSAGE>
                : <INPUT style={style && style.inputStyle} onChange={OnChangeCallback} value={message} />}

        </BANNER>
    )
}

export default TextBanner