import React, { useState, useEffect } from 'react';
import { Item_, CloseButton, Cost, Image, ItemName, SaleCost } from './style'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
const Item = (props) => {
    // GSAP 
    const { style, item, ...rest } = props;
    const { id, onSale, itemName, itemCost, imageSrc, toggleOnSale, saleCost, submitCallback, updateItem, deleteItem, scale, } = item
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
    const _deleteItem = (e) => {
        deleteItem(e.target.id);
    }

    // abstract scale to a parent var... then.. apply scale to the carosel 
    // navigation needs background color.. then customize buttons 
    // 
    return (
        <Item_
            style={style && style.wrapperStyle}
            scale={scale}
            id={id}
            onContextMenu={e => {
                e.preventDefault();
                toggle(e.target.id);
            }}>
            <Image
                id={id}
                style={style && style.imageStyle}
                scale={scale + 0.2}
                alt='shirt'
                src={imageSrc}
            />
            <Cost
                name='itemCost'
                style={style && style.costStyle}
                id={id + 'ic'}
                onSale={onSale}
                type='number'
                onChange={handleChanges}
                value={payload.itemCost}
            />
            {onSale && (
                <SaleCost
                    id={id + 'sc'}
                    style={style && style.saleCostStyle}
                    type='number'
                    name='saleCost'
                    onChange={handleChanges}
                    value={payload.saleCost}
                />
            )}
            <ItemName
                id={id + 'in'}
                name='itemName'
                onChange={handleChanges}
                style={style && style.nameStyle}
                value={payload.itemName}
            />
            <CloseButton style={style && style.closeButtonStyle} id={id} icon={faTimes} onClick={_deleteItem} />
        </Item_>
    )
}
export default Item;