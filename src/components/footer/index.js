import React from 'react';
import { FOOTER, BUTTON,LINK, LINK_WRAPPER } from './style';

export const Navigation = (props) => {
    const { buttons, ...rest } = props;

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
