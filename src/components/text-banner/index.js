import React from 'react';
import { BANNER, MESSAGE } from './style';

const TextBanner = (props) => {
    const { style, message, size, onClickCallback, ...rest } = props

    const OnClickCallback = (e) => {
        e.preventDefault();
        onClickCallback && onClickCallback(e);
    }

    return (
        <BANNER data-testid='wrapper' onClick={OnClickCallback} style={style && style.wrapperStyle}>
            <MESSAGE data-testid='text' style={style && style.textStyle} >{message}</MESSAGE>
        </BANNER>
    )
}

export default TextBanner