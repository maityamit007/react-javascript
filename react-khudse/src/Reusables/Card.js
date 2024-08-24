import React from 'react'

function Card({ children }) {
    return (
        <div className='sm:py-0 md:py-20'>
            <form className=' form shadow-xl md:border overflow-hidden border-gray-300 sm:mx-auto sm:max-w-lg sm:rounded-xl w-full'>
                {children}
            </form>
        </div>
    )
}

export default Card
