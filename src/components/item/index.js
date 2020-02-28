import React, { useState, useEffect, useRef } from 'react';
import { WRAPPER, CLOSE_BUTTON, IMAGE, PLUS_ICON, INPUT_WRAPPER, EDIT_ICON, INPUT, PLACEHOLDER, SALE_FLAG, TEXT } from './style'
import { faTimes, faPlus, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = (props) => {
    const { style, item, onChangeCallback, onClickCallback, edit, ...rest } = props;
    const [editable, setEditable] = useState(edit);
    const OnChangeCallback = (e) => {
        e.preventDefault();
        onChangeCallback && onChangeCallback(e);
    }
    const OnClickCallback = (e) => {
        e.preventDefault();
        setEditable(!editable)
        onClickCallback && onClickCallback(e);
    }

    if (!item) {
        return (
            <PLACEHOLDER onClick={OnClickCallback} item_is_null={true} >
                <PLUS_ICON style={style && style.plusIconSyle} icon={faPlus} />
                <p style={{ width: '100%', textAlign: 'center' }}>Add an Item</p>
            </PLACEHOLDER>
        )
    } else {
        return (
            <WRAPPER style={style && style.wrapperStyle} onSale={item && item.onSale} id={item && item.id}>
                <EDIT_ICON icon={faPencilAlt} onClick={OnClickCallback} />
                <INPUT_WRAPPER>
                    {editable ?
                        <INPUT
                            id={item && item.id + '_item'}
                            name='itemName'
                            onChange={OnChangeCallback}
                            style={style && style.nameStyle}
                            value={item && item.itemName}
                        /> : <TEXT isName={true}>{item && item.itemName}</TEXT>
                    }
                </INPUT_WRAPPER>

                {editable && item.imageSrc ?
                    (
                        <IMAGE
                            id={item && item.id + '_img'}
                            style={style && style.imageStyle}
                            alt='shirt'
                            src={item && item.imageSrc}
                        />
                    ) : (
                        <PLACEHOLDER>
                            <PLUS_ICON style={style && style.plusIconSyle} icon={faPlus} />
                            <p style={{ width: '100%', textAlign: 'center' }}>Tap to Edit</p>
                        </PLACEHOLDER>
                    )
                }
                <INPUT_WRAPPER >
                    {editable ?
                        <INPUT
                            name='itemDescription'
                            style={style && style.descriptionStyle}
                            id={item && item.id + '_description'}
                            value={item && item.itemDescription}
                            onChange={OnChangeCallback}
                        /> : <TEXT isDescp={true}>{item && item.itemDescription}</TEXT>
                    }

                </INPUT_WRAPPER>
                <INPUT_WRAPPER >
                    {
                        editable ?
                            <INPUT
                                name='itemCost'
                                style={style && style.costStyle}
                                id={item && item.id + '_cost'}
                                onSale={item && item.onSale}
                                value={item && item.itemCost}
                                type='number'
                                onChange={OnChangeCallback}

                            />
                            : <TEXT isCost={true}>{item && item.itemCost}</TEXT>
                    }

                </INPUT_WRAPPER>

                {item && item.onSale && (
                    <INPUT_WRAPPER>
                        {
                            editable ?
                                <INPUT
                                    id={item && item.id + '_sale_cost'}
                                    name='saleCost'
                                    style={style && style.saleCostStyle}
                                    value={item && item.saleCost}
                                    onChange={OnChangeCallback}
                                    type='number'
                                />
                                : <TEXT>{item && item.saleCost}</TEXT>
                        }
                    </INPUT_WRAPPER>
                )}
                {item && item.onSale && (<SALE_FLAG >SALE</SALE_FLAG>)}
                <CLOSE_BUTTON style={style && style.closeButtonStyle} id={item && item.id + '_close_btn'} icon={faTimes} />
            </WRAPPER>
        )
    }
}
export default Item;