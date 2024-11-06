import {Alert, Box, Button, Container, Typography} from "@mui/material";
import {useState} from "react";
import Grid from "@mui/material/Grid2";
import {TextField} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import LockIcon from '@mui/icons-material/Lock';
import {useNavigate} from 'react-router-dom';
import * as React from "react";

import {useDispatch} from 'react-redux'
import { authActions } from "../store/authSlice.ts";

function Login() {
    const dispatch = useDispatch()
    const [data, setData] = useState({user: '', password: '', open: ''});
    const navigate = useNavigate();
    const bduser = 'laura';
    const bdpass = '1234';

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(data.user == bduser && data.password == bdpass) {
            setData({
                ...data,
                open: 'success'
            })
            navigate('/Home');
            dispatch(authActions.login({
                name:data.user,
                rol:'administrador'
            }))
        }else{
            setData({
                ...data,
                open: 'error'
            })
        }
        console.log("Usuario:" + data.user)
        console.log("Contraseña:" + data.password)
    }

    const handleUser = (e:React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            user: e.target.value
        })
    }

    const handlePass = (e:React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            password: e.target.value
        })
    }


    return (
        <>
            <Container>
                <Box component='form' onSubmit={handleSubmit}>
                    <Typography variant='h4' sx={{mt: 2, mb: 2}}>Sistema de acceso</Typography>
                    <LockIcon></LockIcon>
                    <Grid container spacing={2}>
                        <Grid size={{md: 8, xs: 8, lg: 8}}>
                            <TextField
                                required
                                label="Usuario"
                                variant='outlined'
                                fullWidth
                                value={data.user}
                                onChange={handleUser}
                            />
                        </Grid>
                        <Grid size={{md: 8, xs: 8, lg: 8}}>
                            <TextField
                                required
                                label="Contraseña"
                                variant='outlined'
                                fullWidth
                                value={data.password}
                                onChange={handlePass}
                                type={'password'}
                            />
                        </Grid>

                        <Grid size={{md: 8, xs: 8, lg: 8}}>
                            <Button type='submit' variant='contained'>Acceder</Button>
                        </Grid>

                    </Grid>

                </Box>
                {data.open == '' ? <></> : data.open == 'success' ? <Alert icon={<CheckIcon fontSize="inherit" />} severity='success'>Acceso concedido</Alert>
                : <Alert icon={<CheckIcon fontSize="inherit" />} severity='error'>Acceso denegado. Usuario / contraseña incorrecto</Alert>}
            <footer>
            </footer>

            </Container>
        </>
    )
}

export default Login