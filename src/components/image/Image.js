import { useContext, useState } from "react";
import { Context } from "../../Context";

const Image = ({ img, className, id }) => {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite } = useContext(Context);

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className="image-grid" src={img} alt="" />
      {hovered && (
        <i
          onClick={() => toggleFavorite(id)}
          className="ri-heart-line favorite"
        ></i>
      )}
      {hovered && <i className="ri-add-circle-line cart"></i>}
    </div>
  );
};

export default Image;
