import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const defaultTheme = createTheme();

export default function SignUpPage() {
  const [loginId, setLoginId]=React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordCheck, setPasswordCheck] = React.useState('');
  const [nickname, setNickname] = React.useState('');
  const [birthYear, setBirthYear ] = React.useState('');
  const [birthMonth, setBirthMonth ] = React.useState('');
  const [birthDay, setBirthDay] = React.useState('');
  const [job, setJob] = React.useState('');
  const [showPolicyPopup, setShowPolicyPopup] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!agreePolicy || !agreeInfoCollection){
      alert('필수 항목에 동의해야 합니다.');
      return;
    }
    
    if (!loginId || !email || !password || !passwordCheck || !nickname) {
      alert('필수 정보를 입력하지 않았습니다.');
      return;
    }
    
    fetch('/jwt-api-login/join',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({nickname,email,loginId,password,passwordCheck,birthYear,birthMonth,birthDay,job,gender,agreePolicy:agreePolicy ? 'Y' : 'N',agreeInfoCollection:agreeInfoCollection ? 'Y' : 'N',agreePromotionEmails:agreePromotionEmails ? 'Y' : 'N'}),
    })
      .then((response)=>response.text())
      .then((data)=>{
        console.log(data);
        if (data === "로그인 아이디가 중복됩니다.") {
          alert("로그인 아이디가 중복됩니다.");
        } else if (data === "이메일이 중복됩니다.") {
          alert("이메일이 중복됩니다.");
        } else if (data === "닉네임이 중복됩니다.") {
          alert("닉네임이 중복됩니다.");
        } else if (data === "비밀번호가 일치하지 않습니다.") {
          alert("비밀번호가 일치하지 않습니다.");
        } else if (data === "회원가입 성공") {
          alert("정상적으로 회원등록이 되었습니다!");
          navigate('/SignIn');
        }
      })
      .catch((error)=>{
        console.error(error);
      });



  };
  const handleId = (event) =>{
    event.preventDefault();
  fetch('/jwt-api-login/check-id', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      loginId: loginId,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.available) {
        alert('사용할 수 없는 아이디입니다. 다른 아이디를 입력해주세요.');
      } else {
        alert('사용 가능한 아이디입니다.');
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }
  const handleEmail = (event) =>{
    event.preventDefault();
  fetch('/jwt-api-login/check-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.available) {
        alert('중복된 이메일입니다. 다른 이메일을 입력해주세요.');
      } else {
        alert('사용 가능한 이메일입니다.');
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }
  const handlePasswordCheck = (event) => {
    event.preventDefault();
  
    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    } else {
      alert('비밀번호가 확인되었습니다.')
    }
  };
  const [gender, setGender] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const [agreePolicy, setAgreePolicy] = useState(false);
  const [agreeInfoCollection, setAgreeInfoCollection] = useState(false);
  const [agreePromotionEmails, setAgreePromotionEmails] = useState(false);
  
  const handleAgreePolicyChange = (event) => {
    setAgreePolicy(event.target.checked);
    setAgreeInfoCollection(event.target.checked);
    setAgreePromotionEmails(event.target.checked);
  };

  const handleAgreePolicyClick = () => {
    showAgreePolicyPopup();
  };
  
  const handleAgreeInfoCollectionClick = () => {
    showAgreeInfoCollection();
  };
  
  const handleAgreePromotionEmailsClick = () => {
    showAgreePromotionEmails();
  };

  // 각 약관 팝업 표시 함수
  const showAgreePolicyPopup = () => {
    alert(`
    제 1조 (목적)
    이 약관은 서비스 이용자가 Switch Note 플랫폼을 이용함에 있어 필요한 규정과 권리, 의무, 책임 등 기본적인 사항을 정하는 것을 목적으로 합니다.
    
    제 2조 (약관의 효력 및 변경)
    1. 본 약관은 서비스를 이용하고자 하는 모든 사용자에게 적용됩니다.
    2. Switch Note는 필요한 경우 언제든지 본 약관을 변경할 수 있으며, 변경된 약관은 Switch Note 웹사이트나 애플리케이션 내에서 공지함으로써 효력을 발생합니다.
    
    제 3조 (서비스의 제공 및 중단)
    1. Switch Note는 회원에게 지속적으로 안정적인 서비스를 제공하기 위해 최선의 노력을 다합니다.
    2. 다만, 시스템 점검, 보수, 장애 발생 등 부득이한 사유로 인해 일시적으로 서비스 제공이 중단될 수 있습니다.
    
    기타 상세한 내용은 해당 웹사이트나 애플리케이션에서 확인하실 수 있습니다.
    `);
  };
  
  const showAgreeInfoCollection = () => {
    alert(`
    제 1조 (개인 정보 수집 항목)
    1. Switch Note는 서비스 제공을 위해 다음과 같은 개인 정보를 수집합니다:
       - 이름, 이메일 주소, 연락처 등 회원 가입 시 제공된 정보
       - 서비스 이용 기록, 접속 로그 등의 기술적인 정보
    
    제 2조 (개인 정보 수집 및 이용 목적)
    1. Switch Note는 다음과 같은 목적으로 개인 정보를 수집 및 이용합니다:
       - 회원 가입 및 관리
       - 서비스 제공 및 운영
       - 공지사항 전달 등 마케팅 활동
    
    제 3조 (개인 정보 보유 기간)
    1. Switch Note는 회원 탈퇴 시나 서비스 종료 요청 시까지 개인 정보를 보유합니다.
    2. 단, 법령에 따라 보관이 필요한 경우 해당 법령에서 정한 기간 동안 개인 정보를 보관할 수 있습니다.
    
    기타 상세한 내용은 해당 웹사이트나 애플리케이션에서 확인하실 수 있습니다.
    `);
  };
  
  const showAgreePromotionEmails = () => {
    alert(`
    제 1조 (이벤트 등 프로모션 메일 수신 동의)
    1. Switch Note는 회원에게 이벤트, 할인 혜택, 새로운 서비스 소식 등을 전달하기 위해 프로모션 메일을 발송할 수 있습니다.
    2. 회원은 이벤트 등 프로모션 메일 수신에 대한 동의 여부를 선택할 수 있으며, 선택 사항입니다.
    
    제 2조 (동의 철회)
    1. 회원은 언제든지 이벤트 등 프로모션 메일 수신에 대한 동의를 철회할 수 있습니다.
    2. 동의 철회 시 더 이상 해당 내용을 포함한 프로모션 메일을 받지 않게 됩니다.
    
    기타 상세한 내용은 해당 웹사이트나 애플리케이션에서 확인하실 수 있습니다.
    `);
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
                회원가입
            </div>
            <div class ="pageAddScript" >
                편리함. 그 이상의 능력에 빠질 준비
            </div>
        </div>
        <div className='signUpDataAll'>
          <Box component="form"  onSubmit={handleSubmit} noValidate
          sx={{ mt: 3, alignItems: 'center',
                        "& fieldset": {borderTopColor:'white',
                                        borderRightColor:'white',
                                        borderLeftColor:'white',
                                        borderBottomColor:'black',
                                        borderRadius:0
                                        } }}>
            <div className="setData">
                <Grid container spacing={2}>
                <Grid item xs={10}>
                    <TextField
                    autoComplete="username"
                    name="loginId"
                    required
                    fullWidth
                    id="loginId"
                    label="ID"
                    value={loginId}
                    onChange={(e)=>setLoginId(e.target.value)}
                    autoFocus
                    />
                </Grid>
                <button className='authenBtn' type="submit" onClick={handleId}>확인</button>
                <Grid item xs={10}>
                    <TextField
                    required
                    fullWidth
                    id="email"
                    label="EMAIL"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </Grid>
                <button className='authenBtn' type="submit" onClick={handleEmail}>확인</button>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type='password'
                    autoComplete="new-password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </Grid>
                <Grid item xs={10}>
                    <TextField
                    required
                    fullWidth
                    name="passwordCheck"
                    label="Password Check"
                    type="password"
                    id="passwordCheck"
                    value={passwordCheck}
                    onChange={(e)=>setPasswordCheck(e.target.value)}
                    />
                </Grid>
                <button className='authenBtn' type="submit" onClick={handlePasswordCheck}>확인</button>

                </Grid>
            </div>
            <div className="middleScript">개인정보</div>
            <div className="userData">
                <Grid container spacing={2}>
                <Grid item xs={2} >이름</Grid>
                <Grid item xs={10}>
                    <TextField
                    autoComplete="given-name"
                    name="nickname"
                    required
                    fullWidth
                    id="nickname"
                    label=""
                    autoFocus
                    type="nickname"
                    value={nickname}
                    onChange={(e)=>setNickname(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2} >성별</Grid>
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
                <div>
                  
                </div>
                <Grid container justifyContent="center" alignItems="center">
                  생년월일
                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      fullWidth
                      id="birth_year"
                      label=""
                      name="birth_year"
                      value={birthYear}
                      onChange={(e)=>setBirthYear(e.target.value)}
                    />
                    
                  </Grid>년
                  <Grid item xs={12} sm={2}>
                    <TextField
                      required
                      fullWidth
                      id="birth_month"
                      label=""
                      name="birth_month"
                      value={birthMonth}
                      onChange={(e)=>setBirthMonth(e.target.value)}
                    />
                    
                  </Grid>월
                  <Grid item xs={12} sm={2}>
                    <TextField
                      required
                      fullWidth
                      id="birth_day"
                      label=""
                      name="birth_day"
                      value={birthDay}
                      onChange={(e)=>setBirthDay(e.target.value)}
                    />
                    
                  </Grid>일 
                </Grid>
                <Grid container justifyContent="center" alignItems="center" marginTop={'45px'} paddingLeft={'13px'} marginBottom={'50px'}>
                  직업
                  <Grid item xs={10}>
                  <select name="job" id="" class="jobSelect" onChange={(e) => setJob(e.target.value)}>
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
            <div className='middleScript'>이용약관</div>
            <div className='policy'>
                <div className='policyContent'>
                  <div class="custom-checkbox">
                    <input type="checkbox" id="agreePolicy" checked={agreePolicy} onChange={(e) => setAgreePolicy(e.target.checked)}/>
                    <label for="agreePolicy">이용약관 동의 (필수)</label>
                    <button className='sendBtn' onClick={showAgreePolicyPopup}>확인</button>
                  </div>
                </div>
                <div className='policyContent'>
                  <div class="custom-checkbox">
                    <input type='checkbox' id='agreeInfoCollection' checked={agreeInfoCollection} onChange={(e) => setAgreeInfoCollection(e.target.checked)}/>
                    <label for='agreeInfoCollection'>개인 정보 수집 및 이용 동의 (필수)</label>
                    <button className='sendBtn' onClick={showAgreeInfoCollection}>확인</button>
                  </div>
                </div>
                <div className='policyContent'>
                  <div class='custom-checkbox'>
                    <input type='checkbox' id='agreePromotionEmails' checked={agreePromotionEmails} onChange={(e) => setAgreePromotionEmails(e.target.checked)}/>
                    <label for='agreePromotionEmails'>이벤트 등 프로모션 메일 수신 동의 (선택)</label>
                    <button className='sendBtn' onClick={showAgreePromotionEmails}>확인</button>
                  </div>
                  
            </div>
            
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
