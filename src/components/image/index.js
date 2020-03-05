import React from 'react'
import { IMAGE, IMAGE_PLACEHOLDER, ICON } from './style'
import { faImage } from '@fortawesome/free-solid-svg-icons';
const Image = (props) => {

    const { src, size, ...rest } = props

    if (src && src) {
        return (
            <IMAGE data-testid='image' size={size} src={src} />
        )
    } else {
        return (
            <IMAGE_PLACEHOLDER data-testid='placeholder' size={size}>
                <ICON data-testid='icon' icon={faImage} />
                <p data-testid='text' style={{ width: '100%', textAlign: 'center' }}>Tap to add a photo</p>
            </IMAGE_PLACEHOLDER>
        )
    }
}
export default Image