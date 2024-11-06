import {useSelector} from 'react-redux';
import {RootState} from '../store/index.tsx'
import {authActions} from '../store/authSlice.ts';
import {Box, Button, Container, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import Grid from '@mui/material/Grid2';

function Home() {
    const userData = useSelector((state: RootState) => state.authenticator)
    console.log(userData)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleNavigate = () => {
        navigate('/');
    };
    dispatch(authActions.logout())
    return (
        <>
            <Container role={'main'}
                       sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
                <Box sx={{width: '100%', maxWidth: '100%'}}>
                    <Grid container spacing={2} sx={{justifyContent: 'center', alignItems: 'center'}}>
                        <Grid size={{md: 8, xs: 8, lg: 8}}>
                            <Typography sx={{mb: 1, textAlign: 'center'}} variant='h3'>Página home de {userData.userName} y tengo el
                                rol de {userData.userRol}</Typography>
                        </Grid>
                        <Grid size={{md: 8, xs: 8, lg: 8}}>
                            <Button color='primary' variant='contained' onClick={handleNavigate}>Salir</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Home