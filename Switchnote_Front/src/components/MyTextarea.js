//Textarea 크기 지정하는 컴포넌트
//type(big, small, title)에 따라서 크기 달리할 수 있음
import React, { forwardRef } from 'react';

const MyTextarea = forwardRef(({text, type, placeholder, onChange, maxLength}, ref) => {
    const txtType = ['big', 'small', 'title'].includes(type) ? type : "default";

    return(
        <textarea 
            className={`MyTextarea MyTextarea_${txtType}`} 
            placeholder={placeholder}
            ref={ref}  
            value={text} // value 속성으로 text 값을 설정합니다.
            onChange={onChange}
            maxLength={maxLength}
        />
    );
});

MyTextarea.defaultProps = {
    type: "default",
}

export default MyTextarea;
