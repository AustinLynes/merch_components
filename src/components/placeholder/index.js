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
        <PLACEHOLDER data-testid='placeholder' onClick={OnClickCallback} style={style && style.placeholderStyle}>
            <PLUS_ICON data-testid='plus-icon' style={style && style.plusIconSyle} icon={faPlus} />
            <TEXT data-testid='text' style={style && style.textStyle}>{`Add an ${type}`}</TEXT>
        </PLACEHOLDER>
    )
}



