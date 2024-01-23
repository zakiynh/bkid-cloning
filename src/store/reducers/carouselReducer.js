import { SET_SLIDES } from "../actions/actionTypes";

const initialState = {
    slides: []
}

const carouselReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SLIDES:
            return {
                ...state,
                slides: action.payload
            }
        default:
            return state;
    }
}

export default carouselReducer;