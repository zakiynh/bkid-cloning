import { SET_SLIDES, MENUS, GET_CART, ADD_TO_CART, DELETE_CART } from "./actionTypes";
import swalToast from "../../helpers/swal";

export const setSlides = (slides) => ({
    type: SET_SLIDES,
    payload: slides
});

export function fetchSlides() {
    return async function (dispatch) {
        try {
            const response = await fetch("http://localhost:8000/slides");
            const data = await response.json();
            dispatch(setSlides(data));
        } catch (error) {
            console.log(error);
        }
    };
}

export const setMenus = (menus) => ({
    type: MENUS,
    payload: menus
})

export function fetchMenus() {
    return async function (dispatch) {
        try {
            const response = await fetch("http://localhost:8000/menus");
            const data = await response.json();
            dispatch(setMenus(data));
        } catch (error) {
            console.log(error);
        }
    };
}

export const setCart = (cart) => ({
    type: GET_CART,
    payload: cart
})

export function fetchCart() {
    return async function (dispatch) {
        try {
            const response = await fetch("http://localhost:8000/cart");
            const data = await response.json();
            dispatch(setCart(data));
        } catch (error) {
            console.log(error);
        }
    };
}

export const addToCart = (cart) => ({
    type: ADD_TO_CART,
    payload: cart
})

export function postCart(menuData, quantity) {
    return async function (dispatch) {
        try {
            const response = await fetch("http://localhost:8000/cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({menuData, quantity}),
            });

            if (response.ok) {
                const { id, menuData } = await response.json();

                const formattedCartItem = {
                    name: menuData.name,
                    quantity: menuData.quantity,
                    price: menuData.price * menuData.quantity,
                    imageUrl: menuData.imageUrl,
                }

                const cartResponse = await fetch("http://localhost:8000/cart");
                const updatedCart = await cartResponse.json();

                dispatch(addToCart(updatedCart));
                swalToast("success", "Item Added to cart")
            } else {
                swalToast("error", "Failed to add item to cart")
            }
        } catch (error) {
            console.log(error);
        }
    };
}

export const deleteCart = (cart) => ({
    type: DELETE_CART,
    payload: cart
})

export function removeFromCart(id) {
    return async function (dispatch) {
        try {
            console.log("id action creator: ", id);
            const response = await fetch(`http://localhost:8000/cart/${id}`, {
                method: "DELETE",
            });

            console.log("Delete response:", response);

            if (response.ok) {
                dispatch(deleteCart(id));
                swalToast("success", "Item deleted from cart")
            } else {
                swalToast("error", "Failed to delete item from cart")
            }
        } catch (error) {
            console.log(error);
        }
    };
}