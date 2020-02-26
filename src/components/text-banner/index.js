import React, { useState } from 'react';
import { BANNER, MESSAGE, INPUT, EDIT_ICON } from './style';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

const TextBanner = (props) => {
    const { style, message, size, ...rest } = props
    const [edit, setEdit] = useState(false)
    return (

        <BANNER style={style && style.wrapperStyle}>
            {!edit ?
                <MESSAGE style={style && style.wrapperStyle} >{message}</MESSAGE>
                : <INPUT style={style && style.inputStyle} onChange={OnChangeCallback} value={name} />}
            <EDIT_ICON icon={faPencilAlt} onClick={OnClickCallback} />
            
        </BANNER>
    )
}

export default TextBanner