import React, { useState } from 'react';
import { CAROSEL as CAROUSEL, IMAGE, PLACEHOLDER_CAROSEL, PLACEHOLDER, ICON } from './Style';
import { faAngleLeft, faAngleRight, faImages } from '@fortawesome/free-solid-svg-icons';

// at the time of calling this function.. check the current _count vs the _repeatVal.
// if _count is > _repeatVal then i want count to be set to 0
// else i want you to increase  _count by _count + 1  => += 1
// then give me back the result of ^^^^^
export const increment = (_count, _repeatVal) => {

    _count > _repeatVal - 1 ? _count = 0 : _count += 1
    console.log(_count);
    return _count
}
// at the time of calling this function.. check the current _count vs the _repeatVal.
// if _count is <= 0 then i want count to be set to _repeatVal
// else i want you to decrease _count by _count - 1  => -= 1
// then give me back the result of ^^^^^ 
//CTRL + D 

export const decrement = (_count, _repeatVal) => {

    _count <= 0 ? _count = _repeatVal : _count -= 1
    return _count
}

const Carousel = (props) => {
    const { images, style, cb, ...rest } = props;
    const [count, setCount] = useState(0);

    const addFunctions = (e) => {
        cb && cb();
        if (e.target.name === 'left') {
            setCount(decrement(count, images.length - 1))
        }
        else {
            setCount(increment(count, images.length - 1))
        }
    }

    if (images && images.length > 0) {
        return (
            <CAROUSEL data-testid='wrapper' style={style && style.wrapperStyle}>
                <ICON data-testid={'icon decrement'} draggable={false} name='left' style={style && style.leftIconStyle} onClick={addFunctions} />
                {
                    images.map((image, i) => (
                        i === count && <IMAGE draggable={false} id={`${i}_im`} data-testid='image' key={`${i}_im`} style={style && style.imageStyle} src={image} />)
                    )
                             }
                <ICON data-testid={'icon increment'} draggable={false} style={style && style.rightIconStyle} onClick={addFunctions} />
            </CAROUSEL>
        )
    } else {
        return (
            <PLACEHOLDER_CAROSEL data-testid='wrapper' style={style && style.placeholder_wrapperStyle}>
                <ICON data-testid={'icon'} style={style && style.leftIconStyle} draggable={false} onClick={decrement} />
                <PLACEHOLDER data-testid='placeholder'>
                    <ICON style={style && style.plusIconStyle} isplus="true" icon={faImages} />
                    <p style={{ width: '100%', textAlign: 'center' }}>Tap to add photos</p>
                </PLACEHOLDER>
                <ICON data-testid={'icon'} style={style && style.rightIconStyle} draggable={false} onClick={increment} />
            </PLACEHOLDER_CAROSEL>
        )
    }
}
export default Carousel
{/* images ??  !!the array of images that want to be displayed inside the carosel */ }