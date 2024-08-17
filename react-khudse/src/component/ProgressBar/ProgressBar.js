import React, { useEffect, useState } from 'react'
import './ProgressBar.css';
import useDarkTheme from '../../hooks/DarkTheme';

function ProgressBar() {
    let [percentage, setPercentage] = useState(1);

    useDarkTheme({ className: 'dark' });

    useEffect(() => {
        let interval = setInterval(() => {
            if (percentage < 100) {
                setPercentage((percent) => percent + 1);
            }
        }, 100);
        return () => {
            clearTimeout(interval);
        }
    }, [percentage])


    return (
        <div className='progress_container'>
            <h2 className='m-5 text-white text-xl'>Battery Life</h2>
            <div className='progress_bar bg-gray-300'
                aria-valuemax={100} // for accessiblity
                aria-valuemin={0} // for accessiblity
                role="progress bar"  // for accessiblity
            >
                <div
                    className='progress font-bold'
                    style={{
                        // transform: `scaleX(${percentage/100})`,
                        // transformOrigin: 'left',
                        width: `${percentage}%`
                    }}>{percentage + '%'}</div>
            </div>
        </div>
    )
}

export default ProgressBar
