import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

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
  const [gender, setGender] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
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
            <div class ="pageTitle" style={{marginTop:'50px'}}>
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
                <Grid container direction="row" alignItems="center" marginBottom={'20px'}>
                <Grid item xs={12} sm={3}>
                  Id
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="id"
                    required
                    fullWidth
                    id="id"
                    label="Id"
                    autoFocus
                    sx={{width:'300px'}}
                    />
                </Grid>
                    
                    </Grid>
                <Grid container direction="row" alignItems="center" marginBottom={'20px'}>
                <Grid item xs={12} sm={3}>
                  EMAIL
                  </Grid>
                  <Grid item xs={12} sm={7}>
                    <TextField
                    required
                    fullWidth
                    id="email"
                    label="EMAIL"
                    name="email"
                    autoComplete="email"
                    />
                </Grid>
                < Grid item xs = { 12 } sm = {2}>
                  <button className='sendBtn'>발송</button>
                </ Grid >
                </ Grid >
                <Grid container direction="row" alignItems="center" marginBottom={'20px'}>
                <Grid item xs={12} sm={3}>
                  {''}
                  </Grid>
                  <Grid item xs={12} sm={7}>
                    <TextField
                    required
                    fullWidth
                    id="email_authentication"
                    label="전송된 인증번호를 입력해주세요"
                    name="email_authentication"
                    autoComplete="email-authentication-number"
                    />
                </Grid>
                < Grid item xs = { 12 } sm = {2}>
                  <button className='authenBtn'>인증</button>
                </ Grid >
                </ Grid >
                <Grid container direction="row" alignItems="center" marginBottom={'20px'}>
                <Grid item xs={12} sm={3}>
                  Password
                  </Grid>
                  <Grid item xs={12} sm={9}>
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
                <Grid container direction="row" alignItems="center" marginBottom={'20px'}>
                <Grid item xs={12} sm={3}>
                  PW Check
                  </Grid>
                  <Grid item xs={12} sm={9}>
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
                </Grid>
            </div>
            <div className="middleScript">개인정보</div>
            <div className="userData">
                <Grid container spacing={2}>
                <Grid container direction="row" alignItems="center" marginBottom={'20px'}>
                <Grid item xs={12} sm={3}>
                  이름
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <TextField
                    autoComplete="given-name"
                    name="user_name"
                    required
                    fullWidth
                    id="user_name"
                    label="data"
                    autoFocus
                    sx={{width:'300px'}}
                    />
                </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" marginBottom={'20px'} marginLeft={'3px'}>
                <Grid item xs={2}>
                  성별
                  </Grid>
                  {/* <Grid item xs={12} sm={9}> */}
                <Grid>
                  <div className="select">
                
                <input
                  type="radio"
                  id="select"
                  name="gender"
                  value="Male"
                  checked={gender === 'Male'}
                  onChange={handleGenderChange}
                />
                <label htmlFor="select" className={gender === 'Male' ? "selected" : ""}>남성</label>
                
                  <input
                  type="radio"
                  id="select2"
                  name="gender"
                  value="Female"
                  checked={gender === 'Female'}
                  onChange={handleGenderChange}
                />
                <label htmlFor="select2" className={gender === 'Female' ? "selected" : ""}>여성</label>
              </div>
                </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" marginBottom={'20px'}>
                생년월일
                <Grid item xs={12} sm={3} sx={{marginLeft:'35px'}}>
                    <TextField
                    required
                    fullWidth
                    id="birth_year"
                    label=""
                    name="birth_year"
                    />
                </Grid>
                년
                <Grid item xs={12} sm={2}>
                    <TextField
                    required
                    fullWidth
                    id="birth_month"
                    label=""
                    name="birth_month"
                    />
                </Grid>
                월
                <Grid item xs={12} sm={2}>
                    <TextField
                    required
                    fullWidth
                    id="birth_month"
                    label=""
                    name="birth_month"
                    />
                </Grid>
                일
                </Grid>
                <Grid container justifyContent="center" alignItems="center" marginTop={'45px'} paddingLeft={'13px'} marginBottom={'50px'}>
                  직업
                  <Grid item xs={10}>
                  <select name="job" id="" class="jobSelect">
                    <option value="0" selected>현재 직업을 선택하세요</option>
                    <option value="elementary">초등학생</option>
                    <option value="middle">중학생</option>
                    <option value="high">고등학생</option>
                    <option value="college">대학생</option>
                    <option value="professor">교수</option>
                    <option value="worker">직장인</option>
                    <option value="worker">프리랜서</option>
                    <option value="worker">주부</option>
                    <option value="worker">기타</option>
                  </select> 
                  </Grid>
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
              수정완료
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
