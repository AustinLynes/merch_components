import React, { useState } from 'react';
import { BANNER, MESSAGE, INPUT } from './style';

const TextBanner = (props) => {
    const { style, message, size, ...rest } = props

    return (

        <BANNER style={style && style.wrapperStyle}>
            {!edit ?
                <MESSAGE style={style && style.wrapperStyle} >{message}</MESSAGE>
                : <INPUT style={style && style.inputStyle} onChange={OnChangeCallback} value={name} />}
        </BANNER>
    )
}

export default TextBanner