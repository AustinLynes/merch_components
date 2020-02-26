import React, { useState } from 'react';
import { FOOTER} from './style';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from '../link'

export const Footer = (props) => {
    const { style, links, onChangeCallback, ...rest } = props;

    const OnChangeCallback = (e) => {
        e.preventDefault();
        onChangeCallback && onChangeCallback(e);
    }


    return (
        <FOOTER>
            {
                links && links.map((link, i) => (<Link key={i + '_lf'} onChangeCallback={OnChangeCallback} style={link.style} name={link.name} />))
            }
        </FOOTER>
    )
}


export default Footer
