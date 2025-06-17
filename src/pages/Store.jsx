import { useEffect, useState } from "react";
import Banners from "../components/Banners";
import Hero from "../components/Hero";
import Products from "../components/Products";
import { get } from "../services/httpService";
import CardWithImage from "../components/CardWithImage";

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
      <CardWithImage />
    </div>
  );
};

export default store;
