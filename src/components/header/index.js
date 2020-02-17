// Logo
import React from 'react'
import { HEADER, SEARCH_BAR, SEARCH_BUTTON, QUERY, LOGO, TITLE, CART_BUTTON } from './style'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

    const { style, title, logoSrc, ...rest } = props;
    const {headerStyle, logoStyle, titleStyle, searchBarStyle, queryStyle, searchIconStyle, cartIconStyle } = style

    return (
        <HEADER style={headerStyle}>
            <LOGO style={logoStyle} src={logoSrc} />
            <TITLE style={title}>{title}</TITLE>
            <SEARCH_BAR style={searchBarStyle}>
                <QUERY style={queryStyle} />
                <SEARCH_BUTTON style={searchIconStyle} icon={faSearch} />
            </SEARCH_BAR>
            <CART_BUTTON style={cartIconStyle} icon={faShoppingCart} />
        </HEADER>
    )
}

export default Header;
