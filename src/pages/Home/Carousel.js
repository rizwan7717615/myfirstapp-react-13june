import React from "react";

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators carosuselStyling">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
            // style={{
            //   height: "0.7rem",
            //   width: "0.7rem",
            //   borderRadius: "49%",
            //   backgroundColor: "red",
            //   border: "1px solid white",
            // }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            // style={{
            //   height: "0.7rem",
            //   width: "0.7rem",
            //   borderRadius: "49%",
            //   backgroundColor: "red",
            //   border: "1px solid white",
            // }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            // style={{
            //   height: "0.7rem",
            //   width: "0.7rem",
            //   borderRadius: "49%",
            //   backgroundColor: "red",
            //   border: "1px solid white",
            // }}
          ></button>
        </div>
        <div id="heightCarousel" className="carousel-inner">
          <div className="carousel-item active ">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              className="d-block w-100 "
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              src="https://cdn.pixabay.com/photo/2017/07/24/12/43/schrecksee-2534484__340.jpg"
              className="d-block w-100 "
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2015/03/22/23/07/bora-bora-685303__340.jpg"
              className="d-block w-100 "
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
