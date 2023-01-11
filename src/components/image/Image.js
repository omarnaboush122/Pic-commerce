import { useContext, useState } from "react";
import { Context } from "../../Context";

const Image = ({ img, className}) => {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite } = useContext(Context);

  const heartIcon = () => {
    if(img.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
    } else if(hovered) {
      return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    }
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className="image-grid" src={img.url} alt="" />
      {heartIcon()}
      {hovered && <i className="ri-add-circle-line cart"></i>}
    </div>
  );
};

export default Image;
