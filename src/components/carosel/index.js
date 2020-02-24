import React, { useState } from 'react';
import { CAROSEL, IMAGE, PLACEHOLDER_CAROSEL, PLACEHOLDER, ICON } from './Style';
import { faAngleLeft, faAngleRight, faPlus } from '@fortawesome/free-solid-svg-icons';


const Carosel = (props) => {
    const { images, style, ...rest } = props;
    const [index, setIndex] = useState(0);

    const increment = () => {
        var i = index;
        index >= images.length - 1 ? setIndex(0) : setIndex(i += 1);
    }
    const decrement = () => {
        var i = index;
        index <= 0 ? setIndex(images.length - 1) : setIndex(i -= 1);
    }
    if (images && images) {
        return (
            <CAROSEL style={style && style.wrapperStyle}>
                <ICON style={style && style.leftIconStyle} isCarousel={true} icon={faAngleLeft} onClick={decrement} />
                {images.map((image, i) => (i === index && <IMAGE style={style && style.image} src={image} />))}
                <ICON style={style && style.rightIconStyle} isCarousel={true} right icon={faAngleRight} onClick={increment} />
            </CAROSEL>
        )
    }else{
        return (
            <PLACEHOLDER_CAROSEL style={style && style.placeholder_wrapperStyle}>
                 <ICON style={style && style.leftIconStyle} icon={faAngleLeft} onClick={decrement} />
                    <PLACEHOLDER>
                         <ICON style={style && style.plusIconStyle} isPlus={true} icon={faPlus} />
                         <p style={{width:'100%', textAlign:'center'}}>Tap to add photos</p>
                    </PLACEHOLDER>
                <ICON style={style && style.rightIconStyle} icon={faAngleRight} onClick={increment} />
            </PLACEHOLDER_CAROSEL>
        )
    }
}
export default Carosel
{/* images ??  !!the array of images that want to be displayed inside the carosel */ }