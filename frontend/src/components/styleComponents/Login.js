import styled  from 'styled-components';
import { colors, fontSize } from './theme';
import { Link } from 'react-router-dom';
const DivLogin = styled.div`    
    display: flex;
    flex-direction: column;
    height: 100vh;
    width : 100%;   
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("https://sonaesierracms-v2.cdnpservers.net/wp-content/uploads/sites/35/2019/01/las-tendencias-de-moda-2019.jpg");    
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 456px) {
        background-size: 456px 800px;
        justify-content: center;
        overflow-x: hidden;
        overflow-y: hidden;
        background: #fff;        
        padding: calc(100vh/2- 100px);
    }    
`
const Container = styled.div`    
    display: flex;
    background-color: #fff;   
    flex-direction:column;
    width: 376px;
    padding: 24px 40px 24px 40px;
    box-shadow: 0 1px 8px 0 rgba(0,0,0,0.2);
    margin-top: 20px;
    @media (max-width: 456px) {
        padding: 15px 20px 10px 20px;
        width: 320px;
        height: 380px;
        font-size: ${fontSize.m};
    }
    @media (max-width: 360px) {
        width: 290px;
    }
`
const List = styled.div`
    display: flex;
    @media (max-width: 456px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const FormLogin = styled.form`
    margin: 18px 0px ;
    display: flex;
    flex-direction: column;
    text-align: start;
    margin-top: 20px;    
`
const Label = styled.label`
    margin: 8px 0px;
    @media(max-width:456px){
        margin: 2px 0px;
    }
`
const Icon = styled.i`
    margin-left: 3px;
    @media(max-width: 456px){
        font-size: ${fontSize.m};

    }
`
const LinkD = styled(Link)`        
    font-weight: bold;
    color: ${props => props.color || "#000" };
    &:hover{
        text-decoration: underline;
        cursor:pointer;
    }
    margin-left: 6px;
    text-decoration: none;
    @media(max-width: 456px){
        font-size: ${fontSize.m};
    }
`
const Img = styled.img`    
    position: absolute;
    top: 0;
    left: 10px;
    border-radius: 50%;
    width: 180px;
    opacity: 100%;
    @media (max-width: 456px){
        width: 130px;
        background-color: transparent;
        border: 3px dashed ${colors.pink};        
        position: relative;
    }
`
const P = styled.p`
    font-size: ${fontSize.l};
    text-align: ${props => props.position || "center"};    
    margin: 10px 0;
    @media(max-width: 456px){
        font-size: ${fontSize.m};
    }
`

export {
    FormLogin,
    Label,
    Icon,
    LinkD,
    List,
    Container,
    DivLogin,
    Img,
    P
}