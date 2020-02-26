import React, { useState } from 'react';
import { FOOTER, LINK, LINK_WRAPPER, EDIT_ICON, INPUT } from './style';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export const Navigation = (props) => {
    const { style, buttons, onClickCallback, onChangeCallback, ...rest } = props;
    const [edit, setEdit] = useState(false)

    const OnChangeCallback = (e) => {
        e.preventDefault();
        onChangeCallback && onChangeCallback(e);
    }

    const OnClickCallback = (e) => {
        e.preventDefault();
        setEdit(!edit);
        onClickCallback && onClickCallback(e);
    }
    return (
        <FOOTER>
            {
                buttons && buttons.map(button => (
                    <LINK_WRAPPER>
                        {
                            !edit ?
                                <LINK style={style && style.wrapperStyle}>{button.name}</LINK>
                                : <INPUT style={style && style.inputStyle} onChange={OnChangeCallback} value={button.name} />
                        }
                    </LINK_WRAPPER>)
                )
            }
            <EDIT_ICON icon={faPencilAlt} onClick={OnClickCallback} />
        </FOOTER>
    )
}

export default Navigation
