import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    background: ${props => props.theme.header.bg};
`;

export const Logo = styled.div`
    font-size: 30px;
`;
