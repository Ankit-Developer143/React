import React, { useState, useEffect } from 'react'


function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items,setItem] = useState([]);
    const fetchItems = async () => {
        const data = await fetch(
            'https://fortnite-api.theapinetwork.com/upcoming/get'
        );
        const val = await data.json();
        // console.log(val.data);
        setItem(val.data)
        // console.log(items.data);
        // setItem(items)
        const myData  = items.map(X =>{
            console.log(X.item);
        })


    }

    return (
        <div>
            <h1>Shop</h1>
            
        </div>
    )
}

export default Shop
