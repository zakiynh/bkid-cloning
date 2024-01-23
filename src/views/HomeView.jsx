import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../components/Carousel";
import { fetchSlides } from "../store/actions/actionCreator";
import ItemCard from "../components/ItemCard";

export default function HomeView() {
  const dispatch = useDispatch();
  const slides = useSelector((state) => state.slides);

  useEffect(() => {
    dispatch(fetchSlides());
  }, [dispatch]);

  return (
    <div>
      <Carousel autoSlide slides={slides} />

      {/* content */}
      <div className="container mt-5">
        <h2 className="text-center mb-5 menu-title">Our Menu</h2>
        <div className="index">
          <div className="row g-4">
            <ItemCard />
          </div>
        </div>
      </div>
    </div>
  );
}
