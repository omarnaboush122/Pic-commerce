import Header from "./components/header/Header";
import Photos from "./pages/photos/Photos";
import Cart from "./pages/cart/Cart";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/Pic-commerce" element={<Photos/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  ) ;
}

export default App;