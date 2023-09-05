import Table from 'react-bootstrap/Table';

function PPTSel() {
    return(
        <div>
            <div id='PPTSelect'>
                PPT 디자인 선택
                <div>PPT를 만드는 가장 빠른 방법</div>
                <form>
                    <Table className='PPTSelT'>
                        <tr>
                            <td id='Choice1'><img src={require('./images/Choice1.png')} alt="Choice1" id="ChoiceImg"/></td>
                            <td id='Choice1'><img src={require('./images/Choice2.png')} alt="Choice2" id="ChoiceImg"/></td>
                            <td id='Choice1'><img src={require('./images/Choice3.png')} alt="Choice3" id="ChoiceImg"/></td>
                        </tr>
                        <tr>
                            <td id='Choice2'><input type='radio' name='PPT1' id='ChoiceB'/></td>
                            <td id='Choice2'><input type='radio' name='PPT1' id='ChoiceB'/></td>
                            <td id='Choice2'><input type='radio' name='PPT1' id='ChoiceB'/></td>
                        </tr>
                    </Table>
                    <div>
                        <input type='submit' value='NEXT' id='Selected'/><br/>
                        <button id='Retry'>추가 생성</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PPTSel;