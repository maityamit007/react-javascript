import React, { useEffect } from 'react'
import Form from './Form'
import { schema } from './Schema'

function DynamicForm() {

    useEffect(()=>{
        let root = document.querySelector(':root');
        root.classList.add('dark');
        return () => {
            root.classList.remove('dark');
        }
    },[])

    return (
        <div className=' bg-gray-900 sm:py-0 md:py-20'>
            <Form schema={schema}/>
        </div>
    )
}

export default DynamicForm
