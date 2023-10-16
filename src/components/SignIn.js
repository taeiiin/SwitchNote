import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useContext,useState} from 'react';
import { AuthContext } from '../App';
import { json, useNavigate } from "react-router-dom";
import axios from 'axios';

const defaultTheme = createTheme({
    typography: {
        fontSize:12,
        fontFamily: [
            'Noto Sans KR'
        ].join(','),
    },
});

export default function SignInPage() {
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const { isLoggedIn, handleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
            event.preventDefault();
            fetch('/jwt-api-login/login', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({loginId,password}),
            })
                // .then(response=>response.json())
                .then((response)=>{
                    if(response.ok) {
                        return response.text();
                    }else{
                        throw new Error('로그인에 실패했습니다.');
                    }
                })
                .then((data)=>{
                    const jwtToken = data;
                    axios.defaults.headers.common[
                        "Authorization"
                    ] = `Bearer ${jwtToken}`;
                    localStorage.setItem('jwtToken',jwtToken);
                    console.log(jwtToken);
                    handleLogin();
                    navigate("/");
                })
                .catch((error)=>{
                    console.error(error);
                    alert('로그인에 실패했습니다.');

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
                            id="loginId"
                            label="Id"
                            value={loginId}
                            onChange={(e)=>setLoginId(e.target.value)}
                            name="loginId"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <div class="easyLogin">
                        {/* <a href="/"><img src={require('./images/easyLogin.png')} width="350px" alt="Easy-Login" border="0" /></a>                         */}
                        </div>
                        {isLoggedIn ? (
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
                            onClick={handleSubmit}
                        >
                            이 문자열이 보이면 안 되는데
                        </Button>
                        ):(
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
                            onClick={handleSubmit}
                        >
                            Login
                        </Button>
                        )
                        }
                        
                        
                        <Grid container sx={{textAlign:'justify'}}>
                            <Grid item xs>
                                <Link href="/SignUp" 
                                variant="body2" 
                                sx={{color:'#9B9B9B', textDecorationLine:'none', margin:'0',padding:0}}>
                                    회원가입
                                </Link>
                            </Grid>
                            <Grid item >
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
            </div>
        </div> 
    );
}