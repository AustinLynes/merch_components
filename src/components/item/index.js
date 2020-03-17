import React from 'react';
import { WRAPPER, CLOSE_BUTTON, IMAGE, PLUS_ICON, PLACEHOLDER, SALE_FLAG, TEXT } from './style'
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'

const Item = (props) => {
    const { style, item, onClickCallback, ...rest } = props;

    const OnClickCallback = (e) => {
        e.preventDefault();
        onClickCallback && onClickCallback(e);
    }

    if (!item) {
        return (
            <PLACEHOLDER data-testid='placeholder' item_is_null={true} >
                <PLUS_ICON data-testid='plus-icon' style={style && style.plusIconSyle} icon={faPlus} />
                <p data-testid='text' style={{ width: '100%', textAlign: 'center' }}>Add an Item</p>
            </PLACEHOLDER>
        )
    } else {
        return (
            <WRAPPER data-testid='wrapper' style={style && style.wrapperStyle} onClick={OnClickCallback} onsale={item && item.onSale} id={item && item.id}>
                <TEXT data-testid='item-name' isName={true}>{item && item.itemName}</TEXT>

                {item && item.imageSrc ?
                    (
                        <IMAGE
                            data-testid='item-image'
                            id={item && item.id + '_img'}
                            style={style && style.imageStyle}
                            alt='shirt'
                            src={item && item.imageSrc}
                        />
                    ) : (
                        <PLACEHOLDER data-testid='placeholder'>
                            {/* <PLUS_ICON data-testid='plus-icon' style={style && style.plusIconSyle} icon={faPlus} /> */}
                            <p data-testid='text' style={{ width: '100%', textAlign: 'center' }}>Tap to Edit</p>
                        </PLACEHOLDER>
                    )
                }
                <TEXT data-testid='item-description' isDescp={true}>{item && item.itemDescription}</TEXT>
                <TEXT data-testid='item-cost' isCost={true}>{item && item.itemCost}</TEXT>

                {item && item.onSale && (
                    <TEXT data-testid='item-sale-cost'>{item && item.saleCost}</TEXT>
                )}
                {item && item.onSale && (<SALE_FLAG data-testid='item-sale-flag'>SALE</SALE_FLAG>)}

            </WRAPPER>
        )
    }
}
export default Item;