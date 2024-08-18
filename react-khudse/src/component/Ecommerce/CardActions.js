import React from 'react'
import { ShoppingCartContext } from '../../context/Context';
import useDarkTheme from '../../hooks/DarkTheme';

function CardActions() {
    let { dispatchFilter } = ShoppingCartContext();

    const handleChange = (e) => {
        console.log(e.target.value);
        dispatchFilter({
            type: 'FILTER_BY_SEARCH',
            payload: e.target.value
        })
    }
    return (
        <div className='grid md:grid-cols-2 bg-gray-700 border-b border-b-gray-500'>
            <div className='px-6 py-6 sm:px-10'>
                <button className='py-2 px-3 bg-slate-600 text-md rounded-md text-white' type='button'>Medicore Store</button>
            </div>
            <div className='px-6 py-6 sm:px-10'>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder='Search 🔍'
                    onChange={(event) => handleChange(event)}
                    type='text'
                >
                </input>
            </div>
        </div>
    )
}

export default CardActions
