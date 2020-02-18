import React from 'react';
import { BANNER, MESSEGE } from './style';
const TextBanner = (props) => {
    const { messege, ...rest } = props
    return (
        <BANNER><MESSEGE placeholder={messege} /></BANNER>
    )
}

export default TextBanner