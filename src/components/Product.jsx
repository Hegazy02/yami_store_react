import React, { memo } from "react";
import { toast } from "react-hot-toast";

const Product = memo(({ product, addToCart, state }) => {
  console.log("Product rendered");

  const handleAddToCart = () => {
    addToCart({ type: "ADD_TO_CART", payload: product });
    showToast();
  };
  const showToast = () => {
    if (!state.items.some((item) => item.id === product.id)) {
      toast.success("Product added to cart!");
    }
  };
  return (
    <div className="card bg-base-100 shadow-sm w-full">
      <figure className="relative">
        <div className="badge badge-secondary absolute top-2 left-2">{product.category}</div>

        <img src={product.image} alt={product.title} className="h-48 w-full" />
      </figure>

      <div className="card-body">
        <header className="flex justify-between">
          <h2 className="card-title">
            {product.title.length > 20
              ? product.title.slice(0, 20) + "..."
              : product.title}
            {product.isNew && <div className="badge badge-secondary">NEW</div>}
          </h2>
          <h3 className="card-title">${product.price}</h3>
        </header>
        <p>
          {product.description.length > 40
            ? product.description.slice(0, 40) + "..."
            : product.description}
        </p>

        <div className="card-actions justify-between items-center mt-2">
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
});

export default Product;
