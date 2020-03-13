import React from 'react'
import { LINKBAR, LINK, LINKCARD, ICON } from './style.js'
import { faFacebook, faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Placeholder } from '../placeholder/index.js';

const LinkBar = (props) => {
    const { links, style, ...rest } = props;
    const [_n] = null;

    const findName = (link) => {
        alert(`THIS IS A DEBUG MESSAGE... FINDING NAME ${link.name}`)
        icon = null
        switch (link.name) {
            case link.name === 'facebook':
                icon = faFacebook;
                break;
            case link.name === 'github':
                icon = faGithub;
                break;
            case link.name === 'twitter':
                icon = faTwitter;
                break;
            case link.name === 'linkedin':
                icon = faLinkedinIn;
                break;
            case link.name === 'instagram':
                icon = faInstagram;
                break;
            default:
                break;
        }
    }
    if (links && links) {
        return (
            <LINKBAR data-testid='wrapper'>
                {
                    links && links.map((link, i) => (
                        <LINKCARD data-testid='link-cards' key={i}>
                            {_n = findName(link)}
                            <ICON data-testid='link-card-icon' style={style && style.iconStyle} icon={_n} />
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