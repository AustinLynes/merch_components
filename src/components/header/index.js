// Logo
import React from 'react'
import { HEADER, SEARCH_BAR, SEARCH_BUTTON, QUERY, LOGO, TITLE, CART_COUNT, CART, ICON  } from './style'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

    const { style, title, logoSrc, cartCount, ...rest } = props;

    return (
        <HEADER style={style && style.wrapperStyle}>
            <LOGO style={style && style.logoStyle} src={logoSrc} />
            <TITLE style={style && style.titleStyle} placeholder={title} />
            <SEARCH_BAR style={style && style.searchBarStyle}>
                <QUERY style={style && style.queryStyle} />
                <SEARCH_BUTTON style={style && style.searchIconStyle} icon={faSearch} />
            </SEARCH_BAR>
            <CART style={style && style.cartStyle}>
                <ICON style={style && style.cartIconStyle} icon={faShoppingCart} />
                <CART_COUNT style={style && style.cartCountStyle}>{`${cartCount || 0} items`}</CART_COUNT>
            </CART>
        </HEADER>
    )
}

export default Header;
