import React from 'react';
import { PLACEHOLDER, PLUS_ICON } from './style'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const Placeholder = (props) => {
    const {style, type, ...rest} = props;

    return (
        <PLACEHOLDER /*onClick={OnClickCallback}*/ >
            <PLUS_ICON style={style && style.plusIconSyle} icon={faPlus} />
            <p style={{ width: '60%', height:'353px', color: 'black', textAlign: 'center' }}>{`Add an ${type}`}</p>
        </PLACEHOLDER>
    )
}

