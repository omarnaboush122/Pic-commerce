import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../Context";

const CartItem = ({ cart }) => {
  const { removeFromCart } = useContext(Context);
  const [hover, setHover] = useState(false);

  const iconClassName = hover ? "fill" : "line";

  return (
    <div>
      <div className="cart-item">
        <i
          onClick={() => removeFromCart(cart.id)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`ri-delete-bin-${iconClassName}`}
        ></i>
        <img src={cart.url} alt="" />
        <p>$5.99</p>
      </div>
    </div>
  );
};

export default CartItem;
