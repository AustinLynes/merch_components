import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const LINKBAR = styled.div`
    width:100%;
    background:green;
    ${props => {
        if (props.style) {

        }
    }}
`

export const LINK = styled(FontAwesomeIcon)`
  width:30%;
  padding:1rem;
  color:black;
  ${props => {
        if (props.style) {

        }
    }}

`