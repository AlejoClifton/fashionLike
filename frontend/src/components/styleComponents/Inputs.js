import styled from 'styled-components';

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0 10px;
    font-size: 16px;
    box-sizing: border-box;
    &:focus {
        outline: none;
        border: 1px solid #000;
    }
    @media (max-width: 456px){
        padding: 0 10px;
        margin: 0 0 12px 0;
        font-size: 14px;
        height: 38px;
    }
    &:last-of-type {
        margin:0 0 10px 0;
    }
`;
