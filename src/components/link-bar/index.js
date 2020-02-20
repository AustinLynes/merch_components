import React from 'react'

import { LINKBAR, LINK, LINKCARD, PREVIEW } from './style.js'

import { faFacebook, faGit, faTwitter, faTwitch } from '@fortawesome/free-brands-svg-icons'
import { ICON } from '../global/style.js'

const LinkBar = (props) => {
    const { links, style, ...rest } = props;
    const checkName = (__name) => {
        switch (__name) {
            case "facebook": return faFacebook;
            case "github": return faGit;
            case "twitter":return faTwitter;
            case 'twitch':return faTwitch; 
        }
        return alert('name could not be found...');
    }
    return (
        <LINKBAR>
            {
                links && links.map((link, i) => (
                    <LINKCARD key={i}>
                        <ICON style={style && style.iconStyle} icon={ () => checkName(link.name) } />
                        <LINK>{link.name}</LINK>
                    </LINKCARD>
                ))
            }
        </LINKBAR>
    )
}

export default LinkBar