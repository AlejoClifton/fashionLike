import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors,fontSize } from './theme';

export const ButtonLink = styled(Link)`
    display: flex;
    width: 100%;
    background-color: ${props => props.color ||  colors.pink};
    padding: 10px;
    color: ${props=> props.text || "#fff"};
    border: 1px solid #ccc;
    cursor: pointer;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: ${fontSize.l};
    outline: none;
    transition: all 0.3s ease;    
    text-decoration: none;    
    &:hover {
        background-color: ${colors.pink};
        color:#fff;
    }
    @media (max-width : 456px){
        font-size: ${fontSize.m};
        height: 37px;
        padding: 5px;        
        border-radius: 42px;        
    }
`;

export const Button = styled.button`
    display: flex;
    width: 100%;
    background-color: ${props => props.color ||  colors.pink};
    padding: 10px;
    color: ${props=> props.text || "#fff"};
    border: 1px solid #ccc;
    cursor: pointer;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: ${fontSize.l};
    outline: none;
    transition: all 0.3s ease;    
    text-decoration: none;    
    &:hover {
        background-color: ${colors.pink};
        color:#fff;
    }
    @media (max-width : 456px){
        font-size: ${fontSize.m};
        height: 37px;
        padding: 5px;        
        border-radius: 42px;        
    }
`;
