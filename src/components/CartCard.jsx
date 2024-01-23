import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, removeFromCart } from "../store/actions/actionCreator";

const CartCard = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const getSubtotal = () => {
    if (Array.isArray(cart) && cart.length > 0) {
      const subtotal = cart.reduce(
        (total, item) => {
          const cartItem = item.menuData || item;
          return total + cartItem.price * cartItem.quantity;
        },
        0
      );
      return subtotal.toLocaleString("id-ID");
    } else {
      return "0";
    }
  }

  const handleCancelOrder = (id) => {
    console.log("cancel order");
    console.log("id: ", id);
    if (id) {
      dispatch(removeFromCart(id));
    } else {
      console.error("Invalid ID. Unable to cancel order.");
    }
  };

  return (
    <div>
      {cart.map((cartData) => {
        const cartItem = cartData.menuData || cartData;
        console.log("cartItem: ", cartData.id);
        return (
          <div key={cartData.id} className="card mb-3 w-100">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={cartItem.imageUrl}
                  alt={cartItem.name}
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8 col-12">
                <div className="card-body">
                  <h5 className="card-title">{cartItem.name}</h5>
                </div>
                <div className="d-flex justify-content-between" style={{ width: "50%" }}>
                  <p className="card-text">Quantity: {cartItem.quantity}</p>
                  <p className="card-text">
                    Price: Rp. {cartItem.price.toLocaleString("id-ID")}
                  </p>
                </div>
                <div>
                  <p className="card-text mt-auto">
                    Total Price: Rp.{" "}
                    {(cartItem.price * cartItem.quantity).toLocaleString("id-ID")}
                  </p>
                </div>
                  <button
                    className="btn btn-danger"
                    style={{ marginTop: "4%" }}
                    onClick={() => handleCancelOrder(cartData.id)}
                  >
                    Cancel Order
                  </button>
              </div>
            </div>
          </div>
        );
      })}
            <div>
                <hr />
                <h4 className="card-price">
                  Subtotal: Rp. {getSubtotal()}
                </h4>
            </div>
    </div>
  );
};

export default CartCard;