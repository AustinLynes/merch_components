import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HEADER = styled.div`
    display:flex;
    flex-flow:row wrap;
    width:100%;
    padding:1rem;
    background:#333;
`
export const TITLE = styled.h1`
    width:100%;
    color:white;
`
export const SEARCH_BAR = styled.div`
    background:white;
    padding:5px;
    border:1px solid grey;
    border-radius:10px;
`
export const QUERY = styled.input`
    border:none;
    font-size:1.4rem;
`
export const SEARCH_BUTTON = styled(FontAwesomeIcon)`
    color: grey;
    font-size:1.4rem;
 `