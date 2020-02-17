import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HEADER = styled.div`
    ${props => {
        if (props.style) {
            return `
            box-sizing:border-box;
            display:${props.header.display};
            flex-flow:row wrap;
            justify-content:${props.header.justifyContent};
            width:${props.header.width};
            padding:${props.header.padding};
            max-height:${props.header.maxHeight};
            background:${props.header.background};
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
            width:${props.logo.width};
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
            width:${props.title.width};
            color:${props.title.color};
            margin:${props.title.margin};
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
            background:${props.searchBar.background};
            display:${props.searchBar.display};
            flex-flow:${props.searchBar.flexDirection} wrap;
            align-items:${props.searchBar.alignItems};
            width:${props.searchBar.width};
            border:${props.searchBar.border};
            border-radius:${props.searchBar.borderRadius};
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
            padding:${props.query.padding};
            border:${props.query.border};
            border-radius:${props.query.bordeRadius};
            width:${props.query.width};
            font-size:${props.query.fontSize};
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
            color: ${props.searchIcon.color};
            width: ${props.searchIcon.width};
            padding:${props.searchIcon.padding};
            font-size:${props.searchIcon.fontSize};
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
            color:${props.cartIcon.color};
            font-size:${props.cartIcon.fontSize};
                `
        } else {
            return `
            color:dodgerblue;
            font-size:2.3rem;
            `
        }
    }}
   
 `
