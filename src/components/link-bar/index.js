import React from 'react'
import { LINKBAR, LINK, LINKCARD, ICON } from './style.js'
import { faFacebook, faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Placeholder } from '../placeholder/index.js';

const LinkBar = (props) => {
    const { links, style, ...rest } = props;
    var _n = null;

    const findName = (link) => {
        // alert(`THIS IS A DEBUG MESSAGE... FINDING NAME ${link.name}`)
        let _link;
        switch (link.name) {
            case 'facebook':
                return _link = faFacebook;
            case 'github':
                return _link = faGithub;
            case 'twitter':
                return _link = faTwitter;
            case 'linkedin':
                return _link = faLinkedinIn;
            case 'instagram':
                return _link = faInstagram;
            default:
                break;
        }
        return _link;
    }
    if (links && links) {
        return (
            <LINKBAR data-testid='wrapper'>
                {
                    links && links.map((link, i) => (
                        <LINKCARD data-testid='link-cards' key={i}>
                            {_n = findName(link)}
                            {console.log(_n)}
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