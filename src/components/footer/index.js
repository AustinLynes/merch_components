import React, { useState, useEffect } from 'react';
import { FOOTER, EDIT_ICON } from './style';
import { Link } from '../link'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export const Footer = (props) => {
    const { style, links, onChangeCallback, ...rest } = props;

    const [editables, setEditables] = useState([]);

    const OnChangeCallback = (e) => {
        e.preventDefault();
        onChangeCallback && onChangeCallback(e);
    }
    useEffect(() => {
        setEditables(links && links.map((link, i) => {
            return { id: i, edit: false }
        }))
        console.log(`*******  ${editables}`)
    }, [])
    const OnClickCallback = (e) => {
        console.log(`*******  ${JSON.stringify(editables)}  *******`)
        const editables_flipped_val = editables.map((e, i) => {
            e.edit = !e.edit;
        })
        setEditables(editables_flipped_val)
    }
    return (
        <FOOTER>
            <EDIT_ICON icon={faPencilAlt} onClick={OnClickCallback} />
            {
                links && links.map((link, i) => (<Link key={i + '_lf'} onChangeCallback={OnChangeCallback} style={link.style} name={link.name} edit={editables.map((ed) => {console.log(ed); ed.id !== i}).edit} />))
            }
        </FOOTER>
    )
}


export default Footer
