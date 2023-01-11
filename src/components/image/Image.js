import { useEffect } from "react";
import { useState } from "react";

const Image = ({ img, className }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className="image-grid" src={img} alt="" />
    </div>
  );
};

export default Image;
