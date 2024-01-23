import { MENUS } from "../actions/actionTypes";

const initialState = {
    menus: []
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case MENUS:
            return {
                ...state,
                menus: action.payload
            };
        default:
            return state;
    }
};

export default menuReducer;