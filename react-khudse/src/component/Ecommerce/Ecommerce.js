import React, { useState } from 'react'
import './Ecommerce.css';
import useDarkTheme from '../../hooks/DarkTheme';
import Context, { ShoppingCartContext } from '../../context/Context';
import ECommerceBody from './ECommerceBody';
import EcommerceCardActions from './EcommerceCardActions';

function Ecommerce() {
  let [page, currentPage] = useState('product');
  useDarkTheme({className: 'dark'});

  return (
    <Context>
      <div className='sm:py-0 md:py-20 bg-gray-900'>
        <form className=' form shadow-xl md:border overflow-hidden border-gray-300 sm:mx-auto sm:max-w-lg sm:rounded-xl w-full'>
          <EcommerceCardActions currentPage={currentPage}/>
          <ECommerceBody page={page}/>
        </form >
      </div>
    </Context>
  )
}

export default Ecommerce
