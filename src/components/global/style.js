import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const BUTTON = styled.button`
    /* this is the default styling of the button */
    padding:1rem;
    border:none;
    width:20%;
    border-radius:10px;
    background:transparent;
    box-shadow:2px 4px 4px rgba(0,0,0,.2), -2px -4px 4px rgba(255,255,255,.2); 
    /* any overriding styles will be displayed here  */
    ${props => {
        if (props.style) {
            return `
                padding:${props.style.padding};
                border:${props.style.border};
                width:${props.style.width};
                border-radius:${props.style.borderRadius};
                background-color:${props.style.backgroundColor};
                color:${props.style.color};
            `
        }

    }}

`

export const ICON = styled(FontAwesomeIcon)`
        width:30px;
        height:30px;
        padding:1rem;
        text-align:center;
        font-size:2rem;
        color:dodgerblue;
        border-radius:50%;
        border:1px solid dodgerblue;

        ${props => {
        if (props.isCarousel) return `
                    position:absolute;
                    top:50%;
                    ${props => props.right ? `right: 20px;` : `left: 20px;`}
                `
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

export const LINK = styled.button`
    background:transparent;
    border:none;
    color:white;
    font-size:1.2rem;
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

export const INPUT = styled.input`
background:transparent;
font-size:1.2rem;
color: black;
/* -webkit-text-fill-color: white; 
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: black; */
text-align:center;
${props => {
        if (props.isCost) return `
            text-decoration: ${props => props.onSale ? "line-through" : "none"};
        `
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