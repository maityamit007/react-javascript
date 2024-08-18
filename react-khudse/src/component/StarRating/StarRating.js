import React, { useEffect, useState } from 'react';
import './StarRating.css';
import useDarkTheme from '../../hooks/DarkTheme.js';

function StarRating({ numberOfStars = 5, currentRating,  shoppingCart = false, onChange }) {
    let [ratingList, setRatingList] = useState([]);
    let [hoverList, setHoverList] = useState([]);

    useDarkTheme({ className: 'dark' });

    useEffect(() => {
        if (currentRating || currentRating == 0) {
            setRating(currentRating);
        }
    }, [currentRating])

    let setRating = (ele) => {
        if(onChange){
            let arr = Array.from({ length: ele }, (_, i) => i + 1);
            setRatingList(() => [...arr])
            onChange(arr.length, 'rating');
        }else {
            let arr = Array.from({ length: ele }, (_, i) => i + 1);
            setRatingList(() => [...arr])
        }
    }

    return (
        <div className={`progress_container ${shoppingCart ? 'flex-1': ''}`} style={{ height: shoppingCart ? '10px' : '70vh' }}>
            <div className='star-contianer' style={{ margin: shoppingCart ? '0px' : '5px' }}>
                {Array.from({ length: numberOfStars }, (_, _i) => _i + 1).map((ele) => {
                    let classList = '';
                    if (ele < hoverList) {
                        classList = 'star_hover';
                    }
                    return (<button
                        id={ele}
                        type='button'
                        onClick={() => setRating(ele)}
                        className={`star cursor-pointer ${classList}`}
                        style={{
                            backgroundColor: ratingList.includes(ele) ? 'gold' : shoppingCart ? 'white' : '',
                            minWidth: shoppingCart ? '20px' : '50px',
                            height: shoppingCart ? '20px' : '50px',
                            padding: shoppingCart ? '5px': ''
                        }}
                        onMouseEnter={() => setHoverList(ele)}
                        onMouseLeave={() => setHoverList(0)}
                    ></button>)
                })}
            </div>
            {!shoppingCart && <h2 className='text-white m-5'>{`Current Rating: ` + ratingList.length}</h2>}
        </div>
    )
}

export default StarRating
