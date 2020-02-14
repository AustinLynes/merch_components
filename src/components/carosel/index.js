import React, { useState } from 'react'
import { CAROSEL, IMAGE, BUTTON } from './Style'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'


const Carosel = (props) => {
    const { images, ...rest } = props
    const [index, setIndex] = useState(0);

    const increment = () => {
        var i = index;
        index >= images.length - 1 ? setIndex(0) : setIndex(i += 1)
    }
    const decrement = () => {
        var i = index;
        index <= 0 ? setIndex(images.length - 1) : setIndex(i -= 1)
    }
    return (
        <CAROSEL>
            <BUTTON icon={faAngleLeft} onClick={decrement} />
            {images.map((image, i) => (i === index && <IMAGE src={image} />))}
            <BUTTON right icon={faAngleRight} onClick={increment} />
        </CAROSEL>
    )
}
export default Carosel
{/* images ??  !!the array of images that want to be displayed inside the carosel */ }