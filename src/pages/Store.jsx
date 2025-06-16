import { useContext, useEffect, useState } from "react";
import Banners from "../components/Banners";
import Hero from "../components/Hero";
import Products from "../components/Products";
import { CartContext } from "../context/CartContext";
import { get } from "../services/httpService";

const store = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    get("products").then((res) => {
      console.log("products", res.data);
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      <Hero />
      <Products products={products} />
      <Banners />
    </div>
  );
};

export default store;
