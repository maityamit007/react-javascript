import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { productReducer } from './Reducer';

let ShoppingCart = createContext();

function Context({children}) {


    let [state, dispatch] = useReducer(productReducer, {
        products: []
    });

    async function loadApiData() {
        let data = await fetch('/products.json').then(resp => resp.json());
        console.log('data', data);
        if(!['', null, undefined].includes(data.products)){
            dispatch({
                type: 'GET_PRODUCTS',
                payload: data.products
            })
        }
    }

    useEffect(()=>{
        loadApiData();
    },[]);

    return (
        <ShoppingCart.Provider value={{ state, dispatch }}>
            {children}
        </ShoppingCart.Provider>
    )
}

export const ShoppingCartContext = () => useContext(ShoppingCart);

export default Context;
