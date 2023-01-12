import { useContext, useState } from "react";
import { Context } from "../../Context";
import PropTypes from "prop-types";

const Image = ({ img, className }) => {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, addToCart, cartItems } = useContext(Context);

  const heartIcon = () => {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  };

  const cartIcon = () => {
    const alreadyInCart = cartItems.find((cart) => cart.id === img.id);
    if (alreadyInCart) {
      return <i  className="ri-shopping-cart-fill cart"></i>;
    } else if (hovered) {
      return (
        <i onClick={() => addToCart(img)} className="ri-add-circle-line cart"></i>
      );
    }
  };

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className="image-grid" src={img.url} alt="" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
