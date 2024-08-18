import React, { useEffect, useState } from 'react'
import Carousel from './Carousel';
import './Carousel.css';

function CourselHome() {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadImages(8);
  }, []);

  async function loadImages(imgLimit) {
    setLoading(true);
    let response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${imgLimit}`)
      .then((resp) => resp.json())
      .catch((error) => {
        if (error) {
          setLoading(false);
        }
      });
    if (response.length > 0) {
      setLoading(false);
      setImage(response);
    }
  }

  return (
    <div className="star-contianer w-full">
      <Carousel
        images={image}
        loading={loading}
        imagePerSlide={1}
        imageLimit={4}
        customButtonPrev={(onClick) => (<button
          className='btn prev'
          onClick={onClick}
        >Prev</button>)}
        customButtonNext={(onClick) => (<button
          className='btn next'
          onClick={onClick}
        >Next</button>)}
      />
    </div>
  )
}

export default CourselHome;
