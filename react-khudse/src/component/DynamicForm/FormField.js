import React from 'react'
import { TextField } from './Input';

let component = {
    ['TEXT_FIELD']: TextField,
    ['RADIO']: TextField,
    ['SLIDER']: TextField,
    ['DATE_PICKER']: TextField
}

function FormField({ fields, onChange }) {
    console.log('fields', fields);
    let Component = component[fields.element_type];
    return (<div> {(Component) ? <Component {...fields} onChange={onChange}/> : null}</div>)
}

export default FormField;
