import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HEADER = styled.div`
    box-sizing:border-box;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-between;
    width:100%;
    padding:1rem;
    background:#333;
`
export const TITLE = styled.h2`
    width:20%;
    color:white;
    margin:0;
`
export const SEARCH_BAR = styled.div`
    background:white;
    display:flex;
    flex-flow:row wrap;
    align-items:center;
    width:15%;
    border:1px solid grey;
    border-radius:10px;
`
export const QUERY = styled.input`
    padding-left:5px;
    border-radius:10px;
    width:80%;
    border:none;
    font-size:1.4rem;
`
export const LOGO = styled.img`
    width:20%;
    object-fit:contain;
`

export const SEARCH_BUTTON = styled(FontAwesomeIcon)`
    color: grey;
    width:5%;
    padding:10px;
    font-size:1.4rem;
 `

export const CART_BUTTON = styled(FontAwesomeIcon)`
    color:dodgerblue;
    font-size:2.3rem;
 `
