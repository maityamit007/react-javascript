import React from 'react';

function CardActions({
    rightContent= null,
    cardTitle,
    cardActions
}) {

    let handleButtonClick = () => {

    }
    let handleCardAction = () => {
    }

    return (
        <div className='grid md:grid-cols-2 bg-gray-700 border-b border-b-gray-500'>
            <div className='px-6 py-6 sm:px-10'>
                <button className='py-2 px-3 bg-slate-600 text-md rounded-md text-white' type='button' onClick={() => handleButtonClick()}>{cardTitle}</button>
            </div>
            <div className='flex flex-row gap-2 px-6 py-6 sm:px-10'>
                {rightContent}
                {cardActions && <button onClick={handleCardAction} className='py-2 px-3 bg-slate-600 text-md rounded-md text-white whitespace-nowrap' type='button'>{cardActions}</button>}
            </div>
        </div>
    )
}

export default CardActions
