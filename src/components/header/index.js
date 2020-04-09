// Logo
import React, { useState } from 'react'
import { HEADER, SEARCH_BAR, SEARCH_BUTTON, QUERY, LOGO, TITLE, CART_COUNT, CART, ICON, TITLE_WRAPPER } from './style'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

    const { style, title, query, cartCount, ...rest } = props;
    const [logo, setLogo] = useState(null);
    const setLogoSrc = (e) => {
        console.log(e.target.files[0])
        window.setLocalStorage('logo', e.target.files[0].name)
        console.log(logo)
    }
    return (
        <HEADER data-testid='header-wrapper' style={style && style.wrapperStyle}>
            {logo != null
                ?
                <LOGO data-testid='logo' style={style && style.logoStyle} src={window.localStorage.getItem('logo')} />
                :
                <input type='file' onChange={setLogoSrc} value={logo} />
            }


            <TITLE_WRAPPER data-testid='title-wrapper'>
                <TITLE data-testid='title-text' style={style && style.titleStyle} value={title && title}></TITLE>
            </TITLE_WRAPPER>
            <SEARCH_BAR draggable={false} data-testid='searchbar-wrapper' style={style && style.searchBarStyle}>
                <QUERY data-testid='query box' style={style && style.queryStyle} value={query} />
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
