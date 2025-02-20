import React, { useMemo, useState } from 'react'
import { ShoppingCartContext } from '../../context/Context';
import StarRating from '../StarRating/StarRating';

const Products = ({
    products,
    currentPage,
    setCurrentPage,
    sortType,
    includeStock,
    currentRating,
    searchBox,
    dispatchCart,
    cartItems
}) => {
    let filteredProducts = useMemo(() => {
        let filteredProduct = products;

        if (sortType != '') {
            filteredProduct = filteredProduct.sort((a, b) => sortType == 'asc' ? a.price - b.price : b.price - a.price)
        }
        if (!includeStock) {
            filteredProduct = filteredProduct.filter((ele) => !ele.inStock);
        }
        if (currentRating !== 0) {
            filteredProduct = filteredProduct.filter((ele) => ele.rating == currentRating);
        }
        if (searchBox !== '') {
            filteredProduct = filteredProduct.filter((ele) => ele.title.toLowerCase().includes(String(searchBox).toLowerCase()));
        }
        setCurrentPage(1);
        return filteredProduct;
    }, [sortType, includeStock, currentRating, products, searchBox]);

    return (
        <div>
            <div className='grid grid-cols-1 shopping-item md:grid-cols-3 flex-1 my-3 mx-2'>
                {
                    (filteredProducts.length > 0) ?
                        filteredProducts.slice(currentPage * 10 - 10, currentPage * 10).map((ele, index) => {
                            let alreadyAdded = cartItems.some((e) => e.id == ele.id);

                            const handleClick = (ele) => {
                                if (alreadyAdded) {
                                    dispatchCart({
                                        type: 'REMOVE_FROM_CART',
                                        payload: ele
                                    })
                                } else {
                                    dispatchCart({
                                        type: 'ADD_TO_CART',
                                        payload: ele
                                    })
                                }
                            }

                            return (<div key={index} className='flex flex-col items-center bg-gray-800 p-4 m-2 rounded-lg gap-2'>
                                <img src={ele.thumbnail} alt={ele.title} className='h-32 w-32 object-cover mx-auto mb-2' />
                                <span className='text-white'>{'Item Name: ' + ele.title}</span>
                                <span className='text-white'>{'Price: ' + ele.price}</span>
                                <StarRating shoppingCart={true} numberOfStars={5} currentRating={ele.rating} />
                                <button
                                    className={`py-2 my-2 px-3 bg-slate-600 text-md rounded-md text-white ${ele.inStock ? 'disabled' : ''}`}
                                    disabled={ele.inStock}
                                    onClick={() => handleClick(ele)}
                                    type='button'>{ele.inStock ? 'Out Of Stock' : alreadyAdded ? `Remove From Cart` : `Add To Cart`}
                                </button>
                            </div>)
                        }
                        ) : (
                            <span className="text-white">No products found</span>
                        )
                }
            </div>
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}

const Pagination = ({ currentPage, setCurrentPage }) => {
    return (
        <div className='flex flex-row py-10 px-4 items-center justify-center'>
            {currentPage > 1 &&
                <button
                    style={{
                        padding: '20px',
                        color: 'black',
                        backgroundColor: 'ButtonShadow',
                        border: '1px solid rgb(102, 102, 102)',
                    }}
                    type="button"
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    {`<`}
                </button>
            }
            {Array.from({ length: 10 }, (_, i) => i + 1).map((ele) =>
                <>
                    <button
                        style={{
                            padding: '20px',
                            color: 'black',
                            backgroundColor: 'ButtonShadow',
                            border: '1px solid rgb(102, 102, 102)',
                            backgroundColor: currentPage == ele ? 'gold' : 'ButtonShadow'
                        }}
                        type="button"
                        onClick={() => setCurrentPage(ele)}
                    >{ele}
                    </button>
                </>
            )}
            {currentPage != 10 &&
                <button
                    style={{
                        padding: '20px',
                        color: 'black',
                        backgroundColor: 'ButtonShadow',
                        border: '1px solid rgb(102, 102, 102)',
                    }}
                    type="button"
                    onClick={() => { setCurrentPage(currentPage + 1) }}
                >
                    {`>`}
                </button>
            }
        </div>
    )
}

const Filters = ({
    sortType,
    includeStock,
    dispatchFilter,
    currentRating
}) => {

    let handleChange = (change, changeType = '') => {
        if (changeType == 'sort') {
            dispatchFilter({
                type: 'FILTER_BY_SORT',
                payload: change
            })
        } else if (changeType == 'checkbox') {
            dispatchFilter({
                type: 'INCLUDE_OUT_OF_STOCK',
                payload: change
            })
        } else if (changeType == 'rating') {
            dispatchFilter({
                type: 'FILTER_BY_RATING',
                payload: change
            })
        } else if (changeType == 'reset') {
            dispatchFilter({
                type: 'RESET',
                payload: change
            })
        }
    }

    return (
        <div className='flex shopping-cart flex-col gap-2 max-w-80 p-4 border-l-gray-800'>
            <span className='text-white text-lg font-bold my-2'>Filter ⏳</span>
            <div className='flex flex-row items-center gap-1'>
                <input className='cursor-pointer custom-radio' type='radio' onChange={() => handleChange('asc', 'sort')} checked={sortType == 'asc' ? true : false} />
                <label className="block text-md font-medium text-gray-900 dark:text-white">{`Ascending`}</label>
            </div>
            <div className='flex flex-row items-center gap-1'>
                <input className='cursor-pointer custom-radio' type='radio' onChange={() => handleChange('desc', 'sort')} checked={sortType == 'desc' ? true : false} />
                <label className="block text-md font-medium text-gray-900 dark:text-white" >{`Descending`}</label>
            </div>
            <div className='flex flex-row items-center my-2 gap-1'>
                <input className='cursor-pointer' type='checkbox' checked={includeStock} onChange={(event) => handleChange(event.target.checked, 'checkbox')} />
                <label className="block text-md font-medium text-gray-900 dark:text-white">{`Include out of stock products`}</label>
            </div>
            <div className='flex flex-row items-center my-2 gap-2'>
                <label className="block text-md font-medium text-gray-900 dark:text-white">{`Rating`}</label>
                <StarRating shoppingCart={true} numberOfStars={5} currentRating={currentRating} onChange={handleChange} />
            </div>
            <div className='flex flex-row items-center my-2 gap-2'>
                <button className='py-1 px-3 bg-slate-600 text-md rounded-md text-white' type='button' onClick={() => handleChange('', 'reset')}>Clear Filters</button>
            </div>
        </div>
    )
}

const Cart = ({ cartItems, dispatchCart }) => {

    const handleClick = (ele) => {
        dispatchCart({
            type: 'REMOVE_FROM_CART',
            payload: ele
        })
    }

    let totalPrice = useMemo(()=>{
        let totalPrice = cartItems.reduce((acc, currentVal) => acc += currentVal.price, 0);
        return totalPrice;
    }, [cartItems]);

    return (
        <div>
            <div className='grid grid-cols-1 shopping-item md:grid-cols-3 flex-1 my-3 mx-2'>
                {
                    (cartItems.length > 0) ?
                        cartItems.map((ele, index) =>
                            <div key={index} className='flex flex-col items-center bg-gray-800 p-4 m-2 rounded-lg gap-2'>
                                <img src={ele.thumbnail} alt={ele.title} className='h-32 w-32 object-cover mx-auto mb-2' />
                                <span className='text-white'>{'Item Name: ' + ele.title}</span>
                                <span className='text-white'>{'Price: ' + ele.price}</span>
                                <StarRating shoppingCart={true} numberOfStars={5} currentRating={ele.rating} />
                                <button
                                    className={`py-2 my-2 px-3 bg-slate-600 text-md rounded-md text-white ${ele.inStock ? 'disabled' : ''}`}
                                    disabled={ele.inStock}
                                    onClick={() => handleClick(ele)}
                                    type='button'>{`Remove From Cart`}
                                </button>
                            </div>
                        ) : (
                            <span className="text-white">Cart Is Empty.</span>
                        )
                }
            </div>
            <div className='flex flex-row p-4 items-center justify-center'>
                <span className="text-white font-bold">{`Total Price: ₹ ${totalPrice}`}</span>
            </div>
        </div>
    )
}

function ECommerceBody({ page }) {
    let [currentPage, setCurrentPage] = useState(1);
    let {
        state: {
            products
        },
        filterState: {
            sortType,
            searchBox,
            includeStock,
            currentRating
        },
        dispatchFilter,
        cartState: {
            cartItems
        },
        dispatchCart,
    } = ShoppingCartContext();

    return (
        <div className='flex flex-row'>
            <Filters
                sortType={sortType}
                includeStock={includeStock}
                dispatchFilter={dispatchFilter}
                currentRating={currentRating}
            />
            <div className='border border-gray-500 my-4'></div>
            {(page == 'product') ? <Products
                products={products}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                sortType={sortType}
                includeStock={includeStock}
                dispatchFilter={dispatchFilter}
                currentRating={currentRating}
                searchBox={searchBox}
                dispatchCart={dispatchCart}
                cartItems={cartItems}
            /> : <Cart cartItems={cartItems} dispatchCart={dispatchCart} />}
        </div>

    )
}

export default ECommerceBody
