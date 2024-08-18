export const productReducer = (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            };
        default:
            return
    }
}

export const filterReducer = (state, action) => {
    switch (action.type) {
        case 'FILTER_BY_SORT': return { ...state, sortType: action.payload };
        case 'INCLUDE_OUT_OF_STOCK': return { ...state, includeStock: action.payload };
        case 'FILTER_BY_RATING': return { ...state, currentRating: action.payload };
        case 'FILTER_BY_SEARCH': return { ...state, searchBox: action.payload };
        case 'RESET': return {
            ...state,
            searchBox: '',
            includeStock: false,
            sortType: '',
            currentRating: 0,
        };
        default: return
    }
}