// Logo
import React from 'react'
import { HEADER, SEARCH_BAR, SEARCH_BUTTON, QUERY, LOGO, TITLE } from './style'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ICON } from '../global/style'
const Header = (props) => {

    const { style, title, logoSrc, ...rest } = props;

    return (
        <HEADER style={style && style.headerStyle}>
            <LOGO style={style && style.logoStyle} src={logoSrc} />
            <TITLE style={style && style.titleStyle} placeholder={title} />
            <SEARCH_BAR style={style && style.searchBarStyle}>
                <QUERY style={style && style.queryStyle} />
                <SEARCH_BUTTON style={style && style.searchIconStyle} icon={faSearch} />
            </SEARCH_BAR>
            <ICON style={style && style.cartIconStyle} icon={faShoppingCart} />
        </HEADER>
    )
}

export default Header;
