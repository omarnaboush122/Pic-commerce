

const CartItem = ({cart}) => {
  return (
    <div>
      <div className="cart-item">
            <i className="ri-delete-bin-line"></i>
            <img src={cart.url} width="130px" alt="" />
            <p>$5.99</p>
        </div>
    </div>
  );
}

export default CartItem;
