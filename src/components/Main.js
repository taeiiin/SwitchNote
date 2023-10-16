import * as React from 'react';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

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
            <div className='a'>
            {/* <div id="nav">
                <Link to='/'><img src={require('./logo.png')} alt="logo" /></Link>
                <ul>
                <li><a href="" className="nav1">WORKSPACE</a></li>
                <li><Link to='/Templates' className='nav1'>TEMPLATE</Link></li>
                <li><Link to="/Guide" className="nav1">GUIDE</Link></li>
                <li><Link to="/TxtInput" className="nav1">MYPAGE</Link></li>
                <li><Link to='/PPTSel' className="logoutB">logout</Link></li>
                </ul> 
            </div> */}
                <div className='titleLogo'>
                    <div className='logoImage'>
                        <img src={require('./images/logoBlue.png')} width='500px'/>
                        <p class='tip'>Tip. 색이 뚜렷한 명사를 사용할수록 추천 디자인은 풍성해집니다 </p>
                    </div>

                </div>
                <div className='convertToDiv'>
                    {/*div 클릭하면 발표자료 만드는 페이지로 이동 (우선 PPTUpload 페이지로 이동하도록 해놨어용~ 수정하기!)*/}
                    <Link to="./TextEditor" style={{ textDecoration: 'none' }}>
                        <div className='convertToPresent'>
                            <div className='leftPre'>
                                <img src={require('./images/lineWhite.png')} width='500px'/>
                                <p className='MaintoSub'style={{color :'white'}}> 텍스트만 붙여 넣으면 프레젠테이션 자료 완성</p>
                                <p className='MaintoSub'style={{color :'white'}}> 내용에 맞는 디자인 추천까지</p>
                            </div>
                            <div className='rightPre'>
                                <p className='MainconvertTo' style={{color :'#D0D0D0'}}>Convert to</p>
                                <p className='MaintoText' style={{color :'white'}}>Presentation</p>
                            </div>
                        </div>
                    </Link>

                    {/*div 클릭하면 PPTUpload 페이지로 이동*/}
                    <Link to="./PPTUpload" style={{ textDecoration: 'none' }}>
                        <div className='convertToScript'>
                            <div className='leftScr'>
                                <div>
                                    {/* 영어 전용 폰트로 바꾸기 */}
                                    <p className='MainconvertTo' style={{color :'#ACABAB'}}>Convert to</p> 
                                    <p className='MaintoText' style={{color :'#4982F7'}}>Script</p>
                                </div>
                            </div>
                            <div className='rightScr'>
                                <p className='MaintoSub' style={{color :'#4982F7'}}> 프레젠테이션만 붙여넣으면 발표 대본 완성</p>
                                <p className='MaintoSub' style={{color :'#4982F7'}}> 한국어 맞춤으로 자연스러운 흐름</p>
                                <img src={require('./images/lineBlue.png')} width='500px'/>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

