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
        <div className='py-20 bg-gray-900'>
            <Form schema={schema}/>
        </div>
    )
}

export default DynamicForm
