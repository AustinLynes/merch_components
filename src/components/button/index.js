import React, { useState } from 'react'
import { BUTTON,INPUT } from './style.js'
const Button = (props) => {
    const { style, name, onClickCallback, onChangeCallback, edit, ...rest } = props

    const OnChangeCallback = (e)=>{
        e.preventDefault();
        onChangeCallback && onChangeCallback(e);
    }
   
    const OnClickCallback = (e) => {
        e.preventDefault();
        onClickCallback && onClickCallback(e);
    }

    if(!edit){
        return <BUTTON style={style && style.wrapperStyle} name={name} onClick={OnClickCallback}>{name}</BUTTON>
    }else{
        return <INPUT style={style && style.inputStyle} onChange={OnChangeCallback} value={name}/>
    }
}

export default Button