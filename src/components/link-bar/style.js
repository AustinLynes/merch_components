import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const LINKBAR = styled.div`
    position:relative;
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

export const LINK = styled.p`
  padding:1rem;
  color:black;
  ${props => {
        if (props.style) {

        }
    }}

`

export const PREVIEW = styled.iframe`
  max-width:100%;
  max-height:100%;
  position:absolute;
  top:0;
  right:0;
  ${props => {
        if (props.style) {

        }
    }}

`

export const LINKCARD = styled.div`
  width:30%;
  background:lightgray;
  ${props => {
        if (props.style) {

        }
    }}

`