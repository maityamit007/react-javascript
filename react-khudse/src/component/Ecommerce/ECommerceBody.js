import React from 'react'
import { ShoppingCartContext } from '../../context/Context';

const Products = ({ products, currentPage }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 flex-1 my-3 mx-2'>
                {
                    (products.length > 0) &&
                    products.slice(currentPage * 10 - 10, currentPage * 10).map((ele, index) =>
                        <div key={index} className='flex flex-col items-center bg-gray-800 p-4 m-2 rounded-lg'>
                            <img src={ele.thumbnail} alt={ele.title} className='h-32 w-32 object-cover mx-auto mb-2' />
                            <span className='text-white'>{ele.title}</span>
                            <span className='text-white'>{ele.price}</span>
                            </div>
                    )
                }
        </div>

    )
}

const Filters = () => {
    return (

        <></>
    )
}

function ECommerceBody() {

    let currentPage = 1;
    let { state: { products } } = ShoppingCartContext();
    console.log('products', products);

    return (
        <div className='flex flex-row'>
            <Filters/>
            <Products products={products} currentPage={currentPage}/>
        </div>
    )
}

export default ECommerceBody
