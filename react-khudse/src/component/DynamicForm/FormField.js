import React from 'react'
import { RadioField, TextField } from './Input';

let component = {
    ['TEXT_FIELD']: TextField,
    ['RADIO']: RadioField,
    ['SLIDER']: TextField,
    ['DATE_PICKER']: TextField
}

function FormField({ fields, onChange }) {
    let Component = component[fields.element_type];
    return (<div> {(Component) ?
        <>
            <Component {...fields} key={fields.id} onChange={onChange} />
            {fields?.error && <p className='text-red-600 my-3'>{fields?.error}</p>}
        </>
        : null}</div>)
}

export default FormField;
