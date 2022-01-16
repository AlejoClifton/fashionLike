import { Input } from '../../components/styleComponents/Inputs';
import { Button } from '../../components/styleComponents/Buttons';
import { DivLogin, Container, List, FormLogin,Label,LinkD, Icon, Img, P} from "../../components/styleComponents/Login"
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { colors } from '../../components/styleComponents/theme';
import { useState} from "react"
import { loginFetch } from "../../store/slices/users"
import { useSelector, useDispatch } from "react-redux"

export const Login = () => {
    const dispatch = useDispatch()    
    const {user: userLogged } = useSelector(state => state.user)
    const [user, setUser ] = useState({
        email: '',
        password: ''
    })
    
    const {email, password} = user
    
    const handleChange =(e)=>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(loginFetch(email, password))        
    }
    return (
        <DivLogin>
            { JSON.stringify(userLogged) }
            <Img src="https://res.cloudinary.com/dhlbsrd5k/image/upload/v1641610498/logo_dja4rw.png" alt="logo"/>
            <Container>
                <List>
                    <Button  color="#272727">Ingrese con  <Icon><FaFacebookF fontSize="2.0em"/></Icon> </Button>
                    <Button  color="#272727">Ingrese con <Icon><FaInstagram fontSize="2.2em" /></Icon></Button>
                </List>
                <FormLogin onSubmit={handleSubmit}>
                    <Label>Ingrese correo electrónico</Label>
                    <Input type="text" name="email" value={user.email} onChange={handleChange}/>
                    <Label>Ingrese contraseña</Label>
                    <Input type="password" name="password" value={user.password} onChange={handleChange}/>
                    <Button text={colors.black} color={colors.yellow}>Iniciar sesión</Button>
                </FormLogin>
                <LinkD to={''}>¿Olvidó su contraseña?</LinkD>
                <P position="start">¿No tienes cuenta?
                    <LinkD color={colors.pink}  to={'register'}>Registrate</LinkD>
                </P>
            </Container>
        </DivLogin>
    )
}
