import React from 'react'
import { IMAGE, IMAGE_PLACEHOLDER } from './style'
import { ICON } from '../carosel/style'
import { faImage } from '@fortawesome/free-solid-svg-icons';
const Image = (props) => {

    const { src, size, ...rest } = props


    if (src && src) {
        return (
            <IMAGE size={size} src={src} />
        )
    } else {
        return (
            <IMAGE_PLACEHOLDER size={size}>
                <ICON icon={faImage} />
            </IMAGE_PLACEHOLDER>
        )
    }
}
export default Image