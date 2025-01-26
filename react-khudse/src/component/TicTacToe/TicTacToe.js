import React, { useState } from 'react'
import useDarkTheme from '../../hooks/DarkTheme';
import './TicTacToe.css';


const TicTacToeConfig = ({ boardSize }) => {
    const [currentTurn, setCurrentTurn] = useState('circle');

    const putPosition = (index) => {
        let doc = document.getElementById(index);
        if (doc.classList.length == 0) {
            doc.classList.add(currentTurn == 'circle' ? 'plus' : 'circle');
            setCurrentTurn(currentTurn == 'circle' ? 'plus' : 'circle')
        }
    }

    return (
        <>
            {
                Array.from({ length: boardSize }, (_, i) => i + 1).map((ele) => (
                    <div className='flex flex-row' key={ele}>
                        {Array.from({ length: boardSize }, (_, i) => i + 1).map((e) => (
                            <div className='tic_container cursor-pointer' onClick={() => putPosition(String(e) + String(ele))} key={e}>
                                <div id={String(e) + String(ele)} className={''}></div>
                            </div>
                        ))}
                    </div>
                ))}
        </>
    )
}

function TicTacToe() {
    useDarkTheme({ className: 'dark' });

    return (
        <div className={`progress_container`}>
            <div>
                <button
                    className={`py-2 my-4 px-3 bg-slate-600 text-md rounded-md text-white`}
                    onClick={() => { }}
                    type='button'>{`Reset`}
                </button>
            </div>
            <TicTacToeConfig boardSize={3} />
        </div>)
}

export default TicTacToe
