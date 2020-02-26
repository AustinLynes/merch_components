// Logo
import React, { useState } from 'react'
import { HEADER, SEARCH_BAR, SEARCH_BUTTON, QUERY, LOGO, TITLE, CART_COUNT, CART, ICON, TITLE_WRAPPER, EDIT_ICON, INPUT } from './style'
import { faSearch, faShoppingCart, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

    const { style, title,query, logoSrc, cartCount, handleChangeCallback, ...rest } = props;
    const [edit, setEdit] = useState(false)
    const OnChangeCallback = (e) => {
        e.preventDefault();
        return handleChangeCallback && handleChangeCallback(e);
    }
    return (
        <HEADER style={style && style.wrapperStyle}>
            <LOGO style={style && style.logoStyle} src={logoSrc} />
            <TITLE_WRAPPER>
                {!edit ?
                    <TITLE style={style && style.titleStyle} onChange={OnChangeCallback}>{title && title}</TITLE>
                    : <INPUT value={title} onChange={OnChangeCallback}/>
                }
                <EDIT_ICON icon={faPencilAlt} onClick={() => { setEdit(!edit) }} />
            </TITLE_WRAPPER>
            <SEARCH_BAR style={style && style.searchBarStyle}>
                <QUERY style={style && style.queryStyle} value={query}/>
                <SEARCH_BUTTON style={style && style.searchIconStyle} icon={faSearch}  />
            </SEARCH_BAR>
            <CART style={style && style.cartStyle}>
                <ICON style={style && style.cartIconStyle} icon={faShoppingCart} />
                <CART_COUNT style={style && style.cartCountStyle}>{`${cartCount || 0} items`}</CART_COUNT>
            </CART>
        </HEADER>
    )
}

export default Header;
