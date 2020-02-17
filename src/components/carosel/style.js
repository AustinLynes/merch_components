import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CAROSEL = styled.div`
        flex-grow:1;
        height:600px;
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

export const BUTTON = styled(FontAwesomeIcon)`
        position:absolute;
        top:50%;
        ${props => props.right ? `right: 20px;` : `left: 20px;`}
        width:30px;
        height:30px;
        padding:1rem;
        text-align:center;
        font-size:2rem;
        color:dodgerblue;
        border:1px solid dodgerblue;
        border-radius:50%;

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