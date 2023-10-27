import {useState} from "react";
import MyTextarea from './MyTextarea.js';

const TextInput = ({isLoading, onSubmit, placeholder, value}) => {
    const handleUserInput = (e) => {
        onSubmit(e.target.value);
    };

    return (
      <div>
        <p style={{fontSize: "15px", color: "black", textAlign: "right"}}>{value.length} / 1000</p>
        <MyTextarea 
          maxLength = "1000"
          onChange = {handleUserInput}
          text = {value}
          placeholder = {placeholder}
        />
      </div>
    );
};

export default TextInput;