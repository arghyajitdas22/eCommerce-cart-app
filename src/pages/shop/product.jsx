import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";

export const Product = ({ id, productName, productImage, price }) => {
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <Link to={`/ProductDescription/${id}`}>
        <div className="prod-img-container">
          <img src={productImage} className="product-img" />
        </div>
        <div className="description">
          <p className="product-title">{productName}</p>
          <p className="product-price"> ${price}</p>
        </div>
      </Link>

      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
