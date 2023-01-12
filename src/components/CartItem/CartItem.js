import { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../../Context";
import UseHover from "../../hooks/useHover";

const CartItem = ({ cart }) => {
  const { removeFromCart } = useContext(Context);
  const [hovered, ref] = UseHover();

  const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div>
      <div className="cart-item">
        <i
          onClick={() => removeFromCart(cart.id)}
          ref={ref}
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
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
