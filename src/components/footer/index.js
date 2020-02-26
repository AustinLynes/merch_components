import React from 'react';
import { FOOTER, BUTTON }from './style';
import { LINK }from '../global/style';
import Button from '../button';

export const Navigation = (props) => {
    const { buttons, ...rest } = props;

    return (
        <FOOTER>
            {
                buttons && buttons.map(button => (<Button name={button.name}/>))
            }
        </FOOTER>
    )
}

export default Navigation
