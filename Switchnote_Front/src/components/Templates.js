//템플릿 소개 및 선택 페이지 -> 하드코딩
import Table from 'react-bootstrap/Table';
import React from "react";

function Templates() {
    return (
    <div className>
        <div id="Temp">
            <div>Template
                <p>이용자들의 사용 빈도가 높은 템플릿을 추천합니다.</p>
            </div>
        </div>
        <div id="TempT">
        <Table className="TempTable">
            <thread>
                <tr>
                    <td className="TempTd">
                        <img src={require('./images/temp1.png')} alt="logo" className="TempImg"/>
                        <div>
                            <div className="tempTitle">Simple
                                <div class="tempIntro">
                                튜닝의 끝은 순정<br/>기교 없는 깔끔함을 추구한다면 Simple 템플릿을 추천합니다.
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <img src={require('./images/temp2.png')} alt="logo" className="TempImg"/>
                        <div>
                            <div className="tempTitle">Look at Me
                                <div class="tempIntro">
                                깔끔함과 시크함을 동시에 잡은 템플릿<br/>눈에 확 들어오는 디자인으로 시선을 집중시키는데 효과적입니다.
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <img src={require('./images/temp3.png')} alt="logo" className="TempImg"/>
                        <div>
                            <div className="tempTitle">Dynamic
                                <div class="tempIntro">
                                일기장 같은 친숙한 디자인의 템플릿<br/>일상적인 내용을 담을 때 분위기 전달에 효과적입니다.
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <img src={require('./images/temp4.png')} alt="logo" className="TempImg"/>
                        <div>
                            <div className="tempTitle">Woody
                                <div class="tempIntro">
                                목재 창고 안 우디한 향기가 나는 듯한 느낌의 템플릿<br/>따뜻하고 모던한 분위기를 담았습니다.
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={require('./images/temp5.png')} alt="logo" className="TempImg"/>
                        <div>
                            <div className="tempTitle">Modern
                                <div class="tempIntro">
                                심플한 오브제들과 현대적인 색감<br/>도회적인 분위기를 주는 감각적 디자인을 제공합니다.
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <img src={require('./images/temp6.png')} alt="logo" className="TempImg"/>
                        <div>
                            <div className="tempTitle">Active
                                <div class="tempIntro">
                                생생한 컬러를 통한 집중<br/>강렬하고 풍부한 색채들과 선의 조합을 과도하지 않게 표현한 디자인 템플릿입니다.
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <img src={require('./images/temp7.png')} alt="logo" className="TempImg"/>
                        <div>
                            <div className="tempTitle">Fresh
                                <div class="tempIntro">
                                자연 럭셔리 트렌드를 따르는 템플릿<br/>신선한 배경과 색조를 통해 다채롭고 건강한 이미지를 선보입니다.
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <img src={require('./images/temp8.png')} alt="logo" className="TempImg"/>
                        <div>
                            <div className="tempTitle">Academic
                                <div class="tempIntro">
                                책이 가득한 서고를 연상시키는 클래식한 템플릿<br/>차분하고 빈티지한 이미지를 연상시키는 채도 낮은 색감의 디자인입니다.
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </thread>
        </Table>
        </div>
    </div>
    )
}

export default Templates;