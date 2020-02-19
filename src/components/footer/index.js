import React from 'react';
import { FOOTER, BUTTON }from './style';
import { LINK }from '../global/style';

export const Navigation = (props) => {
    const { buttons, ...rest } = props;

    return (
        <FOOTER>
            {
                buttons && buttons.map(button => (<LINK>{button.name}</LINK>))
            }
        </FOOTER>
    )
}

export default Navigation
