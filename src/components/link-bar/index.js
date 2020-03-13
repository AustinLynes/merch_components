import React from 'react'
import { LINKBAR, LINK, LINKCARD, ICON } from './style.js'
import { faFacebook, faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Placeholder } from '../placeholder/index.js';

const LinkBar = (props) => {
    const { links, style, ...rest } = props;

    const findName = (link) => {
        alert(`THIS IS A DEBUG MESSAGE... FINDING NAME ${link.name}`)
        icon = null
        switch (link.name) {
            case link.name === 'facebook':
                return icon = faFacebook;
            case link.name === 'github':
                return icon = faGithub;
            case link.name === 'twitter':
                return icon = faTwitter;
            case link.name === 'linkedin':
                return icon = faLinkedinIn;
            case link.name === 'instagram':
                return icon = faInstagram;
            default:
                return icon = null;
        }
        return icon
    }
    if (links && links) {
        return (
            <LINKBAR data-testid='wrapper'>
                {
                    links && links.map((link, i) => (
                        <LINKCARD data-testid='link-cards' key={i}>
                            <ICON data-testid='link-card-icon' style={style && style.iconStyle} icon={() => (findName(link))} />
                            <LINK >{link.name}</LINK>
                        </LINKCARD>
                    ))
                }
            </LINKBAR>

        )
    } else {
        return (
            <LINKBAR data-testid='wrapper'>
                <Placeholder type={'link'} style={{ placeholderStyle: { width: '30%', height: '353px' }, textStyle: { color: 'white' } }} />
            </LINKBAR>
        )
    }
}

export default LinkBar