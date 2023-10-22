import {useState} from "react";
import MyTextarea from './MyTextarea.js';

const TextInput = ({isLoading, onSubmit, placeholder, value}) => {
    const handleUserInput = (e) => {
        onSubmit(e.target.value);
    };

    return (
      <div>
        <MyTextarea 
          onChange={handleUserInput}
          text={value}
          placeholder={placeholder}
        />
      </div>
    );
};

export default TextInput;