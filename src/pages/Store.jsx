import { useContext, useEffect, useState } from "react";
import Banners from "../components/Banners";
import Hero from "../components/Hero";
import Products from "../components/Products";
import { CartContext } from "../context/CartContext";
import { get } from "../services/httpService";

const store = () => {
  // let products = [
  //   {
  //     id: 1,
  //     title: "Glow Snickers",
  //     price: 100,
  //     category: "Sneakers",
  //     description:
  //       "Enjoy the glow! with these sneakers. show the world how cool you are and how awesome you are",
  //     images: [
  //       "https://img.freepik.com/free-photo/white-sneakers-closeup-men-s-apparel-summer-fashion-beach-photoshoot_53876-101216.jpg?uid=R95140238&ga=GA1.1.184771343.1750067229&semt=ais_hybrid&w=740",
  //     ],
  //     isNew: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Health Snickers",
  //     price: 200,
  //     category: "Sneakers",
  //     description:
  //       "Enjoy the glow! with these sneakers. show the world how cool you are and how awesome you are",
  //     images: [
  //       "https://img.freepik.com/free-photo/shoes-sand_23-2147647050.jpg?uid=R95140238&ga=GA1.1.184771343.1750067229&semt=ais_hybrid&w=740",
  //     ],
  //     isNew: false,
  //   },
  //   {
  //     id: 3,
  //     title: "Classy Sneakers",
  //     price: 300,
  //     category: "Sneakers",
  //     description:
  //       "Enjoy the glow! with these sneakers. show the world how cool you are and how awesome you are",
  //     images: [
  //       "https://img.freepik.com/free-photo/canvas-sneakers-white-model-tying-shoelaces-apparel-ad_53876-105526.jpg",
  //     ],
  //     isNew: true,
  //   },
  //   {
  //     id: 4,
  //     title: "Glow Snickers",
  //     price: 100,
  //     category: "Sneakers",
  //     description:
  //       "Enjoy the glow! with these sneakers. show the world how cool you are and how awesome you are",
  //     image: [
  //       "https://img.freepik.com/free-photo/white-sneakers-closeup-men-s-apparel-summer-fashion-beach-photoshoot_53876-101216.jpg?uid=R95140238&ga=GA1.1.184771343.1750067229&semt=ais_hybrid&w=740",
  //     ],
  //     isNew: true,
  //   },
  //   {
  //     id: 5,
  //     title: "Health Snickers",
  //     price: 200,
  //     category: "Sneakers",
  //     description:
  //       "Enjoy the glow! with these sneakers. show the world how cool you are and how awesome you are",
  //     image: [
  //       "https://img.freepik.com/free-photo/shoes-sand_23-2147647050.jpg?uid=R95140238&ga=GA1.1.184771343.1750067229&semt=ais_hybrid&w=740",
  //     ],
  //     isNew: false,
  //   },
  // ];
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
