import React, { useState } from 'react';
import FormField from './FormField';
import * as yup from 'yup';

function Form({ schema }) {

    let [formData, setFormData] = useState([]);
    let [errors, setErrors] = useState({});
    let onChange = (event, fieldName) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                [fieldName]: event.target.value
            }
        })
    }

    let validationSchema = yup.object().shape(
        schema.reduce((acc, currentObj) => {
            if (currentObj['validation']) {
                acc[currentObj.name] = currentObj['validation']
            }
            return acc;
        }, {})
    )

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await validationSchema.validate(formData, { abortEarly: false })
            setErrors({});
            onSubmit();
        } catch (err) {
            const validationErrors = err.inner.reduce((acc, error) => {
                acc[error.path] = error.message;
                return acc;
            }, {});
            setErrors(validationErrors);
        }
    }

    const onSubmit = () => {
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit} className='custom-radio form shadow-xl md:border overflow-hidden border-gray-300 sm:mx-auto sm:max-w-lg sm:rounded-xl w-full'>
            <div className='grid bg-gray-700 border-b border-b-gray-500'>
                <div className='px-6 py-6 sm:px-10'>
                    <h2 className='font-bold text-xl text-white'>Dynamic Form</h2>
                </div>
                <div>
                </div>
            </div>
            <div className='grid gap-6 md:grid-cols-2 relative px-6 py-10 sm:px-10 w-full'>
                {schema.map((ele) => (
                    <FormField
                        key={ele.id}
                        fields={{
                            ...ele,
                            error: errors[ele.name],
                        }}
                        onChange={onChange} />
                ))}
                <div></div>
                <div>
                    <button type='submit' className='p-3 m-2 ml-0 rounded-lg bg-blue-600 text-white font-bold'>
                        Confirm
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Form;
