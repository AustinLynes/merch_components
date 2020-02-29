import React from 'react'
import { NAVIGATION } from './style'
import { Link } from '../link'

export const Navigation = (props) => {
    const { style, links, onChangeCallback, ...rest } = props

    const OnClickCallback = (e) => {

        onClickCallback && onClickCallback(e);
    }
    return (
        <NAVIGATION>
            {
                links && links.map((link, i) => (<Link key={i + '_ln'} onClickCallback={OnClickCallback} style={link.style} name={link.name} />))
            }
        </NAVIGATION>
    )
}

export default Navigation
