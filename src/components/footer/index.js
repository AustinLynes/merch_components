import React, { useState, useEffect } from 'react';
import { FOOTER, EDIT_ICON } from './style';
import { Link } from '../link'

export const Footer = (props) => {
    const { style, links, onChangeCallback, ...rest } = props;

    const [edit, setEdit] = useState(false);

    const OnChangeCallback = (e) => {
        e.preventDefault();
        onChangeCallback && onChangeCallback(e);
    }
    const OnClickCallback = (e) => {
        
        setEdit(!edit)
    }
    return (
        <FOOTER>
            <EDIT_ICON icon={faPencilAlt} onClick={OnClickCallback} />
            {
                links && links.map((link, i) => (<Link key={i + '_lf'} onChangeCallback={OnChangeCallback} style={link.style} name={link.name} edit={edit} />))
            }
        </FOOTER>
    )
}


export default Footer
