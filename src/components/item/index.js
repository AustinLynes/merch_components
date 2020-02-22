import React, { useState, useEffect } from 'react';
import { WRAPPER, CLOSE_BUTTON, IMAGE } from './style'
import { INPUT } from '../global/style';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = (props) => {
    // GSAP 
    const { style, item, ...rest } = props;
    const { id, onSale, itemName, itemCost, imageSrc, toggleOnSale, saleCost, submitCallback, updateItem, deleteItem, scale } = item
    const [payload, setPayload] = useState({ id, itemName, saleCost, itemCost });

    const toggle = (id) => {
        toggleOnSale(id);
    }
    //-> SET ANIM 
    // GSAP so
    const handleChanges = (e) => {
        setPayload({ ...payload, [e.target.name]: e.target.value });
        updateItem(e.target.id, payload);
        return item;
    }
    // abstract scale to a parent var... then.. apply scale to the carosel 
    // navigation needs background color.. then customize buttons 
    // 
    return (
        <WRAPPER
            style={style && style.wrapperStyle}
            scale={scale}
            id={id}
            onContextMenu={e => {
                e.preventDefault();
                toggle(e.target.id);
            }}>
            <INPUT
                id={id + 'in'}
                name='itemName'
                onChange={handleChanges}
                style={style && style.nameStyle}
                value={payload.itemName}
            />
            {imageSrc ? 
           ( <IMAGE
            id={id}
            style={style && style.imageStyle}
            scale={scale + 0.2}
            alt='shirt'
            src={imageSrc}
            />):(<FontAwesomeIcon icon={faPlus}/>)
            }
            <INPUT
                name='itemCost'
                style={style && style.costStyle}
                id={id + 'ic'}
                onSale={onSale}
                type='number'
                onChange={handleChanges}
                value={payload.itemCost}
                isCost={true}
            />
            {onSale && (
                <INPUT
                    id={id + 'sc'}
                    style={style && style.saleCostStyle}
                    type='number'
                    name='saleCost'
                    onChange={handleChanges}
                    value={payload.saleCost}
                />
            )}

            <CLOSE_BUTTON style={style && style.closeButtonStyle} id={id} icon={faTimes} />
        </WRAPPER>
    )
}
export default Item;