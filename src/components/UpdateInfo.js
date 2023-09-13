import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://naver.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function UpdateInfoPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div>
        {/* <ThemeProvider theme={defaultTheme}> */}
      {/* <div> */}
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <div class = "pageDiv">
            <div class ="pageTitle" >
                회원정보 수정
            </div>
            <div class ="pageAddScript" >
                개인정보는 철저하게
            </div>
        </div>
        <div className='signUpDataAll'>
          <Box component="form" noValidate onSubmit={handleSubmit} 
          sx={{ mt: 3, alignItems: 'center',
                        "& fieldset": {borderTopColor:'white',
                                        borderRightColor:'white',
                                        borderLeftColor:'white',
                                        borderBottomColor:'black',
                                        borderRadius:0
                                        } }}>
            <div className="setData">
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                    autoComplete="given-name"
                    name="id"
                    required
                    fullWidth
                    id="id"
                    label="Id"
                    autoFocus
                    />
                </Grid>
                <Grid item xs={10}>
                    <TextField
                    required
                    fullWidth
                    id="email"
                    label="EMAIL"
                    name="email"
                    autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="email_authentication"
                    label="전송된 인증번호를 입력해주세요"
                    name="email_authentication"
                    autoComplete="email-authentication-number"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    autoComplete="password"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    name="password_check"
                    label="Password Check"
                    type="password_check"
                    id="password_check"
                    />
                </Grid>
                
                </Grid>
            </div>
            <div className="middleScript">개인정보</div>
            <div className="userData">
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                    autoComplete="given-name"
                    name="user_name"
                    required
                    fullWidth
                    id="user_name"
                    label="이름"
                    autoFocus
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="sex"
                    label="성별"
                    name="sex"
                    />
                </Grid>
                생년월일
                <Grid item xs={12} sm={3}>
                    <TextField
                    required
                    fullWidth
                    id="birth_year"
                    label=""
                    name="birth_year"
                    />
                </Grid>
                년
                <Grid item xs={12} sm={3}>
                    <TextField
                    required
                    fullWidth
                    id="birth_month"
                    label=""
                    name="birth_month"
                    />
                </Grid>
                월
                <Grid item xs={12} sm={3}>
                    <TextField
                    required
                    fullWidth
                    id="birth_month"
                    label=""
                    name="birth_month"
                    />
                </Grid>
                일
                직업
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    autoComplete="password"
                    />
                </Grid>
                </Grid>
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
                textDecorationStyle:'bold',
                marginBottom: 50
            }}
            >
              회원가입
            </Button>
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  계정이 이미 있으신가요? 로그인하러 가기
                </Link>
              </Grid>
            </Grid> */}
            </Box>
          </div>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      {/* </div> */}
      </Container>
    </div>
  );
}
