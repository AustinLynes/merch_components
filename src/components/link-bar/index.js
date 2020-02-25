import React from 'react'

import { LINKBAR, LINK, LINKCARD, PLACEHOLDER, PLUS_ICON, ICON } from './style.js'

import { faFacebook, faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

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
                <PLACEHOLDER /*onClick={OnClickCallback}*/ item_is_null={true} >
                    <PLUS_ICON style={style && style.plusIconSyle} icon={faPlus} />
                    <p style={{ width: '100%', textAlign: 'center' }}>Add an link</p>
                </PLACEHOLDER>
            </LINKBAR>

        )
    } 
}

export default LinkBar