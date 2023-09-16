import React, { forwardRef } from 'react';

const MyTextarea = forwardRef(({text, type, placeholder, onChange}, ref) => {
    const txtType = ['big', 'small', 'title'].includes(type) ? type : "default";

    return(
        <textarea 
            className={`MyTextarea MyTextarea_${txtType}`} 
            placeholder={placeholder}
            ref={ref}  
            value={text} // value 속성으로 text 값을 설정합니다.
            onChange={onChange}
        />
    );
});

MyTextarea.defaultProps = {
    type: "default",
}

export default MyTextarea;
