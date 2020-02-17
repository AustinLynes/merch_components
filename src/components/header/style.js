import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HEADER = styled.div`
    ${props => {
        if (props.style) {
            return `
            box-sizing:border-box;
            display:${props.style.display};
            flex-flow:row wrap;
            justify-content:${props.style.justifyContent};
            width:${props.style.width};
            padding:${props.style.padding};
            max-height:${props.style.maxHeight};
            background:${props.style.background};
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
            width:${props.style.width};
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
            width:${props.style.width};
            color:${props.style.color};
            margin:${props.style.margin};
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
            background:${props.style.background};
            display:${props.style.display};
            flex-flow:${props.style.flexDirection} wrap;
            align-items:${props.style.alignItems};
            width:${props.style.width};
            border:${props.style.border};
            border-radius:${props.style.borderRadius};
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
            padding:${props.style.padding};
            border:${props.style.border};
            border-radius:${props.style.bordeRadius};
            width:${props.style.width};
            font-size:${props.style.fontSize};
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
            color: ${props.style.color};
            width: ${props.style.width};
            padding:${props.style.padding};
            font-size:${props.style.fontSize};
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
            color:${props.style.color};
            font-size:${props.style.fontSize};
                `
        } else {
            return `
            color:dodgerblue;
            font-size:2.3rem;
            `
        }
    }}
   
 `
