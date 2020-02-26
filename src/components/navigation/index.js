import React from 'react'
import { NAVIGATION, BUTTON } from './style'
import { Link } from '../link'
export const Navigation = (props) => {
    const { style, links, onChangeCallback, ...rest } = props

    return (
        <NAVIGATION>
            {
                links && links.map((link, i) => (<Link key={i + '_ln'} onChangeCallback={OnChangeCallback} style={link.style} name={link.name} />))

            }
        </NAVIGATION>
    )
}

export default Navigation
