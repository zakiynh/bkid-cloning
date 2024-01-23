import { GET_CART, ADD_TO_CART, DELETE_CART } from "../actions/actionTypes";

const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CART:
        case ADD_TO_CART:
            return {
                ...state,
                cart: action.payload
            };
        case DELETE_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload)
            };
        default:
            return state;
    }
}

export default cartReducer;