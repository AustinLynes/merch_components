import styled from "styled-components"

export const BUTTON = styled.button`
    padding:1rem;
    border:none;
    width:20%;
    border-radius:10px;
    ${props => {
        if (props.style) {
            return `
                padding:${props.style.padding};
                border:${props.style.border};
                width:${props.style.width}
                border-radius:${props.style.borderRadius};
            `
        }

    }}

`