import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import "./prodDescription.css";

const ProductDescription = () => {
  const { id } = useParams();
  const ID = Number(id);

  const { addToCart, cartItems, products } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div>
      {products
        .filter((product) => product.id === ID)
        .map((product) => (
          <div className="desc-wrapper">
            <div className="desc-top">
              <img
                src={product.image}
                alt="prod"
                width={500}
                height={500}
                className="desc-img"
              />
              <div className="desc-heading">
                <p className="desc-title">{product.title}</p>
                <p className="desc-price">${product.price}</p>
                <button className="addToCartBttn" onClick={() => addToCart(id)}>
                  Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                </button>
              </div>
            </div>
            <p className="desc-description">{product.description}</p>
          </div>
        ))}
    </div>
  );
};

export default ProductDescription;
