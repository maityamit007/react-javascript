import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { filterReducer, productReducer } from './Reducer';

let ShoppingCart = createContext();

function Context({children}) {

    let [state, dispatch] = useReducer(productReducer, {
        products: []
    });

    let [filterState, dispatchFilter] = useReducer(filterReducer, {
        sortType: '',
        includeStock: false,
        searchBox: '',
        currentRating: 0
    });

    async function loadApiData() {
        let data = await fetch('/products.json').then(resp => resp.json());
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
        <ShoppingCart.Provider value={{ state, dispatch, filterState, dispatchFilter }}>
            {children}
        </ShoppingCart.Provider>
    )
}

export const ShoppingCartContext = () => useContext(ShoppingCart);

export default Context;
