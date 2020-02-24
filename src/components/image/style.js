import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const IMAGE = styled.img`
        width:100%;
        object-fit:cover;
        height:${props => {
        if (props.size === 'small')
                return '450px;'
        if (props.size === 'medium')
                return '600px;'
        else return '750px'
}};
`

export const IMAGE_PLACEHOLDER = styled.div`
        border:1px solid black;
        width:100%;
        height:${props => {
        if (props.size === 'small')
                return '450px;'
        if (props.size === 'medium')
                return '600px;'
        else return '750px'
}};
`

export const ICON = styled(FontAwesomeIcon)`
padding:10px 15px;
text-align:center;
background:dodgerblue;
color:white;
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