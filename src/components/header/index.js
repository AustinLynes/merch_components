// Logo
import React, { useState } from 'react'
import { HEADER, SEARCH_BAR, SEARCH_BUTTON, QUERY, LOGO, TITLE, CART_COUNT, CART, ICON, TITLE_WRAPPER } from './style'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

    const { style, title, logo, query, cartCount, handleTitleChange, handleSearchChange, ...rest } = props;
    return (
        <HEADER data-testid='header-wrapper' style={style && style.wrapperStyle}>
            {logo && < LOGO data-testid='logo' style={style && style.logoStyle} src={logo} />}


            <TITLE_WRAPPER data-testid='title-wrapper'>
                <TITLE data-testid='title-text' draggable={false} style={style && style.titleStyle} onChange={(e) => { e.stopPropagation(); handleTitleChange(); }} value={title}></TITLE>
            </TITLE_WRAPPER>
            <SEARCH_BAR data-testid='searchbar-wrapper' style={style && style.searchBarStyle}>
                <QUERY draggable={false} data-testid='query box' style={style && style.queryStyle} onChange={(e) => { handleSearchChange }} value={query} />
                <SEARCH_BUTTON data-testid='search button' style={style && style.searchIconStyle} icon={faSearch} />
            </SEARCH_BAR>
            <CART data-testid='cart-icon-wrapper' style={style && style.cartStyle}>
                <ICON data-testid='cart icon' style={style && style.cartIconStyle} icon={faShoppingCart} />
                <CART_COUNT data-testid='cart count text' style={style && style.cartCountStyle}>{`${cartCount || 0} items`}</CART_COUNT>
            </CART>
        </HEADER>
    )
}

export default Header;
