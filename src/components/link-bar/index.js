import React from 'react'

import { LINKBAR, LINK, LINKCARD, ICON } from './style.js'

import { faFacebook, faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Placeholder } from '../placeholder/index.js';

const LinkBar = (props) => {
    const { links, style, ...rest } = props;

    if (links && links) {
        return (
            <LINKBAR>
                {
                    links && links.map((link, i) => (
                        <LINKCARD key={i}>
                            <ICON style={style && style.iconStyle} icon={
                                link.name === 'facebook' ? faFacebook
                                    : link.name === 'github' ? faGithub
                                        : link.name === 'twitter' ? faTwitter
                                            : link.name === 'linkedin' ? faLinkedinIn
                                                : link.name === 'instagram' ? faInstagram
                                                    : null
                            } />
                            <LINK>{link.name}</LINK>
                        </LINKCARD>
                    ))
                }
            </LINKBAR>

        )
    } else {
        return (
            <LINKBAR>
                <Placeholder type={'link'} style={{ placeholderStyle: { width: '30%', height: '353px' } }} />
            </LINKBAR>
        )
    }
}

export default LinkBar