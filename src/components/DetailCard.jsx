import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { postCart } from "../store/actions/actionCreator";
import { useDispatch } from "react-redux";

export default function DetailCard() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { menuData } = state;
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = async () => {
    const dataToSend = {
      name: menuData.name,
      recipe: menuData.recipe,
      price: menuData.price,
      imageUrl: menuData.imageUrl,
      quantity: quantity,
    };
    await dispatch(postCart(dataToSend));
  };

  return (
    <div
      className="d-flex align-items-start justify-content-center vh-100"
      style={{ paddingTop: "25vh" }}
    >
      <div
        className="card text-start"
        style={{ width: "40rem", maxWidth: "90%" }}
      >
        <div className="row g-0">
          <div className="col-md-8">
            <div className="p-3">
              <h3 className="card-text">{menuData.name}</h3>
              <p className="card-p">{menuData.recipe}</p>
            </div>
            <img
              src={menuData.imageUrl}
              className="img-fluid"
              alt={menuData.name}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-md-4 d-flex flex-column p-3">
            <h4 className="card-price">
              Rp. {menuData.price.toLocaleString("id-ID")}
            </h4>
            <div className="input-group mb-3">
              <button
                onClick={handleDecrease}
                className="btn btn-outline-warning border-end-0"
              >
                -
              </button>
              <input
                type="text"
                className="form-control text-center border-warning border-end-0 border-start-0"
                value={quantity}
                style={{ fontFamily: "FlameRegular" }}
                readOnly
              />
              <button
                onClick={handleIncrease}
                className="btn btn-outline-warning border-start-0"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="btn"
              style={{
                backgroundColor: "#ed7801",
                color: "white",
                fontFamily: "FlameRegular",
              }}
            >
              Add to Cart
            </button>
            <div className="mt-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
