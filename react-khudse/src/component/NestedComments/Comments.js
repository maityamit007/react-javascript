import React, { useState } from 'react';
import './NestedComments.css';

function Comments({
    comment
}) {

    let [reply, setReply] = useState({
        isReply: true
    })

    let handleChange = (event) => {
        setReply((prevState) => {
            return {
                ...prevState,
                isReply: !prevState.isReply
            }
        })
    }

    return (
        <div className='comment flex flex-col p-4 max-w-40 max-h-screen gap-2 bg-gray-800 rounded-md'>
            <span>{comment}</span>
            <div className='flex'>
                <div className='button_container'>
                    {(reply.isReply) ? <button>▲</button> : <button>▼</button>}
                    {['Reply', 'Edit', 'Delete'].map((ele) => (
                        <button
                            id={ele}
                            onClick={handleChange}
                            className='font-bold capitalize' type="button">{ele}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Comments
