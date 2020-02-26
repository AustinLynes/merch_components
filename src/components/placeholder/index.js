import React from 'react';
import { PLACEHOLDER, PLUS_ICON } from './style'

export const Placeholder = (props) => {
    const {style, type, ...rest} = props;

    return (
        <PLACEHOLDER /*onClick={OnClickCallback}*/ >
            <PLUS_ICON style={style && style.plusIconSyle} icon={faPlus} />
            <p style={{ width: '100%', color: 'white', textAlign: 'center' }}>{`Add an ${type}`}</p>
        </PLACEHOLDER>
    )
}

