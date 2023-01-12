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

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addToCart,
        cartItems,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
