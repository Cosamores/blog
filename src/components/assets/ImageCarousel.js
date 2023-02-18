import React, { useState } from "react";
import "./ImageCarousel.css"

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex);
  };

  const nextImage = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex === images.length ? 0 : newIndex);
  };

  return (
    <div className="ImageCarousel">
      <button className="ImageCarousel-button left" onClick={previousImage}>
        {"<"}
      </button>
      <div className="ImageCarousel-inner">
        {images.map((image, index) => (
          <img
            key={image.alt}
            src={image.src}
            alt={image.alt}
            className={`ImageCarousel-image ${
              index === currentIndex ? "active" : ""
            }`}
            style={{
              transform: `translateX(${
                index === currentIndex ? 0 : (index < currentIndex ? "-100%" : "100%")
              })`,
            }}
          />
        ))}
      </div>
      <button className="ImageCarousel-button right" onClick={nextImage}>
        {">"}
      </button>
    </div>
  );
};

export default ImageCarousel;
