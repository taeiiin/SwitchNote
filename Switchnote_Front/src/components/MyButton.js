//버튼 크기 지정하는 컴포넌트
//type(gray, blue, line)에 따라서 색상 달리 할 수 있음
import React from 'react';

const MyButton = ({text, type, size, onClick})=>{

    const btnType = ['blue','gray','line'].includes(type)?type:"default";

    return(
        <button className={["MyButton",`MyButton_${type}`,`MyButton_${size}`].join(" ")} onClick={onClick}>
            {text}
        </button>
    );
};

MyButton.defaultProps = {
    type: "default",
}

export default MyButton;