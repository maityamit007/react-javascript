export const schema = [{
    name: 'username',
    placeholder: 'Name',
    isRequired: true,
    element_type: 'TEXT_FIELD',
    validation: ''
},
{
    name: 'email',
    placeholder: 'Email',
    isRequired: true,
    element_type: 'TEXT_FIELD',
    validation: ''
},
{
    name: 'password',
    placeholder: 'Password',
    isRequired: true,
    element_type: 'TEXT_FIELD',
    validation: ''
},
{
    name: 'confirm_password',
    placeholder: 'Confirm Password',
    isRequired: true,
    element_type: 'TEXT_FIELD',
    validation: ''
},
{
    name: 'gender',
    placeholder: 'Gender',
    isRequired: true,
    element_type: 'RADIO',
    options: [{
        value: 'male',
        displayValue: 'Male'
    },{
        value: 'female',
        displayValue: 'FeMale'
    },{
        value: 'others',
        displayValue: 'Others'
    }],
    validation: ''
},
{
    name: 'slider',
    placeholder: 'Slider',
    isRequired: true,
    element_type: 'SLIDER',
    minVal: 1,
    maxVal: 5,
    validation: ''
},
{
    name: 'date',
    placeholder: 'Date',
    isRequired: true,
    element_type: 'DATE_PICKER',
    validation: ''
}];
