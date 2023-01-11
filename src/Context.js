import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems,setCartItems] = useState([]);

  const toggleFavorite = (id) => {
    setAllPhotos((prevPhotos) => {
      return prevPhotos.map((photo) =>
        photo.id === id ? { ...photo, isFavorite: !photo.isFavorite } : photo
      );
    });
  };

  const addCart = (newItem) => {
    setCartItems(prevCartItems => [...prevCartItems,newItem]);
  }
  console.log(cartItems);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  return (
    <Context.Provider value={{ allPhotos, toggleFavorite,addCart }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
