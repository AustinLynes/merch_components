// Logo
import React from 'react'
import { HEADER, SEARCH_BAR, SEARCH_BUTTON, QUERY, LOGO, TITLE, CART_BUTTON } from './style'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

    const { style, title, logoSrc, ...rest } = props;

    return (
        <HEADER style={style.header}>
            <LOGO style={style.logo} src={logoSrc} />
            <TITLE style={style.title}>{title}</TITLE>
            <SEARCH_BAR style={style.searchBar}>
                <QUERY style={style.query} />
                <SEARCH_BUTTON style={style.searchIcon} icon={faSearch} />
            </SEARCH_BAR>
            <CART_BUTTON style={style.cartIcon} icon={faShoppingCart} />
        </HEADER>
    )
}

export default Header;
