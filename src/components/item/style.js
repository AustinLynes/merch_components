import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const WRAPPER = styled.div`
position:relative;
display:flex;
flex-flow:row wrap;
justify-content:center;
height: 642px;
max-height: 642px;
border:2px solid black;
${props => {
        if (props.style) return `
            position:${props.style.position};
            display:${props.style.display};
            flex-flow:row wrap;
            flex-grow:${props.style.flexGrow};
            margin:${props.style.margin};
            height: ${props.style.height};
            max-width:${props.style.maxWidth};
            max-height:${props.style.maxHeight};
            border-radius:${props.style.borderRadius};
            padding:${props.style.padding};
            box-shadow: ${props.style.boxShadow};
    `
    }}
`

export const INPUT_WRAPPER = styled.div`
width:70%;
border:none;
background:transparent;
height:fit-content;
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
text-align:center;
border-radius:10px;
border:1px solid lightgrey;
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
export const EDIT_ICON = styled(FontAwesomeIcon)`
color:lightgrey;
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

export const IMAGE = styled.img`
max-width:90%;
height:500px;
object-fit:contain;
margin:0 auto;
${props => {
        if (props.style) return `
            max-width:${props.style.maxWidth};
            max-height:${props.style.maxHeight};
            object-fit:${props.style.objectFit};
            margin:${props.style.margin};
            padding:${props.style.padding};
         `
    }}
`
// plus icon needs to be turned into its own card.. 
export const PLACEHOLDER = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid lightgrey;
    border-radius:10px;
    width:70%;
    height:500px;
    padding:1rem;
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


export const PLUS_ICON = styled(FontAwesomeIcon)`
display:block;
background:dodgerblue;
padding:2rem;
border-radius:50%;
color:white;
font-size:3rem;
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
export const CLOSE_BUTTON = styled(FontAwesomeIcon)`
position:absolute;
top: 5px;
right:5px;
border-radius:50%;
font-size:1.4rem;
padding:5px;
width:20px;
height:20px;
text-align:center;
border:none;
color: grey;
text-align:center;
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