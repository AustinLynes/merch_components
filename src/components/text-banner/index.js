import React from 'react';
import { BANNER, MESSEGE } from './style';

const TextBanner = (props) => {
    const { messege, ...rest } = props
    return (
        <BANNER>
            <MESSEGE>{messege}</MESSEGE>
        </BANNER>
    )
}

export default TextBanner