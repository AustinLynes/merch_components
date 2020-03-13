import React from 'react'
import { LINKBAR, LINK, LINKCARD, ICON } from './style.js'
import { faFacebook, faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Placeholder } from '../placeholder/index.js';

const LinkBar = (props) => {
    const { links, style, ...rest } = props;
    var _n = null;

    const findName = (link) => {
        // alert(`THIS IS A DEBUG MESSAGE... FINDING NAME ${link.name}`)
        var icon = null
        switch (link.name) {
            case 'facebook':
                console.log('i made it boss')
                return icon = faFacebook;
            case 'github':
                return icon = faGithub;
            case  'twitter':
                return icon = faTwitter;
            case 'linkedin':
                return icon = faLinkedinIn;
            case 'instagram':
                return icon = faInstagram;
            default:
                console.log('ERR :: NO LINK NAME FOUND.. I CAN\'T CREATE YOU AN ICON BOSS! ')
                return icon;
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