import React from 'react'

import { LINKBAR, LINK, LINKCARD, PREVIEW } from './style.js'

import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { ICON } from '../global/style.js'

const LinkBar = (props) => {
    const { links, style, ...rest } = props;

    return (
        <LINKBAR>
            {
                links && links.map((link, i) => (
                    <LINKCARD key={i}>
                        <ICON style={style && style.iconStyle} icon={
                            link.name === 'facebook' ? faFacebook
                                : link.name === 'github' ? faGithub
                                    : link.name === 'twitter' ? faTwitter
                                        : null
                        } />
                        <LINK>{link.name}</LINK>
                    </LINKCARD>
                ))
            }
        </LINKBAR>
    )
}

export default LinkBar