import React, { useState, useEffect, useRef } from 'react';
import { WRAPPER, CLOSE_BUTTON, IMAGE, PLUS_ICON, INPUT_WRAPPER, EDIT_ICON, INPUT, PLACEHOLDER } from './style'
import { faTimes, faPlus, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = (props) => {
    // GSAP 
    const { style, item, ...rest } = props;
    const { id, onSale, itemName, itemDescription, itemCost, imageSrc, toggleOnSale, saleCost, submitCallback, updateItem, deleteItem, scale } = item
    const [payload, setPayload] = useState({ id, itemDescription, itemName, saleCost, itemCost });
    const [editSwitches, setEditSwitches] = useState([0, 0, 0])

    const switch0_ref = useRef(null)
    const switch1_ref = useRef(null)
    const switch2_ref = useRef(null)

    const toggle = (id) => {
        toggleOnSale(id);
    }
    //-> SET ANIM 
    // GSAP so
    const handleChanges = (e) => {
        setPayload({ ...payload, [e.target.name]: e.target.value });
        updateItem(e.target.id, payload);
        return item;
    }

    const handleSwitch = (e) => {
        const refs = [switch0_ref, switch1_ref, switch2_ref];
        refs.map((ref, i) => {

            console.log('******* ', ref);
            //    ref.children.map(child=>{
            //        console.log(child)
            //    })
        })
    }
    // abstract scale to a parent var... then.. apply scale to the carosel 
    // navigation needs background color.. then customize buttons 
    // 

    useEffect(() => {
        handleSwitch()
    }, [])
    return (
        <WRAPPER
            style={style && style.wrapperStyle}
            scale={scale}
            id={id}
            onContextMenu={e => {
                e.preventDefault();
                toggle(e.target.id);
            }}>

            <INPUT_WRAPPER ref={switch0_ref}>
                <INPUT id={id + 'in'} name='itemName' onChange={handleChanges} style={style && style.nameStyle} value={payload.itemName} />
                <EDIT_ICON icon={faPencilAlt} />
            </INPUT_WRAPPER>

            {imageSrc ?
                (<IMAGE
                    id={id}
                    style={style && style.imageStyle}
                    scale={scale + 0.2}
                    alt='shirt'
                    src={imageSrc}
                />) : (
                    <PLACEHOLDER>
                        <PLUS_ICON style={style && style.plusIconSyle} icon={faPlus} />
                        <p style={{ width: '100%', textAlign: 'center' }}>click to edit</p>
                    </PLACEHOLDER>)
            }
            <INPUT_WRAPPER ref={switch1_ref}>
                <INPUT
                    name='itemDescription'
                    style={style && style.descriptionStyle}
                    id={id + 'ic'}
                    onChange={handleChanges}
                    value={payload.itemDescription}
                    isCost={true}
                />
                <EDIT_ICON icon={faPencilAlt} />

            </INPUT_WRAPPER>
            <INPUT_WRAPPER ref={switch1_ref}>
                <INPUT
                    name='itemCost'
                    style={style && style.costStyle}
                    id={id + 'ic'}
                    onSale={onSale}
                    type='number'
                    onChange={handleChanges}
                    value={payload.itemCost}
                    isCost={true}
                />
                <EDIT_ICON icon={faPencilAlt} />

            </INPUT_WRAPPER>

            {onSale && (
                <INPUT_WRAPPER ref={switch2_ref}>
                    <INPUT
                        ref={switch2_ref}
                        id={id + 'sc'}
                        style={style && style.saleCostStyle}
                        type='number'
                        name='saleCost'
                        onChange={handleChanges}
                        value={payload.saleCost}
                    />
                    <EDIT_ICON icon={faPencilAlt} />
                </INPUT_WRAPPER>
            )}

            <CLOSE_BUTTON style={style && style.closeButtonStyle} id={id} icon={faTimes} />
        </WRAPPER>
    )
}
export default Item;