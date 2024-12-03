import React, { useState } from 'react';
import './NestedComments.css';

function Comments({
    nestedCommentObj,
    manipulateComment,
    commentData
}) {

    let [reply, setReply] = useState({
        isReply: false,
        replyText: '',
        replyType: ''
    })

    let handleChange = (event) => {
        if (!['Delete', 'ReplyChange'].includes(event.target.id)) {
            setReply((prevState) => {
                return {
                    ...prevState,
                    isReply: (['Edit', 'Reply'].includes(event.target.id) && prevState.isReply) ? prevState.isReply : !prevState.isReply,
                    replyType: event.target.id,
                    replyText: commentData?.['mother_text']
                }
            })
        } else if (event.keyCode == 13 && event.target.value) {
            event.preventDefault();
            manipulateComment((prevState) => 
                prevState.map((ele) => {
                    let oldData = ele[`mother_text_${commentData?.id}`]?.['childComment'];
                    if (ele?.id == commentData?.id) {
                        oldData.push({ id: oldData.length + 1, 'value': event.target.value });
                    }
                    ele[`mother_text_${commentData?.id}`]['childComment'] = oldData;
                    return ele;
                })
            )
        }
    }

    let handleReply = (event) => {
        setReply((prevState) => {
            return {
                ...prevState,
                isReply: !prevState.isReply
            }
        })
    }

    return (
        <div className='comment flex flex-col p-4 max-w-40 max-h-screen gap-2 bg-gray-800 rounded-md'>
            {/* <span>{commentData[`mother_text_${commentData?.id}`]?.['childComment'][0].value}</span> */}
            {commentData[`mother_text_${commentData?.id}`]?.['childComment'].map((comment) => (
                <div className='' style={{ marginLeft: String(10*comment.id) + 'px' }}>
                    <div className='flex flex-col'>
                        <div className='comment flex flex-col p-4 max-w-40 max-h-screen gap-2 bg-gray-800 rounded-md'>
                            {(comment.id > 0) && <span>{comment.value}</span>}
                        </div>
                        <div className='button_container'>
                            {(reply.isReply) ? <button>▼</button> : <button>▲</button>}
                            {['Reply', 'Edit', 'Delete'].map((ele, index) => (
                                <button
                                    key={index}
                                    id={ele}
                                    onClick={handleChange}
                                    className='font-bold capitalize'
                                    type="button">{ele}</button>
                            ))}
                        </div>
                    </div>
                    {(reply.isReply) ?
                        <div className='ml-7 my-4'>
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder={reply.replyType}
                                id={'ReplyChange'}
                                type='text'
                                defaultValue={reply.replyType == 'Edit' ? reply.replyText : ''}
                                autoFocus
                                onBlur={handleReply}
                                onKeyDown={handleChange}
                            />
                        </div>
                        : null}
                </div>
            ))}
        </div>
    )
}

export default Comments
