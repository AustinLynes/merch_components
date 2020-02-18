import React from 'react';
import { FOOTER, BUTTON }from './style';

export const Navigation = (props) => {
    const { buttons, ...rest } = props;

    return (
        <FOOTER>
            {
                buttons && buttons.map(button => (<BUTTON >{button.name}</BUTTON>))
            }
        </FOOTER>
    )
}

export default Navigation
