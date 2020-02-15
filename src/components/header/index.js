// Logo
import React from 'react'
import { HEADER, SEARCH_BAR, SEARCH_BUTTON, QUERY, LOGO, TITLE, CART_BUTTON } from './style'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

    const { title,logoSrc, ...rest } = props;

    return (
        <HEADER>
            <LOGO src={logoSrc}/>
            <TITLE>{title}</TITLE>
            <SEARCH_BAR>
                <QUERY />
                <SEARCH_BUTTON icon={faSearch} />
            </SEARCH_BAR>
            <CART_BUTTON icon={faShoppingCart}/>
        </HEADER>
    )
}

export default Header;
