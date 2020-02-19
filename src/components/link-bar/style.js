import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const LINKBAR = styled.div`
    width:100%;
    display:flex;
    flex-flow:row wrap;
    background:green;
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

export const LINKCARD = styled.div`
  width:30%;
  background:lightgray;
  ${props => {
        if (props.style) {

        }
    }}

`