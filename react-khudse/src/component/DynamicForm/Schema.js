import * as yup from "yup";

export const schema = [{
    name: 'username',
    placeholder: 'Name',
    isRequired: true,
    element_type: 'TEXT_FIELD',
    type: 'text',
    validation: yup.string().required("Name is required"),
},
{
    name: 'email',
    placeholder: 'Email',
    isRequired: true,
    element_type: 'TEXT_FIELD',
    type: 'email',
    validation: yup.string().required("Email is required."),
},
{
    name: 'password',
    placeholder: 'Password',
    isRequired: true,
    element_type: 'TEXT_FIELD',
    type: 'password',
    validation: yup.string().required("Password is required."),
},
{
    name: 'confirm_password',
    placeholder: 'Confirm Password',
    isRequired: true,
    element_type: 'TEXT_FIELD',
    type: 'password',
    validation: yup.string()
        .oneOf([yup.ref('password'), null], "Passwords must match")
        .required("Confirm password is required."),
},
{
    name: 'gender',
    placeholder: 'Gender',
    isRequired: true,
    element_type: 'RADIO',
    type: 'radio',
    options: [{
        value: 'male',
        displayValue: 'Male'
    },{
        value: 'female',
        displayValue: 'Female'
    },{
        value: 'others',
        displayValue: 'Others'
    }],
    validation: yup.string().required("Gender is required."),
},
{
    name: 'slider',
    placeholder: 'Slider',
    isRequired: true,
    element_type: 'SLIDER',
    type: 'range',
    minVal: 0,
    maxVal: 5,
    validation: yup.string().required("Slider is required."),
},
{
    name: 'date',
    placeholder: 'Date',
    isRequired: true,
    element_type: 'DATE_PICKER',
    type: 'date',
    validation: yup.string().required("Date is required."),
}];
