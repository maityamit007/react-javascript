import React from 'react'
import './Ecommerce.css';
import useDarkTheme from '../../hooks/DarkTheme';
import Context, { ShoppingCartContext } from '../../context/Context';
import ECommerceBody from './ECommerceBody';
import CardActions from './CardActions';

function Ecommerce() {
  useDarkTheme({});


  return (
    <Context>
      <div className='sm:py-0 md:py-20'>
        <form className=' form shadow-xl md:border overflow-hidden border-gray-300 sm:mx-auto sm:max-w-lg sm:rounded-xl w-full'>
          <CardActions />
          <ECommerceBody />
        </form >
      </div>
    </Context>
  )
}

export default Ecommerce
