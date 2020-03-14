import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CAROSEL = styled.div`
        height:768px;
        width:1440px;
        position:relative;
        display:flex;
        flex-flow:row wrap;
        ${props => {
                if (props.style) return `
                position:${props.style.position};
                flex-grow:${props.style.flexGrow};
                height:${props.style.height};
                display:${props.style.display};
                flex-flow:${props.style.flexDirection} wrap;    
                `
        }}
`

export const PLACEHOLDER_CAROSEL = styled.div`
        height:768px;
        width:1440px;
        display:flex;
        flex-flow:row wrap;
        justify-content:space-between;
        align-items:center;
        @media (max-width:500px) {
        justify-content:center;
                
        }
        ${props => {
                if (props.style) return `
                position:${props.style.position};
                flex-grow:${props.style.flexGrow};
                height:${props.style.height};
                display:${props.style.display};
                flex-flow:${props.style.flexDirection} wrap;    
                `
        }}
`

export const IMAGE = styled.img`
    width:50%;
    max-height:600px;
    margin:0 auto;
    object-fit:contain ;
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
                object-fit:${props.style.objectFit};
                border:${props.style.border};
                margin:${props.style.margin};
    `
        }}
`


export const ICON = styled(FontAwesomeIcon)`
        padding:10px 15px;
        font-size:2rem;
        text-align:center;
        color:dodgerblue;
        border:1px solid dodgerblue;
        border-radius:50%;
        ${props => {
                if (props.isplus) return `
                        background:dodgerblue;
                        color:white;
                        align-self:center;
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
export const PLACEHOLDER = styled.div`
        width:60%;
        margin:20px;
        height:500px;
        border:1px solid lightgrey;
        display:flex;
        flex-flow:row wrap;
        justify-content:center;
        align-content:center;
        align-items:center;
        border-radius:10px;
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
                text-align:${props.style.textAlign};
                border:${props.style.border};
                background:${props.style.backgroundColor};
                margin:${props.style.margin};
        `
        }}
`

