import React from "react";
import { useState } from "react";
import { useContext } from "react";
import CartItem from "../../components/CartItem/CartItem";
import { Context } from "../../Context";

const Cart = () => {
  const [buttonText, setButtonText] = useState("Place order");
  const { cartItems, emptyCart } = useContext(Context);

  const totalCost = (5.99 * cartItems.length).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const orderPlace = () => {
    setButtonText("Ordering...");
    setTimeout(() => {
      setButtonText("Order being placed");
      emptyCart();
    }, 3000);
  };

  const cartItemsElements = cartItems.map((cart) => (
    <CartItem key={cart.id} cart={cart} />
  ));

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemsElements}
      <p className="total-cost">Total: {totalCost} </p>
      {cartItems.length ? (
        <div className="order-button">
          <button onClick={orderPlace}>{buttonText}</button>
        </div>
      ) : (
        <p>You Have No Items In Your Cart</p>
      )}
    </main>
  );
};

export default Cart;
