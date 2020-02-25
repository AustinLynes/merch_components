import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const LINKBAR = styled.div`
    box-sizing:border-box;
    width:100%;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;
    background:#333;
    height:600px;
    align-content:center;
    align-items:center;
    ${props => {
        if (props.style) {

        }
    }}
`

export const ICON = styled(FontAwesomeIcon)`
        text-align:center;
        color:black;
        font-size:10rem;
        border-radius:50%;
        width:100%; 
        padding:1rem;
        margin-top:1rem;
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

export const LINK = styled.p`
    /* position:absolute;
    top:0;
    right:0;
    width:100%;
    height:100%;
    z-index:10; */
    width:100%;
    color: black;   
    font-size:2rem;
    -webkit-text-fill-color:white; 
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  ${props => {
        if (props.style) {

        }
    }}

`

export const PREVIEW = styled.img`
  border:none;
  border-radius:10px;
  width:100%;
  overflow:hidden;
  pointer-events: none;
  filter: blur(2px);
  -webkit-filter: blur(2px);
  top:0;
  left:0;
  ${props => {
        if (props.style) {

        }
    }}

`

export const LINKCARD = styled.div`
  /* padding:1rem; */
  border-radius:10px;
  background:white;
  display:flex;
  flex-flow:row wrap;
    justify-content:center;
    align-content:center;
    align-items:center;
    height:353px;
    width:347px;
    margin:0 10px;
  ${props => {
        if (props.style) {

        }
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