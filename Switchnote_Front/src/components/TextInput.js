//Txt->PPT 중 텍스트 업로드할 때 텍스트박스
import {useState} from "react";
import MyTextarea from './MyTextarea.js';
import React from 'react';

const TextInput = ({isLoading, onSubmit, placeholder, value}) => {
    const handleUserInput = (e) => {
        onSubmit(e.target.value);
    };

    return (
      <div>
        <p style={{fontSize: "15px", color: "black", textAlign: "center"}}>{value.length} / 900</p>
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