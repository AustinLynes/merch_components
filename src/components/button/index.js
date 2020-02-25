import React, { useState } from 'react'
import { BUTTON,INPUT } from './style.js'
const Button = (props) => {
    const { style, name, onClickCallback, onChangeCallback, ...rest } = props
    const [edit, setEdit] = useState(false);

    const OnChangeCallback = (e)=>{
        e.preventDefault();
        onChangeCallback && onChangeCallback();
    }
    const OnClickCallback = (e)=>{
        e.preventDefault();
        setEdit(!edit);
        onClickCallback && onClickCallback();
    }

    if(!edit){
        return <BUTTON style={style && style.wrapperStyle} name={name} onClick={OnClickCallback}>{name}</BUTTON>
    }else{
        return <INPUT style={style && style.inputStyle} onChange={OnChangeCallback}/>
    }
}

export default Button