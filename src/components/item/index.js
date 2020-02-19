import React, { useState, useEffect } from 'react';
import { ITEM, CLOSE_BUTTON, IMAGE } from './style'
import { INPUT } from '../global/style';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

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
        <ITEM
            style={style && style.wrapperStyle}
            scale={scale}
            id={id}
            onContextMenu={e => {
                e.preventDefault();
                toggle(e.target.id);
            }}>
            <IMAGE
                id={id}
                style={style && style.imageStyle}
                scale={scale + 0.2}
                alt='shirt'
                src={imageSrc}
            />
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
            <INPUT
                id={id + 'in'}
                name='itemName'
                onChange={handleChanges}
                style={style && style.nameStyle}
                value={payload.itemName}
            />
            <CLOSE_BUTTON style={style && style.closeButtonStyle} id={id} icon={faTimes} />
        </ITEM>
    )
}
export default Item;