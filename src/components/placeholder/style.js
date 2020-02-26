import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TEXT = styled.p`
 width: '100%'; 
 color: 'black';
  text-align: 'center'; 
  ${props => {
        if (props.style) return `
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

// plus icon needs to be turned into its own card.. 
export const PLACEHOLDER = styled.div`
    display:flex;
    flex-flow:row wrap;
    justify-content:center;
    align-content:center;
    border:1px solid lightgrey;
    border-radius:10px;
    width:60%;
    height:460px;
    padding:1rem;
    ${props => {
        if (props.item_is_null) return `
            width:15%;
            margin:20px;
            margin-top:110px;
            height:460px;
            border:1px solid dodgerblue;
            &:active{
                opacity:.7;
                box-shadow:6px 6px 5px rgba(0,0,0,.3);
            }
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
            text-align:${props.style.textAlign};
            border:${props.style.border};
            background:${props.style.backgroundColor};
            margin:${props.style.margin};
    `
    }}
`

export const PLUS_ICON = styled(FontAwesomeIcon)`
background:dodgerblue;
padding:1rem;
border-radius:50%;
color:white;
font-size:1.8rem;
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