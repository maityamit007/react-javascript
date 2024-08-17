import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

function AppLayout() {
    return (
        <div>
                <Header/>
            <main className='p-10'>
                <ol>
                    <ul> 
                        <a href='/carousel' className='text-blue-700 italic '>Carousel</a>
                    </ul>
                    <ul>
                        <a href='/dynamic-form' className='text-blue-700 italic '>Dynamic Form</a>
                    </ul>
                    <ul>
                        <a href='/infinite-scroll' className='text-blue-700 italic '>Infinite Scroll</a>
                    </ul>
                    <ul>
                        <a href='/pagination' className='text-blue-700 italic '>Pagination</a>
                    </ul>
                    <ul>
                        <a href='/progress-bar' className='text-blue-700 italic '>Progress Bar</a>
                    </ul>
                    <ul>
                        <a href='/star-rating' className='text-blue-700 italic '>Star Rating</a>
                    </ul>
                    <ul>
                        <a href='/e-commerce' className='text-blue-700 italic '>E Commerce</a>
                    </ul>

                </ol>
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout
