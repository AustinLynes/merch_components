import React from 'react'
import { IMAGE, IMAGE_PLACEHOLDE,ICON } from './style'
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
                <p style={{width:'100%', textAlign:'center'}}>Tap to add a photo</p>
            </IMAGE_PLACEHOLDER>
        )
    }
}
export default Image