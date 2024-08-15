import React from 'react';
import FormField from './FormField';

function Form({ schema, onChange, onSubmit }) {
    return (
        <form onSubmit={onSubmit} className='form shadow-xl border overflow-hidden border-gray-300 sm:mx-auto sm:max-w-lg sm:rounded-xl w-full'>
            <div className='grid gap-6 md:grid-cols-2 bg-gray-700 border-b border-b-gray-500'>
                <div className='px-6 py-6 sm:px-10'>
                    <h2 className='font-bold text-xl text-white'>Dynamic Form</h2>
                </div>
                <div>
                </div>
            </div>
            <div className='grid gap-6 md:grid-cols-2 relative px-6 py-10 sm:px-10 w-full'>
                {schema.map((ele) => (
                    <FormField key={ele.id} fields={ele} onChange={onChange} />
                ))}
                <div></div>
                <div>
                    <button className='p-3 m-2 ml-0 rounded-lg bg-blue-600 text-white font-bold'>
                        Confirm
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Form;
