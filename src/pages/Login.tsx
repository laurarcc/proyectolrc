import {Button, Container, Typography} from "@mui/material";

function Login() {
    return (
        <>
            <div>
                <Container>
                    <center>
                        <Typography variant='h1' color='primary'>Página Login de Laura Rodríguez Castellano</Typography>
                        <Typography variant='h2' color='primary'>Título 2</Typography>
                        <Typography variant='h3' color='primary'>Título 3</Typography>
                        <Typography variant='subtitle1' color='primary'>Subtítulo 1</Typography>
                        <Typography variant='body1' color='primary'>Cuerpo de la página web</Typography>
                        <Typography variant='caption' color='secondary'>Letra pequeñita</Typography>
                        <footer>
                            <br/>
                            <Button variant='text' color='info'>Botón para información</Button>
                            <br/>
                            <Button variant='contained' color='error'>Botón de error</Button>
                            <br/>
                            <Button variant='outlined' color='warning'>Botón de cuidado</Button>
                            <br/>
                            <Button variant='contained' disabled>Botón deshabilitado</Button>

                        </footer>

                    </center>
                </Container>
            </div>

        </>
    )
}

export default Login