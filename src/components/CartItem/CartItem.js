import { useContext } from "react";
import { Context } from "../../Context";

const CartItem = ({ cart }) => {
  const { removeFromCart } = useContext(Context);
  return (
    <div>
      <div className="cart-item">
        <i
          onClick={() => removeFromCart(cart.id)}
          className="ri-delete-bin-line"
        ></i>
        <img src={cart.url}  alt="" />
        <p>$5.99</p>
      </div>
    </div>
  );
};

export default CartItem;
