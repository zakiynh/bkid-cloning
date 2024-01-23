import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides,
}) {
  const [curr, setCurr] = useState(0);
  const currRef = useRef(curr);

  useEffect(() => {
    currRef.current = curr;
  }, [curr]);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.slides.length - 1 : curr - 1));

  const next = () => {
    setCurr((curr) => {
      const nextIndex = currRef.current + 1;
      return nextIndex < slides.slides.length ? nextIndex : 0;
    });
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  if (!slides || !slides.slides || slides.slides.length === 0) {
    return <div>No slides available</div>;
  }

  return (
    <>
      <div className="position-relative">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-inner">
            {slides &&
              slides.slides &&
              slides.slides.map((img, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === curr ? "active" : ""}`}
                >
                  <img
                    src={img.imageUrl}
                    className="d-block w-100"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
            onClick={prev}
            style={{
              color: "#ED7801",
              background: "rgba(255, 255, 255, 0.5)",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              position: "absolute",
              top: "50%",
              left: "70px",
              transform: "translateY(-50%)",
            }}
          >
            <FaChevronLeft size={40} />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
            onClick={next}
            style={{
              color: "#ED7801",
              background: "rgba(255, 255, 255, 0.5)",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              position: "absolute",
              top: "50%",
              right: "70px",
              transform: "translateY(-50%)",
            }}
          >
            <FaChevronRight size={40} />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="position-absolute custom-bottom start-50 translate-middle-x">
        <div className="d-flex">
          {slides &&
            slides.slides &&
            slides.slides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`rounded-circle mx-2 ${
                  curr === i ? "bg-dot-primary" : "bg-dot-secondary"
                }`}
                aria-current={curr === i ? "true" : "false"}
                onClick={() => setCurr(i)}
                style={{ width: "10px", height: "10px" }}
              ></button>
            ))}
        </div>
      </div>
    </>
  );
}
