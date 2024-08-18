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