import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../store/actions/actionCreator";
import { Popover } from "bootstrap";

export default function Navbar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  useEffect(() => {
    var popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
  
    if (popoverTriggerList.length > 0) {
      var popover = new Popover(popoverTriggerList[0], {
        html: true,
        content: getPopoverContent(),
      });
  
      popoverTriggerList.forEach((popoverTriggerEl) => {
        popoverTriggerEl.addEventListener("mouseenter", function () {
          if (popover) {
            popover.hide();
            popover.config.content = getPopoverContent();
            popover.show();
          }
        });
      });
    }
  }, [cart]);

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
  };

  const getPopoverContent = () => {
    if (Array.isArray(cart) && cart.length > 0) {
      return `
        <div class="cart-popover">
          ${cart
            .map((item) => {
              const cartItem = item.menuData || item;
              return `
                  <div class="cart-item d-flex align-items-center">
                    <img src="${cartItem.imageUrl}" alt="${
                cartItem.name
              }" class="cart-item-image" />
                    <div class="cart-item-details d-flex flex-column">
                      <div class="cart-item-name">
                        ${cartItem.name}
                        <button class="delete-button" onclick="handleDelete('${
                          cartItem.id
                        }')">Delete</button>
                      </div>
                      <div class="cart-item-quantity">x${
                        cartItem.quantity
                      }</div>
                      <div class="cart-item-price">Rp. ${cartItem.price.toLocaleString("id-ID")}</div>
                    </div>
                  </div>
                `;
            })
            .join("")}
            <div class="subtotal d-flex justify-between">
            <div class="subtotal-label">Subtotal:</div>
            <div class="subtotal-value">Rp. ${getSubtotal()}</div>
          </div>
        </div>
      `;
    } else {
      return "Your cart is empty.";
    }
  };

  const handleClickCart = () => {
    console.log("click cart");
    navigate("/cart");
  }

  return (
    <div className="header-block">
      <div className="container">
        <nav
          className="navbar navbar-expand-lg bg-transparent"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="/images/burgerking-logo.png" alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <div className="nav-link nav-left" aria-current="page" to="/">
                    <span
                      style={{
                        display: "flex",
                        color: "#FAAF18",
                        fontSize: "15px",
                        lineHeight: "1",
                      }}
                    >
                      Delivery
                    </span>
                    <span
                      style={{
                        display: "flex",
                        color: "white",
                        fontSize: "30px",
                        lineHeight: "1",
                      }}
                    >
                      Order
                    </span>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link nav-left" to="/category-item">
                    <span
                      style={{
                        display: "flex",
                        color: "#FAAF18",
                        fontSize: "15px",
                        lineHeight: "1",
                      }}
                    >
                      Get Fresh
                    </span>
                    <span
                      style={{
                        display: "flex",
                        color: "white",
                        fontSize: "30px",
                        lineHeight: "1",
                      }}
                    >
                      Promotions
                    </span>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-left" href="#">
                    <span
                      style={{
                        display: "flex",
                        color: "#FAAF18",
                        fontSize: "15px",
                        lineHeight: "1",
                      }}
                    >
                      Exclusive
                    </span>
                    <span
                      style={{
                        display: "flex",
                        color: "white",
                        fontSize: "30px",
                        lineHeight: "1",
                      }}
                    >
                      Large Order
                    </span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    href=""
                    className="login nav-link nav-left"
                    style={{ padding: "25px 0" }}
                  >
                    Login
                  </a>
                </li>
                <li onClick={handleClickCart} className="nav-item">
                  <a
                    href="#"
                    className="cart nav-link d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "#ed7801",
                      height: "100%",
                      alignItems: "center",
                    }}
                    data-bs-toggle="popover"
                    data-bs-trigger="hover"
                    data-bs-placement="bottom"
                    title="Cart"
                    data-bs-content="Your cart items will be displayed here."
                  >
                    <img src="/images/burgerking-cart.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
