import {useSelector} from 'react-redux';
import {RootState} from '../store/index.tsx'
import {authActions} from '../store/authSlice.ts';
import {Button, Container, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

function Home(){
    const userData = useSelector((state: RootState) => state.authenticator)
    console.log(userData)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleNavigate = () => {
        navigate('/');
    };
    dispatch(authActions.logout())
    return(
        <>
            <Container>
                <Typography>Página home de {userData.userName} y tengo el rol de {userData.userRol}</Typography>
                <Button color='primary' onClick={handleNavigate}>Salir</Button>
            </Container>
        </>
    )
}
export default Home