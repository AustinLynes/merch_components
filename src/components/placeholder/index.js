import React from 'react';
import { PLACEHOLDER, PLUS_ICON, TEXT } from './style'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const Placeholder = (props) => {
    const { style, type, onClickCallback, ...rest } = props;
    const OnClickCallback = (e)=>{
        e.preventDefault();
        onClickCallback && onClickCallback(e);
    }
    return (
        <PLACEHOLDER onClick={OnClickCallback} style={style && style.placeholderStyle}>
            <PLUS_ICON style={style && style.plusIconSyle} icon={faPlus} />
            <TEXT style={style && style.textStyle}>{`Add an ${type}`}</TEXT>
        </PLACEHOLDER>
    )
}



