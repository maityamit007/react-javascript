import React, { useEffect } from 'react'
import Form from './Form'
import { schema } from './Schema'
import useDarkTheme from '../../hooks/DarkTheme';

function DynamicForm() {

    useDarkTheme({ className: 'dark' });

    return (
        <div className=' bg-gray-900 sm:py-0 md:py-20'>
            <Form schema={schema}/>
        </div>
    )
}

export default DynamicForm
