import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const toggleFavorite = (id) => {
    setAllPhotos((prevPhotos) => (
      prevPhotos.map((photo) =>
        photo.id === id ? { ...photo, isFavorite: !photo.isFavorite } : photo
    )))
  };

  const addToCart = (newItem) => {
    setCartItems((prevCartItems) => [...prevCartItems, newItem]);
  };

  const removeFromCart = (id) => {
    setCartItems(prevCartItems => (
      prevCartItems.filter(cart => cart.id !== id)
    ))
  }

  const emptyCart = () => {
    setCartItems([]);
  }
  
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
      
      setCartItems(JSON.parse(localStorage.getItem("cartitems")))
  }, []);

  useEffect(() => {
    localStorage.setItem("cartitems",JSON.stringify(cartItems));
  },[cartItems])

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        cartItems,
        addToCart,
        removeFromCart,
        emptyCart
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
