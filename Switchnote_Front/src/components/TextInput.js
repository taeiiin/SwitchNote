import {useState} from "react";
import MyTextarea from './MyTextarea.js';

const TextInput = ({isLoading, onSubmit, placeholder, value}) => {
    const handleUserInput = (e) => {
        onSubmit(e.target.value);
    };

    return (
      <div>
        <p style={{fontSize: "15px", color: "black", textAlign: "right"}}>{value.length} / 900</p>
        <MyTextarea 
          maxLength = "900"
          onChange = {handleUserInput}
          text = {value}
          placeholder = {placeholder}
        />
      </div>
    );
};

export default TextInput;