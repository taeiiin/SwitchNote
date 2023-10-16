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