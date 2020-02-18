import React from 'react'
import { LINKBAR, LINK  } from './style.js'
const LinkBar = (props) => {
    
    const {links, ...rest} = props;

    return (
        <LINKBAR>
            {links && links.map(link => (<LINK className={`fas fa-${link.name}`}/>))}     
        </LINKBAR>
    )
}

export default LinkBar