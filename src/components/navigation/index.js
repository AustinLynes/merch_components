import React from 'react'
import { NAVIGATION, BUTTON } from './style'
import { EDIT_ICON } from '../footer/style'
import { Link } from '../link'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export const Navigation = (props) => {
    const { style, links, onChangeCallback, ...rest } = props
    const [edit, setEdit] = useState(false);

    const OnChangeCallback = (e) => {
        e.preventDefault();
        onChangeCallback && onChangeCallback(e);
    }
    const OnClickCallback = (e) => {

        setEdit(!edit)
    }
    return (
        <NAVIGATION>
            <EDIT_ICON icon={faPencilAlt} onClick={OnClickCallback} />

            {
                links && links.map((link, i) => (<Link key={i + '_ln'} onChangeCallback={onChangeCallback} style={link.style} name={link.name} edit={edit} />))

            }
        </NAVIGATION>
    )
}

export default Navigation
