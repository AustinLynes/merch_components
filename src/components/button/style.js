import styled from 'styled-components';

export const BUTTON_WRAPPER = styled.div`
    border:none;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;
    align-items:center;
    align-content:center;
    width:360px;
    border-radius:10px;
    height:120px;
    margin-top:75px;
    font-size:1.8rem;
    background:#000;
    color:white;
    @media (max-width:500px) {
     width:100%;
    margin-top:10px;

    }
    /* any overriding styles will be displayed here  */
    ${props => {
        if (props.style) {
            return `
                padding:${props.style.padding};
                border:${props.style.border};
                width:${props.style.width};
                border-radius:${props.style.borderRadius};
                background-color:${props.style.backgroundColor};
                color:${props.style.color};
            `
        }

    }}

`

export const BUTTON = styled.button`
    border:none;
    flex-grow:1;
    width:80%;
    height:100%;
    border-radius:10px;
    font-size:1.8rem;
    background:#000;
    color:white;
    /* any overriding styles will be displayed here  */
    ${props => {
        if (props.style) {
            return `
                padding:${props.style.padding};
                border:${props.style.border};
                width:${props.style.width};
                border-radius:${props.style.borderRadius};
                background-color:${props.style.backgroundColor};
                color:${props.style.color};
            `
        }

    }}

`
