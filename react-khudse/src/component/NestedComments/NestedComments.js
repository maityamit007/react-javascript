import React, { useState } from 'react'
import CardActions from '../../Reusables/CardActions'
import useDarkTheme from '../../hooks/DarkTheme'
import Card from '../../Reusables/Card';
import Comments from './Comments';


let EnterText = ({
    nestedCommentObj,
    setNestedCommentObj,
}) => {

    let handleChange = (event) => {
        if(event.keyCode === 13 && event.target.value){
            event.preventDefault();
            setNestedCommentObj((prevState) => [
                ...prevState,
                { 'mother_text': event.target.value }
            ])
        }
    }

    return (
        <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder='Enter Comment 🗨️'
            onKeyDown={handleChange}
            type='text'
        />
    )
}

function NestedComments() {
    let [nestedCommentObj, setNestedCommentObj] = useState([]);
    useDarkTheme({});

    return (
        <div className=''>
            <Card>
                <CardActions
                    rightContent={<EnterText
                        nestedCommentObj={nestedCommentObj}
                        setNestedCommentObj={setNestedCommentObj}
                    />}
                    cardTitle={'Nested Comments'}
                />
                {
                    nestedCommentObj.length > 0 &&
                    <div className='flex flex-col gap-4 p-6'>
                        {nestedCommentObj.map((ele) =>
                            <Comments
                                comment={ele?.['mother_text']}
                            />
                        )
                        }
                    </div>
                }
            </Card>
        </div >
    )
}

export default NestedComments
