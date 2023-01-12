import { useState ,useContext} from "react";
import PropTypes from "prop-types"
import { Context } from "../../Context";

const CartItem = ({ cart }) => {
  const { removeFromCart } = useContext(Context);
  const [hover, setHover] = useState(false);

  const iconClassName = hover ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div>
      <div className="cart-item">
        <i
          onClick={() => removeFromCart(cart.id)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={iconClassName}
        ></i>
        <img src={cart.url} alt="" />
        <p>$5.99</p>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  cart: PropTypes.shape({
      url: PropTypes.string.isRequired
  })
}

export default CartItem;
