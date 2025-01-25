import { useState } from "react";

const Carousel = ({
  images = ["http://pets-images.dev-apis.com/pets/none.jpg"],
}) => {
  const [active, setActive] = useState(0);

  return (
    <div className="carousel">
      <img src={images[active]} alt="animal" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          <img
            src={photo}
            alt="animal thumbnail"
            key={photo}
            className={index === active ? "active" : ""}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
