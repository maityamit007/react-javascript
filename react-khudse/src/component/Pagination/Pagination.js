import React, { useEffect, useState } from 'react'
import './Pagination.css';
import useDarkTheme from '../../hooks/DarkTheme';

function Pagination() {
  let [product, setProduct] = useState([]);
  let [limit, setLimit] = useState(200);
  let [currentPage, setCurrentPage] = useState(1);
  let [truncateValue, setTruncateValue] = useState(0);

  useEffect(() => {
    loadApiData();
  }, []);

  useDarkTheme({className: 'dark'})

  async function loadApiData() {
    let resp = await fetch(`https://dummyjson.com/products?limit=${limit}`).then((resp) => resp.json());
    setProduct(resp.products);
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-xl font-bold m-10'>Pagination Table</h1>
      <div>
        <table>
          <thead>
            <th className='flex flex-row gap-2'>
              <tr>
                Images
              </tr>
              <tr>Description</tr>
            </th>
          </thead>
          {
            product.slice(currentPage * 10 - 10, currentPage * 10).map((ele) => (
              <tbody>
                <td className='flex flex-row gap-2'>
                  <tr>{<img src={`${ele.images[0]}`} height={50} width={50}></img>}</tr>
                  <tr>{ele.description}</tr>
                </td>
              </tbody>
            ))
          }
        </table>
      </div>
      <div className='flex flex-row p-10'>
        {currentPage > 1 &&
          <button
            style={{
              padding: '20px',
              color: 'black',
              backgroundColor: 'ButtonShadow',
              border: '1px solid rgb(102, 102, 102)',
            }}
            onClick={() => { setCurrentPage(currentPage - 1) }}
          >
            {`<`}
          </button>
        }
        {currentPage > 10 &&
          <button
            style={{
              padding: '20px',
              color: 'black',
              backgroundColor: 'ButtonShadow',
              border: '1px solid rgb(102, 102, 102)',
            }}
            onClick={() => {
              setCurrentPage(currentPage - 1);
              setTruncateValue(truncateValue - 1)
            }}
          >
            {`...`}
          </button>
        }
        {Array.from({ length: limit / 20 }, (_, i) => i + 1 + truncateValue).map((ele) =>
          <>
            <button
              style={{
                padding: '20px',
                color: 'black',
                backgroundColor: 'ButtonShadow',
                border: '1px solid rgb(102, 102, 102)',
                backgroundColor: currentPage == ele ? '#f8676792' : 'ButtonShadow'
              }}
              onClick={() => { setCurrentPage(ele) }}
            >{ele}
            </button>
          </>
        )}
        {currentPage < product.length - 10 &&
          <button
            style={{
              padding: '20px',
              color: 'black',
              backgroundColor: 'ButtonShadow',
              border: '1px solid rgb(102, 102, 102)',
            }}
            onClick={() => {
              setCurrentPage(currentPage + 1);
              setTruncateValue(truncateValue + 1)
            }}
          >
            {`...`}
          </button>
        }
        {currentPage != product.length &&
          <button
            style={{
              padding: '20px',
              color: 'black',
              backgroundColor: 'ButtonShadow',
              border: '1px solid rgb(102, 102, 102)',
            }}
            onClick={() => { setCurrentPage(currentPage + 1) }}
          >
            {`>`}
          </button>
        }
      </div>
    </div>
  )
}

export default Pagination
