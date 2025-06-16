import "./App.css";
import { Routes, Route } from "react-router";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import  CartProvider  from "./context/CartContext";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
