import "./App.css";
import { Routes, Route } from "react-router";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import CartProvider from "./context/CartContext";
import PageNotFound from "./pages/PageNotFound";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <CartProvider>
        <div>
          <Toaster />
        </div>

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
