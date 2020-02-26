import React, {useState} from 'react';
import { FOOTER, BUTTON,LINK, LINK_WRAPPER, EDIT_ICON } from './style';

export const Navigation = (props) => {
    const { style,  buttons, onClickCallback, onChangeCallback, ...rest } = props;
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
                        <EDIT_ICON icon={faPencilAlt} onClick={OnClickCallback} />
                    </LINK_WRAPPER>)
                    )
            }
        </FOOTER>
    )
}

export default Navigation
