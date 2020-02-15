import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HEADER = styled.div`
    width:100%;
    padding:1rem;
    background:#333;
`
export const SEARCH_BAR = styled.div`
    padding:5px;
    border:2px solid black;
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