import React from 'react'
import { IMAGE, IMAGE_PLACEHOLDER, ICON } from './style'
import { faImage } from '@fortawesome/free-solid-svg-icons';

const Image = (props) => {

    const { src, size, style, ...rest } = props

    if (src && src) {
        return (
            <IMAGE draggable={false} data-testid='image' size={size} src={src} style={style} />
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