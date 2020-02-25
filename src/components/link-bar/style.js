import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const LINKBAR = styled.div`
    box-sizing:border-box;
    width:100%;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-between;
    background:green;
    padding:2rem;
    ${props => {
        if (props.style) {

        }
    }}
`

export const ICON = styled(FontAwesomeIcon)`
        padding:1rem;
        text-align:center;
        color:black;
        font-size:3rem;
        border-radius:50%;
        width:100%; 
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
    padding:1rem;
    width:100%;
    color:black;
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
  padding:1rem;
  width:30%;
  background:lightgray;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;

  ${props => {
        if (props.style) {

        }
    }}

`