import React, { useEffect, useState } from 'react'

function InfiniteScroll() {
    let [limit, setLimit] = useState(10);
    let [product, setProduct] = useState([]);
    let [loading, setLoading] = useState(false);
    useEffect(() => {
        loadApiData();
    }, []);

    async function loadApiData() {
        setLoading(true);
        let res = await fetch(`https://dummyjson.com/products?limit=${limit}`).then((resp) => 
            resp.json()
        );
        if (res.products !== "" || res.products !== undefined) {
            console.log(res.products);
            setProduct(res.products);
            setLimit(limit + 10);
            setLoading(false);
        }
    }

    function myThrottel(cb, delay) {
        let last = 0;
        return function (...args) {
            let now = new Date().getTime();
            if(now- last < delay) return;
            last = now;
            cb(...args);
        }
    }

    const handleScroll = myThrottel(() => {
        if ((window.innerHeight + document.documentElement.scrollTop + 500 < document.documentElement.offsetHeight)&& !loading) {
            loadApiData();
        }
    }, 500);

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);        
    },[handleScroll])

    return (
        <div>
            <div className='flex flex-col items-center'>
                <h1 className='text-xl font-bold mt-10'>Scroll Table</h1>
                <div>
                    <table>
                        <thead>
                            <th className='flex flex-row gap-2'>
                                <tr>Description</tr>
                            </th>
                        </thead>
                        {
                            product.map((ele, index) => (
                                <tbody key={index}>
                                    <td className='flex flex-row gap-2'>
                                        {/* <tr>{<img src={`${ele.images[0]}`} height={50} width={50}></img>}</tr> */}
                                        <tr>{ele.description}</tr>
                                    </td>
                                </tbody>
                            ))
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default InfiniteScroll
