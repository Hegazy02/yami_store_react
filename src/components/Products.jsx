import Product from "./Product";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Products = ({ products }) => {
  const [slide, setSlide] = useState({
    next: 3,
    prev: 0,
  });
  const { dispatch } = useContext(CartContext);

  const slideHandler = (direction) => {
    switch (direction) {
      case "left":
        if (slide.prev !== 0) {
          setSlide((prevValue) => ({
            prev: prevValue.prev - 1,
            next: prevValue.next - 1,
          }));
        }
        break;
      case "right":
        if (slide.next !== products.length - 1) {
          setSlide((prevValue) => ({
            prev: prevValue.prev + 1,
            next: prevValue.next + 1,
          }));
        }
        break;

      default:
        break;
    }
  };
  return (
    <>
      <div className="products px-6 mt-10" id="products">
        <h2 className="text-2xl font-bold">Products</h2>
        <div className="w-full px-[60px] relative mt-5">
          <a
            href={`#slide` + slide.next}
            className="btn btn-circle absolute right-0 top-1/2  "
            onClick={() => slideHandler("right")}
          >
            ❯
          </a>
          <a
            href={`#slide` + slide.prev}
            className="btn btn-circle absolute left-0 top-1/2  "
            onClick={() => slideHandler("left")}
          >
            ❮
          </a>
          <div className="carousel w-full flex gap-4">
            {products.map((product, index) => (
              <div
                id={`slide${index}`}
                className="carousel-item w-1/3"
                key={product.id}
              >
                <Product product={product} addToCart={dispatch} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
