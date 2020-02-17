import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Item_ = styled.div`
flex-grow:1;
display:flex;
position:relative;
margin:0 10px;
max-width:50%;
height: 300px;
max-height:${props => props.scale ? `${300 * props.scale}px` : '300px'};
flex-flow:row wrap;
border-radius:10px;
padding:4rem 0;
box-shadow: 5px 5px 8px rgba(127,127,127,.3), 
                -5px -5px 8px rgba(255,255,255,1);

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

export const Image = styled.img`
max-width:70%;
max-height:${props => props.scale ? `${300 * props.scale}px` : '300px'};
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

export const ItemName = styled.input`
position:absolute;
bottom:0;
left:0px;
padding:5px 5px 0;
margin-bottom:2px;
margin-left:12px;
width:40%;
background:transparent;
font-size:2.2rem;
color: black;
-webkit-text-fill-color: white; 
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: black;
text-align:center;
border:none;
border-bottom:2px solid rgba(0,0,0,.2);
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

export const Cost = styled.input`
position:absolute;
bottom:0;
right:0px;
padding:5px;
width:120px;
background:transparent;
font-size:2.2rem;
color: black;
-webkit-text-fill-color: white; 
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: black;
text-align:center;
text-decoration-color:darkslategrey;
text-decoration: ${props => props.onSale ? "line-through" : "none"};
border:none;
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
export const SaleCost = styled.input`
position:absolute;
top:0;
left:0px;
padding:5px;
width:100px;
padding:10px;
border-radius:10px;
box-shadow:2px 4px 5px rgba(0,0,0,.1);
background:transparent;
background:yellow;
font-size:2rem;
color: black;
-webkit-text-fill-color: white; 
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: black;
text-align:center;
border:none;
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
export const CloseButton = styled(FontAwesomeIcon)`
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
color: black;
-webkit-text-fill-color: #595959; 
-webkit-text-stroke-width: 0.5px;
-webkit-text-stroke-color: white;
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