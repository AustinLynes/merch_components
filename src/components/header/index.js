// Logo
import React from 'react'
import { HEADER, SEARCH_BAR, SEARCH_BUTTON, QUERY, LOGO, TITLE, CART_BUTTON } from './style'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

    const { style, title, logoSrc, ...rest } = props;
    const { _header, _logo, _title, _searchBar, _query, _searchIcon, _cartIcon } = style
    return (
        <HEADER style={_header}>
            <LOGO style={_logo} src={logoSrc} />
            <TITLE style={_title}>{title}</TITLE>
            <SEARCH_BAR style={_searchBar}>
                <QUERY style={_query} />
                <SEARCH_BUTTON style={_searchIcon} icon={faSearch} />
            </SEARCH_BAR>
            <CART_BUTTON style={_cartIcon} icon={faShoppingCart} />
        </HEADER>
    )
}

export default Header;
