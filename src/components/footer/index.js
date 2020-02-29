import React from 'react';
import { FOOTER } from './style';
import { Link } from '../link'

export const Footer = (props) => {
    const { style, links, onClickCallback, ...rest } = props;

    const OnClickCallback = (e) => {
        e.preventDefault();
        onClickCallback && onClickCallback();
    }
    return (
        <FOOTER>
            {
                links && links.map((link, i) => (<Link key={i + '_lf'} onClickCallback={OnClickCallback} style={link.style} name={link.name} />))
            }
        </FOOTER>
    )
}


export default Footer
