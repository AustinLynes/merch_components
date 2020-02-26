import React, { useState } from 'react';
import { FOOTER, LINK, LINK_WRAPPER, EDIT_ICON, INPUT } from './style';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export const Navigation = (props) => {
    const { style, links, onChangeCallback, ...rest } = props;

    const OnChangeCallback = (e) => {
        e.preventDefault();
        onChangeCallback && onChangeCallback(e);
    }


    return (
        <FOOTER>
            {
                links && links.map(link => (<Link onChangeCallback={OnChangeCallback} style={link.style} name={link.name} />))
            }
        </FOOTER>
    )
}


const Link = (props) => {
    const { name, style, onChangeCallback, ...rest } = props;
    const [edit, setEdit] = useState(false);
    const OnClickCallback = (e) => {
        e.preventDefault();
        setEdit(!edit);
        onClickCallback && onClickCallback(e);
    }
    return (
        <LINK_WRAPPER>
            {
                !edit ?
                    <LINK style={style && style.wrapperStyle}>{name}</LINK>
                    : <INPUT style={style && style.inputStyle} onChange={OnChangeCallback} value={name} />
            }
            <EDIT_ICON icon={faPencilAlt} onClick={OnClickCallback} />
        </LINK_WRAPPER>
    )
}
export default Navigation
