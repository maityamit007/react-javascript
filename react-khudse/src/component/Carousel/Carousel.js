import React, { useRef, useState } from 'react'
import useDarkTheme from '../../hooks/DarkTheme';

function Carousel({
    loading,
    images,
    imagePerSlide = 4,
    customButtonPrev,
    customButtonNext,
    imageLimit = images.length,
}) {
    let ref = useRef(null);
    let [width, setWidth] = useState(200);
    const [currentIndex, setCurrentIndex] = useState(0);

    useDarkTheme({ className: 'dark' });

    let prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imageLimit - 1 : prevIndex - 1
        );
    }

    let nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === imageLimit - 1 ? 0 : prevIndex + 1
        );
    }

    return (
        <>{!(loading) ?
            (<div className='carousel' style={{ width: imagePerSlide * width }}>
                <div className="image-container" style={{transform: `translateX(-${currentIndex * width}px)`}}>
                    {images.length > 0 &&
                        images.slice(0, imageLimit > images.length ? images.length : imageLimit)
                            .map((ele) => (
                                <img
                                    onLoad={() => setWidth(ref?.current?.offsetWidth)}
                                    className='image'
                                    ref={ref}
                                    key={ele.id}
                                    src={ele.url}
                                />
                            )
                            )}
                </div>
                {
                    customButtonPrev instanceof Function ? customButtonPrev(prevImage) :
                        <button
                            onClick={() => prevImage()}
                        >{`Prev`}</button>
                }
                {
                    customButtonNext instanceof Function ? customButtonNext(nextImage) :
                        <button
                            onClick={() => nextImage()}
                        >{`Next`}</button>
                }
            </div>) : <>Loading...</>}
        </>)
}

export default Carousel;