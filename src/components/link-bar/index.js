import React from 'react'

import { LINKBAR, LINK, LINKCARD } from './style.js'

const LinkBar = (props) => {

    const { links, ...rest } = props;

    return (
        <LINKBAR>
            {links && links.map((link, i) => (<LINKCARD key={i}><LINK>{link.name}</LINK></LINKCARD>))}
        </LINKBAR>
    )
}

export default LinkBar