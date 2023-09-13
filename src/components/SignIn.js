import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
// import MainPage from './Page/MainPage.js';
// import SignUpPage from './Page/SignUpPage.js';
// import FindIdPwPage from './Page/FindIdPwPage.js';

// import{Link} from 'react-router-doms'
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {/*{'Copyright © '}*/}
            {/*<Link color="inherit" href="https://naver.com/">*/}
            {/*    Your Website*/}
            {/*</Link>{' '}*/}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme({
    typography: {
        fontSize:12,
        fontFamily: [
            'Noto Sans KR'
        ].join(','),
    },
});

export default function SignInPage() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('id'),
            password: data.get('password'),
        });
    };

    return (
        <div>
        {/* <ThemeProvider theme={defaultTheme}> */}
            <div>{/* <Container component="main" maxWidth="xs"> */}
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        "& fieldset": {borderTopColor:'white',
                                        borderRightColor:'white',
                                        borderLeftColor:'white',
                                        borderBottomColor:'black',
                                        borderRadius:0}
                    }}
                >
                    <div class = "pageDiv">
                        <div class ="pageTitle" >
                            로그인
                        </div>
                        <div class ="pageAddScript" >
                            당신의 작업은 소중하니까
                        </div>
                    </div>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="id"
                            label="Id"
                            name="id"
                            autoComplete="id"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <div class="easyLogin">
                        <a href="/"><img src={require('./images/easyLogin.png')} width="350px" alt="Easy-Login" border="0" /></a>                        
                        </div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, 
                                backgroundColor: '#4982F7',
                                fontFamily: 'Noto Sans KR',
                                borderRadius:2,
                                boxShadow:5,
                                textDecorationStyle:'bold'
                            }}
                        >
                            Login
                        </Button>
                        
                        <Grid container>
                            <Grid item xs>
                                <Link href="/SignUp" 
                                variant="body2" 
                                sx={{color:'#9B9B9B', textDecorationLine:'none'}}>
                                    회원가입
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/FindIdPw" 
                                variant="body2"
                                sx={{color:'#9B9B9B', textDecorationLine:'none'}}
                                >
                                    {"아이디 / 비밀번호 찾기"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {/*<Copyright sx={{ mt: 8, mb: 4 }} />*/}
            </div>{/* </Container> */}
        {/* </ThemeProvider> */}
        {/* <Router>
                    <Routes>
                        <Route path="/" component={MainPage} exact/>
                        <Route path="/signUp" element={SignUpPage} exact/>
                        <Route path="/findIdPw" element={FindIdPwPage} exact/>
                    </Routes>
                </Router> */}

        </div> 
    );
}