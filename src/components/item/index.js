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
            <PLACEHOLDER item_is_null={true} >
                <PLUS_ICON style={style && style.plusIconSyle} icon={faPlus} />
                <p style={{ width: '100%', textAlign: 'center' }}>Add an Item</p>
            </PLACEHOLDER>
        )
    } else {
        return (
            <WRAPPER style={style && style.wrapperStyle} onClick={OnClickCallback} onSale={item && item.onSale} id={item && item.id}>
                <TEXT isName={true}>{item && item.itemName}</TEXT>

                {item && item.imageSrc ?
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
                <TEXT isDescp={true}>{item && item.itemDescription}</TEXT>
                <TEXT isCost={true}>{item && item.itemCost}</TEXT>

                {item && item.onSale && (
                    <TEXT>{item && item.saleCost}</TEXT>
                )}
                {item && item.onSale && (<SALE_FLAG >SALE</SALE_FLAG>)}

                <CLOSE_BUTTON style={style && style.closeButtonStyle} id={item && item.id + '_close_btn'} icon={faTimes} />
            </WRAPPER>
        )
    }
}
export default Item;