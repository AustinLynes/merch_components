import React from 'react'

import { LINKBAR, LINK, LINKCARD, PREVIEW } from './style.js'

import { faFacebook, faGit, faTwitter, faTwitch } from '@fortawesome/free-brands-svg-icons'
import { ICON } from '../global/style.js'

const LinkBar = (props) => {
    const { links, style, ...rest } = props;
    const checkName = (n) => {
        var i = null;
        switch (n) {
            case "facebook": return i = faFacebook;
            case "github": return i = faGit;
            case "twitter": return i = faTwitter;
            case 'twitch': return i = faTwitch;
        }
        return i;
    }

    return (
        <LINKBAR>
            {
                links && links.map((link, i) => (
                    <LINKCARD key={i}>
                        <ICON style={style && style.iconStyle} icon={() => {
                            console.log(link.name);
                            return checkName(link.name);
                        }} />
                        <LINK>{link.name}</LINK>
                    </LINKCARD>
                ))
            }
        </LINKBAR>
    )
}

export default LinkBar