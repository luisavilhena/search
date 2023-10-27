import React, {useState} from 'react';
import ItemDestak from './ItemDestak';

function Item (props) {
    const [contentItem, setContentItem] = useState(props)
    
    const selectItem = (e) => {
        // setContentItem(props)
        setContentItem(props)
        // setWithoutDestak(true)
        props.onSelectElement(props)

        props.onDisableDestak(true)
    }
    return(
        <li onClick={selectItem}>
            <a href={`${props.url}`}>{props.url}</a>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </li>
    )
}

export default Item;