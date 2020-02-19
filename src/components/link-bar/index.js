import React from 'react'

import { LINKBAR, LINK, LINKCARD, PREVIEW } from './style.js'

const LinkBar = (props) => {

    const { links, ...rest } = props;
    console.log(links);
    return (
        <LINKBAR>
            {
                links && links.map((link, i) => (
                    <LINKCARD key={i}>
                        <PREVIEW src={link.src}/>
                        <LINK>{link.name}</LINK>
                    </LINKCARD>
                ))
            }
        </LINKBAR>
    )
}

export default LinkBar