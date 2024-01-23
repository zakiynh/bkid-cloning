import React, { useEffect } from "react";
import CartCard from "../components/CartCard";

export default function CartView() {
  return (
    <div>

      {/* content */}
      <div className="container mt-5">
        <h2 className="text-center mb-5 menu-title">Your Cart</h2>
        <div className="index">
          <div className="row g-4">
            <CartCard />
          </div>
        </div>
      </div>
    </div>
  );
}
