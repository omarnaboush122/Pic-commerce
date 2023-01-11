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
      {hovered && <i className="ri-heart-line favorite"></i>}
      {hovered && <i className="ri-add-circle-line cart"></i>}
    </div>
  );
};

export default Image;
