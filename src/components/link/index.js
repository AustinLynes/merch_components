import React, { useState } from 'react';
import { LINK, LINK_WRAPPER, EDIT_ICON, INPUT } from '../footer/style';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export const Link = (props) => {
    const { name, style, onChangeCallback, onClickCallback, edit, ...rest } = props;
    const OnClickCallback = (e) => {
        e.preventDefault();
        onClickCallback && onClickCallback(e);
    }
    return (
        <LINK_WRAPPER>
            {
                !edit ?
                    <LINK style={style && style.wrapperStyle}>{name}</LINK>
                    : <INPUT style={style && style.inputStyle} onChange={onChangeCallback} value={name} />
            }
        </LINK_WRAPPER>
    )
}