import React, { useEffect, useState } from 'react';
import './StarRating.css';

function StarRating({ numberOfStars = 5 }) {
    let [ratingList, setRatingList] = useState([]);
    let [hoverList, setHoverList] = useState([]);

    useEffect(() => {
        let root = document.querySelector(':root');
        root.classList.add('dark');
        return () => {
            root.classList.remove('dark');
        }
    }, []);

    let setRating = (ele) => {
        let arr = Array.from({ length: ele }, (_, _i) => _i + 1);
        setRatingList(() => [...arr])
    }


    return (
        <div className='container'>
            <div className='star-contianer'>
                {Array.from({ length: numberOfStars }, (_, _i) => _i + 1).map((ele) => {
                    let classList = '';
                    if(ele < hoverList){
                        classList = 'star_hover';
                    }
                    return (<button
                        id={ele}
                        onClick={() => setRating(ele)}
                        className={`star cursor-pointer ${classList}`}
                        style={{ backgroundColor: ratingList.includes(ele) ? 'gold' : '' }}
                        onMouseEnter={() => setHoverList(ele)}
                        onMouseLeave={() => setHoverList(0)}
                    ></button>)
                })}
            </div>
            <h2 className='text-white m-5'>{`Current Rating: ` + ratingList.length}</h2>
        </div>
    )
}

export default StarRating
