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
        <FOOTER data-testid='wrapper'>
            {
                links && links.map((link, i) => (<Link data-testid='link' key={i + '_lf'} onClickCallback={OnClickCallback} style={link.style} name={link.name} />))
            }
        </FOOTER>
    )
}


export default Footer
