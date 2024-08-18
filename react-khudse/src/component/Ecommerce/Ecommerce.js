import React from 'react'
import './Ecommerce.css';
import useDarkTheme from '../../hooks/DarkTheme';
import Context from '../../context/Context';
import ECommerceBody from './ECommerceBody';

function Ecommerce() {

  useDarkTheme({});

  return (
    <Context>
      <div className='sm:py-0 md:py-20'>
        <form className=' form shadow-xl md:border overflow-hidden border-gray-300 sm:mx-auto sm:max-w-lg sm:rounded-xl w-full'>
          <div className='grid md:grid-cols-2 bg-gray-700 border-b border-b-gray-500'>
            <div className='px-6 py-6 sm:px-10'>
              <button className='py-2 px-3 bg-slate-600 text-md rounded-md text-white'>Medicore Store</button>
            </div>
            <div className='px-6 py-6 sm:px-10'>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder='Search 🔍'>
              </input>
            </div>
          </div>
          <ECommerceBody/>
        </form >
      </div>
    </Context>
  )
}

export default Ecommerce
