function TxtInput() {
    return(
        <div>
            <div id='TxtToPPT'>
                Text to PPT
                <div>
                    PPT를 만드는 가장 빠른 방법
                </div>
                <form method='post' name='txtform'>
                    <textarea name='txt' id='text' placeholder='텍스트를 입력하세요'></textarea><br/>
                    <input type='submit' value='PPT 생성' id='TxtB'></input>
                </form>
            </div>
        </div>
    )
}

export default TxtInput;