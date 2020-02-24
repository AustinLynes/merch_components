import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HEADER = styled.div`
    box-sizing:border-box;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-between;
    padding:0 10px;
    align-items:center;
    width:100%;
    height:200px;
    max-height:200px;
    background:#303030;
    ${props => {
        if (props.style) {
            return `
                box-sizing:border-box;
                display:${props.style.display};
                flex-flow:${props.style.flexDirection} wrap;
                justify-content:${props.style.justifyContent};
                width:${props.style.width};
                padding:${props.style.padding};
                max-height:${props.style.maxHeight};
                background:${props.style.background};
                `
        }
    }}
   
`
export const LOGO = styled.img`
width:375px;
height:150px;
object-fit:contain;
${props => {
        if (props.style) {
            return `
            width:${props.style.width};
            object-fit:contain;
                `
        }
    }}
 
`
export const TITLE = styled.input`
width:700px;
color:white;
margin:0;
background:transparent;
border:none;
font-size:3rem;
text-align:center;
${props => {
        if (props.style) {
            return `
            width:${props.style.width};
            color:${props.style.color};
            background:${props.style.background};
            margin:${props.style.margin};
            border:${props.style.border};
            font-size:${props.style.fontSize};
                `
        }
    }}
   
`
export const SEARCH_BAR = styled.div`
width:413px;
height:69px;
display:flex;
flex-flow:row wrap;
align-items:center;
border-radius:10px;
border:none;
background:white;
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
        }
    }}

`
export const QUERY = styled.input`
padding-left:5px;
border-radius:10px;
width:80%;
border:none;
font-size:1.4rem;
${props => {
        if (props.style) {
            return `
            padding:${props.style.padding};
            border:${props.style.border};
            border-radius:${props.style.bordeRadius};
            width:${props.style.width};
            font-size:${props.style.fontSize};
                `
        }
    }}
  
`

export const SEARCH_BUTTON = styled(FontAwesomeIcon)`
color: grey;
width:5%;
font-size:1.4rem;
${props => {
        if (props.style) {
            return `
            color: ${props.style.color};
            width: ${props.style.width};
            padding:${props.style.padding};
            font-size:${props.style.fontSize};
                `
        }
    }}
   
 `



export const CART = styled.div`
display:flex;
width: 100px;
flex-flow:row wrap;
justify-content:center;
align-items:center;
height:fit-content;
 ${props => {
        if (props.style) {
            return `
            color: ${props.style.color};
            width: ${props.style.width};
            padding:${props.style.padding};
            font-size:${props.style.fontSize};
                `
        }
    }}
`
export const ICON = styled(FontAwesomeIcon)`
        text-align:center;
        color:dodgerblue;
        font-size:3rem;
        width:100px;
        ${props => {
        if (props.style) return `
                        position:${props.style.position};
                        bottom:${props.style.bottomPos};
                        top:${props.style.topPos};
                        right:${props.style.rightPos};
                        left:${props.style.leftPos};
                        padding:${props.style.padding};
                        width:${props.style.width};
                        font-size:${props.style.fontSize};
                        color: black;  // this is black as a fallback... 
                        -webkit-text-fill-color: ${props.style.textFillColor}; 
                        -webkit-text-stroke-width: ${props.style.strokeWidth};
                        -webkit-text-stroke-color: ${props.style.strokeColor};
                        text-align:${props.style.textAlign};
                        border:${props.style.border};
                        background:${props.style.backgroundColor};
                        margin:${props.style.margin};
                          `
    }}
`
export const CART_COUNT = styled.p`
    color:white;
    font-size:1.4rem;
    width:100%;
    ${props => {
        if (props.style) {
            return `
            color: ${props.style.color};
            width: ${props.style.width};
            padding:${props.style.padding};
            font-size:${props.style.fontSize};
                `
        }
    }}
 `