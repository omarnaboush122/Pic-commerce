import React from "react";
import { useContext } from "react";
import CartItem from "../../components/CartItem/CartItem";
import { Context } from "../../Context";

const Cart = () => {
  const { cartItems } = useContext(Context);
  const cartItemsElements = cartItems.map((cart) => <CartItem key={cart.id} cart={cart} />);
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemsElements}
      <p className="total-cost">Total: </p>
      <div className="order-button">
        <button>Place Order</button>
      </div>
    </main>
  );
};

export default Cart;
