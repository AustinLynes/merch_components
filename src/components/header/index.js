// Header
// Logo
// Title
// Search Bar
// Cart Button
import React from 'react'
import { HEADER } from './style'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

    const { title, ...rest } = props;


    return (
        <HEADER>
            <h2>{title}</h2>
            <div><input /><faSearch /></div>
        </HEADER>
    )
}

export default Header;
