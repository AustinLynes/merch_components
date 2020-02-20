import React from 'react'

import { LINKBAR, LINK, LINKCARD, PREVIEW } from './style.js'

import { faFacebook, faGit, faTwitter, faTwitch } from '@fortawesome/free-brands-svg-icons'
import { ICON } from '../global/style.js'

const LinkBar = (props) => {
    const { links, style, ...rest } = props;
    const checkName = (__name) => {
        var __icon = null;

        switch (__name) {
            case "facebook":    __icon = faFacebook;
            case "github":      __icon = faGit;
            case "twitter":     __icon = faTwitter;
            case 'twitch':      __icon = faTwitch;
        }
        
        return __icon;
    }
    return (
        <LINKBAR>
            {
                links && links.map((link, i) => (
                    <LINKCARD key={i}>
                        <ICON style={style && style.iconStyle} icon={() => checkName(link.name)} />
                        <LINK>{link.name}</LINK>
                    </LINKCARD>
                ))
            }
        </LINKBAR>
    )
}

export default LinkBar