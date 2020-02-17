import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HEADER = styled.div`
    ${props => {
        if (props.style) {
            return `
            box-sizing:border-box;
            display:${props._header.display};
            flex-flow:row wrap;
            justify-content:${props._header.justifyContent};
            width:${props._header.width};
            padding:${props._header.padding};
            max-height:${props._header.maxHeight};
            background:${props._header.background};
                `
        } else {
            return `
            box-sizing:border-box;
            display:flex;
            flex-flow:row wrap;
            justify-content:space-between;
            width:100%;
            padding:1rem;
            max-height:125px;
            background:#333;
            `
        }
    }}
   
`
export const LOGO = styled.img`
${props => {
        if (props.style) {
            return `
            width:${props._logo.width};
            object-fit:contain;
                `
        } else {
            return `
            width:10%;
            object-fit:contain;
            `
        }
    }}
 
`
export const TITLE = styled.h2`
${props => {
        if (props.style) {
            return `
            width:${props._title.width};
            color:${props._title.color};
            margin:${props._title.margin};
                `
        } else {
            return `
            width:20%;
            color:white;
            margin:0;
            `
        }
    }}
   
`
export const SEARCH_BAR = styled.div`
${props => {
        if (props.style) {
            return `
            background:${props._searchBar.background};
            display:${props._searchBar.display};
            flex-flow:${props._searchBar.flexDirection} wrap;
            align-items:${props._searchBar.alignItems};
            width:${props._searchBar.width};
            border:${props._searchBar.border};
            border-radius:${props._searchBar.borderRadius};
                `
        } else {
            return `
            background:white;
            display:flex;
            flex-flow:row wrap;
            align-items:center;
            width:15%;
            border:1px solid grey;
            border-radius:10px;
            `
        }
    }}

`
export const QUERY = styled.input`
${props => {
        if (props.style) {
            return `
            padding:${props._query.padding};
            border:${props._query.border};
            border-radius:${props._query.bordeRadius};
            width:${props._query.width};
            font-size:${props._query.fontSize};
                `
        } else {
            return `
            padding-left:5px;
            border-radius:10px;
            width:80%;
            border:none;
            font-size:1.4rem;
            `
        }
    }}
  
`

export const SEARCH_BUTTON = styled(FontAwesomeIcon)`
${props => {
        if (props.style) {
            return `
            color: ${props._searchIcon.color};
            width: ${props._searchIcon.width};
            padding:${props._searchIcon.padding};
            font-size:${props._searchIcon.fontSize};
                `
        } else {
            return `
            color: grey;
            width:5%;
            padding:10px;
             font-size:1.4rem;
            `
        }
    }}
   
 `

export const CART_BUTTON = styled(FontAwesomeIcon)`
${props => {
        if (props.style) {
            return `
            color:${props._cartIcon.color};
            font-size:${props._cartIcon.fontSize};
                `
        } else {
            return `
            color:dodgerblue;
            font-size:2.3rem;
            `
        }
    }}
   
 `
