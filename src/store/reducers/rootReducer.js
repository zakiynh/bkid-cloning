import { combineReducers } from "redux";
import carouselReducer from "./carouselReducer";
import menuReducer from "./menuReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    slides: carouselReducer,
    menus: menuReducer,
    cart: cartReducer
})

export default rootReducer;