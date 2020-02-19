import React from 'react'
import { NAVIGATION, BUTTON } from './style'
import { LINK } from '../global/style';

export const Navigation = (props) => {
    const { buttons, ...rest } = props

    return (
        <NAVIGATION>
            {
                buttons && buttons.map(button => (<LINK key={button.id} >{button.name}</LINK>))
            }
        </NAVIGATION>
    )
}

export default Navigation
