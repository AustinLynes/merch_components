import React, { useState } from 'react';
import { CAROSEL as CAROUSEL, IMAGE, PLACEHOLDER_CAROSEL, PLACEHOLDER, ICON } from './Style';
import { faAngleLeft, faAngleRight, faImages } from '@fortawesome/free-solid-svg-icons';

export const increment = (_count, _repeatVal) => {
    return _count >= _repeatVal - 1 ? _count = 0 : _count += 1
}
export const decrement = (_count, _repeatVal) => {
    return _count <= 0 ? _count = _repeatVal : _count -= 1
}
const Carousel = (props) => {
    const { images, style, ...rest } = props;
    const [count, setCount] = useState(0);

    const handleClick = (val) => {
        // 2 
        console.log(count)
        // - 1 < 0
        if (count < 0) {
            setCount(images.length - 1)
            console.log(count)

            // 3 > 2
        } else if (count > images.length) {
            setCount(0)
            console.log(count)


        }
        else {
            setCount(val === 'increment' ? count + 1 : count - 1)
            console.log(count)

        }
 

    }

    if (images && images.length > 0) {
        return (
            <CAROUSEL data-testid='wrapper' style={style && style.wrapperStyle}>
                <ICON data-testid={'icon decrement'} style={style && style.leftIconStyle} icon={faAngleLeft} onClick={() => handleClick('increment')} />
                {
                    images.map((image, i) => (
                        i === count && <IMAGE draggable={false} id={`${i}_im`} data-testid='image' key={`${i}_im`} style={style && style.imageStyle} src={image} />)
                    )
                }
                <ICON data-testid={'icon increment'} style={style && style.rightIconStyle} icon={faAngleRight} onClick={() => handleClick()} />
            </CAROUSEL>
        )
    } else {
        return (
            <PLACEHOLDER_CAROSEL data-testid='wrapper' style={style && style.placeholder_wrapperStyle}>
                <ICON data-testid={'icon'} style={style && style.leftIconStyle} icon={faAngleLeft} onClick={decrement} />
                <PLACEHOLDER data-testid='placeholder'>
                    <ICON data-testid={'icon plus'} style={style && style.plusIconStyle} isplus="true" icon={faImages} />
                    <p style={{ width: '100%', textAlign: 'center' }}>Tap to add photos</p>
                </PLACEHOLDER>
                <ICON data-testid={'icon'} style={style && style.rightIconStyle} icon={faAngleRight} onClick={increment} />
            </PLACEHOLDER_CAROSEL>
        )
    }
}
export default Carousel
{/* images ??  !!the array of images that want to be displayed inside the carosel */ }