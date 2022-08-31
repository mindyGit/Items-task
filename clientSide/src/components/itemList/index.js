import React, { useState, useEffect } from 'react';

import axios from 'axios';


import './itemList.css';


export default function ItemList(props) {
    const [items, setItems] = useState([]);

    useEffect(async () => {

        getItems();


    }, [])

    const getItems = () => {
        axios.get('http://localhost:3002/items').then(response => {

            console.log(response);
            let newItems = response.data.map(result => {
                return {
                    label: result.label,
                    type: result.type,
                    value: result.value
                };
            });
            setItems([...items, ...newItems])
        });
    }




    return (<div>
        {
            items.map(item =>
                <>
                    <label>
                        {item.label}:
                        <br></br>
                        <input type={`${item.type}`} name="name" value={item.value} />
                        <br></br>
                    </label>

                </>
            )
        } </div>
    );
}