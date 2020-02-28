import React, { useState, useEffect } from 'react';
import { FOOTER, EDIT_ICON  } from './style';
import { Link } from '../link'

export const Footer = (props) => {
    const { style, links, onChangeCallback, ...rest } = props;

    const [editables, setEditables] = useState([]);

    const OnChangeCallback = (e) => {
        e.preventDefault();
        onChangeCallback && onChangeCallback(e);
    }
    useEffect(() => {
        setEditables(links && links.map((link, i) => {
            return { ...link, edit: false }
        }))
        console.log(`*******  ${editables}`)
    }, [])
    const OnClickCallback = (e) => {
        setEditables(editables.map((editable, i) => {
            editable.edit = true;
        }))
    }
    return (
        <FOOTER>
            <EDIT_ICON icon={faPencilAlt} onClick={OnClickCallback} />
            {
                editables && editables.map((link, i) => (<Link key={i + '_lf'} onChangeCallback={OnChangeCallback} style={link.style} name={link.name} edit={link.edit} />))
            }
        </FOOTER>
    )
}


export default Footer
