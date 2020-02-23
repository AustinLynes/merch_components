import React, { useState, useEffect, useRef } from 'react';
import { WRAPPER, CLOSE_BUTTON, IMAGE, PLUS_ICON, INPUT_WRAPPER, EDIT_ICON, INPUT, PLACEHOLDER } from './style'
import { faTimes, faPlus, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = (props) => {
    const { style, item, ...rest } = props;

    if (!item) {
        return (<PLACEHOLDER item_is_null={true} >
            <PLUS_ICON style={style && style.plusIconSyle} icon={faPlus} />
            <p style={{ width: '100%', textAlign: 'center' }}>Add an Item</p>
        </PLACEHOLDER>
        )
    } else {
        { console.log('imma turtle') }
        return (
            <WRAPPER style={style && style.wrapperStyle} id={item && item.id}>
                <INPUT_WRAPPER>
                    <INPUT
                        id={item && item.id + '_item'}
                        name='itemName'
                        style={style && style.nameStyle}
                        value={item && item.itemName} />
                    <EDIT_ICON icon={faPencilAlt} />
                </INPUT_WRAPPER>

                {item && item.imageSrc ?
                    (<IMAGE
                        id={item && item.id + '_img'} 
                        style={style && style.imageStyle}
                        alt='shirt'
                        src={imageSrc}
                    />) : (
                        <PLACEHOLDER>
                            <PLUS_ICON style={style && style.plusIconSyle} icon={faPlus} />
                            <p style={{ width: '100%', textAlign: 'center' }}>tap to edit</p>
                        </PLACEHOLDER>)
                }
                <INPUT_WRAPPER >
                    <INPUT
                        name='itemDescription'
                        style={style && style.descriptionStyle}
                        id={item && item.id + '_description'}
                        value={item && item.itemDescription}
                        isDescp={true}
                    />
                    <EDIT_ICON icon={faPencilAlt} />

                </INPUT_WRAPPER>
                <INPUT_WRAPPER >
                    <INPUT
                        name='itemCost'
                        style={style && style.costStyle}
                        id={item && item.id + '_cost'}
                        onSale={item && item.onSale}
                        value={item && item.itemCost}
                        type='number'
                        isCost={true}
                    />
                    <EDIT_ICON icon={faPencilAlt} />

                </INPUT_WRAPPER>

                {item && item.onSale && (
                    <INPUT_WRAPPER>
                        <INPUT
                            id={item && item.id + '_sale_cost'}
                            name='saleCost'
                            style={style && style.saleCostStyle}
                            value={item && item.saleCost}
                            type='number'
                        />
                        <EDIT_ICON icon={faPencilAlt} />
                    </INPUT_WRAPPER>
                )}

                <CLOSE_BUTTON style={style && style.closeButtonStyle} id={item && item.id + '_close_btn'} icon={faTimes} />
            </WRAPPER>
        )
    }
}
export default Item;