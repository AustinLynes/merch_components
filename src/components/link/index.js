import React from 'react';
import { LINK } from './style';

export const Link = (props) => {
    const { name, style, onClickCallback, ...rest } = props;

    const OnClickCallback = (e) => {
        e.preventDefault();
        onClickCallback && onClickCallback(e);
    }
    return (<LINK data-testid='link element' onClick={OnClickCallback} style={style && style.wrapperStyle}>{name}</LINK>)
}