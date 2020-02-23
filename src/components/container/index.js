import styled from 'styled-components';

const Container = styled.div`
    border:1px solid blue;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;
    width:100%;
    padding:${props => props.padding || "15px 0"};
    transition:all 1s ease-in-out;
`

export default Container

// anomlypanda1245@gmail.com