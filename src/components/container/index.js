import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-flow:row wrap;
    justify-content:center;
    width:100%;
    padding:${props => props.padding || "15px 0"};
    transition:all 1s ease-in-out;
`

export default Container