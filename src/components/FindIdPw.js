import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

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

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme({
    typography: {
        fontSize:12,
        fontFamily: [
            'Noto Sans KR'
        ].join(','),
    },
});

export default function FindIdPwPage() {
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
                            아이디 / 비밀번호 찾기
                        </div>
                        <div class ="pageAddScript" >
                            당신의 작업은 소중하니까
                        </div>
                    </div>
                    
                    <table className='findDiv'><tr>
                    <div className='findContent'>
                        <td><div className='middleScript'>아이디 찾기</div>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <Grid container spacing={2}>
                    <Grid container direction="row" alignItems="center">
                        <Grid item xs={12} sm={9}>
                            <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="EMAIL"
                            label="EMAIL"
                            name="EMAIL"
                            autoComplete="EMAIL"
                            autoFocus
                        />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <button className='sendBtn'>발송</button>
                        </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center">
                        <Grid item xs={12} sm={9}>
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
                        </Grid>
                        < Grid item xs = { 12 } sm = { 3 }>
                        <button className='authenBtn'>인증</button>
                        </ Grid >
                        </Grid>
                        </Grid>
                    </Box></td>
                    </div>
                    <td><div className='horizontalLine'></div></td>
                    <td><div className='findContent'>
                    <div className='middleScript'>비밀번호 찾기</div>
                    {/* <Grid container spacing={2}> */}
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <Grid>
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
                        </Grid>
                        <Grid container direction="row" alignItems="center">
                        <Grid item xs={12} sm={9}>
                            <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="EMAIL"
                            type="email"
                            id="email"
                        />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <button className='sendBtn'>발송</button>
                        </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center">
                            <Grid item xs={12} sm={9}>
                            <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="email_authentication"
                            label="전송된 인증번호를 입력해주세요"
                            type="email_authentication"
                            id="email_authentication"
                        /> 
                        </Grid>
                        < Grid item xs = { 12 } sm = { 3 }>
                        <button className='authenBtn'>인증</button>
                        </ Grid >
                        </Grid>
                    </Box>
                    {/* </Grid> */}
                    </div></td>
                    </tr></table>
                </Box>
                
                {/*<Copyright sx={{ mt: 8, mb: 4 }} />*/}
            </div>{/* </Container> */}
        {/* </ThemeProvider> */}
        </div> 
    );
}