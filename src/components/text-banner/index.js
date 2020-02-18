import React from 'react';
import { BANNER, MESSAGE } from './style';

const TextBanner = (props) => {
    const { message, ...rest } = props
    return (
        <BANNER>
            <MESSAGE>{message}</MESSAGE>
        </BANNER>
    )
}

export default TextBanner