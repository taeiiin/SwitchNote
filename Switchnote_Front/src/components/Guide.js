//가이드 페이지
//import Table from 'react-bootstrap/Table';
import React from 'react';

function Guide() {
    return (
    <div>
        <div id="GuideIntro">
            <div>Guide
                <p>편리하면서도 똑똑하게</p>
            </div>
        </div>
        <div id='Guides'>
            <div className='Guiding'>
                Text to PPT
                <div id="TtoP">
                    <ul>
                        <li><img src={require('./images/TtoP1.png')} alt="TtoP1" id="GuideImg"/>
                            <div id='GuideTitle'>01. 내용 작성
                                <div id='GuideTxt'>생성할 PPT의 내용을 박스 안에 작성하세요.<br/>색이 뚜렷한 명사를 사용할 경우 컬러차트가 다양해집니다.</div>
                            </div>
                        </li>
                        <li><img src={require('./images/TtoP2.png')} alt="TtoP2" id="GuideImg"/>
                        <div id='GuideTitle'>02. 디자인 선택
                            <div id='GuideTxt'>텍스트에서 추출한 바탕으로 디자인이 생성됩니다.<br/>다른 디자인을 보고 싶다면 추가 생성을 클릭합니다.</div>
                        </div>
                        </li>
                        <li><img src={require('./images/TtoP3.png')} alt="TtoP3" id="GuideImg"/>
                            <div id='GuideTitle'>03. 수정
                                <div id='GuideTxt'>생성된 PPT의 내용이나 서식을 수정할 수 있습니다.<br/>수정이 끝나면 상단의 FINISH 버튼을 클릭해 작업을 완료합니다. 왼쪽 점 모양 버튼을 이용해 저장, 여러 확장자 형식으로 다운로드 등이 가능합니다.</div>
                            </div>
                        </li>
                        <li><img src={require('./images/TtoP4.png')} alt="TtoP4" id="GuideImg"/>
                            <div id='GuideTitle'>04. 확인
                                <div id='GuideTxt'>생성된 PPT는 사용자의 워크스페이스에 저장됩니다.<br/>워크스페이스에 들어가 PPT를 수정 및 다운로드, 삭제할 수 있습니다.</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='Guiding'>
                PPT to Script
                <div id="TtoP">
                    <ul>
                        <li><img src={require('./images/PtoS1.png')} alt="PtoS1" id="GuideImg"/>
                            <div id='GuideTitle'>01. PPT 선택
                                <div id='GuideTxt'>생성할 발표대본의 내용을 구성하기 위해 발표자료인 PPT를 업로드하세요. 또는 개인 워크스페이스에 생성된 PPT 중에서 선택 가능합니다.</div>
                            </div>
                        </li>
                        <li><img src={require('./images/PtoS2.png')} alt="PtoS2" id="GuideImg"/>
                        <div id='GuideTitle'>02. 대본 생성
                            <div id='GuideTxt'>생성된 대본을 확인하고 파일명과 부가 설명을 작성하세요. 발표 대본을 다시 생성하고 싶다면 1단계로 돌아가 재생성하면 됩니다.<br/>완성된 대본은 오른쪽 하단 복사 버튼을 통해 복사하거나, txt 파일로 다운로드가 가능합니다. 이후에 다시 확인하고 싶다면 워크스페이스에 저장 버튼을 눌러주세요.</div>
                        </div>
                        </li>
                        <li><img src={require('./images/PtoS3.png')} alt="PtoS3" id="GuideImg"/>
                            <div id='GuideTitle'>03. 확인
                                <div id='GuideTxt'>생성된 대본은 사용자의 워크스페이스에 저장됩니다.<br/>워크스페이스에 들어가 대본을 다운로드 및 삭제할 수 있습니다.</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Guide;