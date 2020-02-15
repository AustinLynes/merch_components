// Header
// Logo
// Title
// Search Bar
// Cart Button
import React from 'react'
import { HEADER, SEARCH_BAR, SEARCH_BUTTON, QUERY, Title } from './style'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = (props) => {

    const { title, ...rest } = props;

    return (
        <HEADER>
            <Title>{title}</Title>
            <SEARCH_BAR>
                <QUERY />
                <SEARCH_BUTTON icon={faSearch} />
            </SEARCH_BAR>
        </HEADER>
    )
}

export default Header;
