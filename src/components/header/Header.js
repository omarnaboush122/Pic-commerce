import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Context";

const Header = () => {
  const {cartItems} = useContext(Context);
  const cartClassName = cartItems.length ? "fill" : "line";
  return (
    <header>
      <Link to="/Pic-commerce"><h2>Pic Some</h2></Link>
      <Link to="/cart"><i className={`ri-shopping-cart-${cartClassName} ri-fw ri-2x`}></i></Link>
    </header>
  );
};

export default Header;
