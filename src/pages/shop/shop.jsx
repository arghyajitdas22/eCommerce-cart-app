import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Product } from "./product";
import "./shop.css";
import { ShopContext } from "../../context/shop-context";
import heroImg from "../../assets/hero-section.png";
import pedestal from "../../assets/pedestal.png";
import watch from "../../assets/watch.png";
import camera from "../../assets/camera.png";
import hat from "../../assets/hat.png";
import sneakers from "../../assets/sneakers.png";

export const Shop = () => {
  const { products, setProducts } = useContext(ShopContext);

  const fetchProductDetails = async () => {
    const options = {
      method: "GET",
      url: "https://fakestoreapi.com/products?limit=20",
    };

    try {
      const response = await axios.request(options);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <div className="shop">
      <div className="hero-section">
        <img src={heroImg} alt="hero-sec-img" className="hero-bg-img" />
        {/* pedestal */}
        <img src={pedestal} alt="pedestal-img" className="hero-img pedestal" />
        {/* watch */}
        <img
          src={watch}
          width={175}
          height={175}
          alt="pedestal-img"
          className="hero-img watch"
        />
        {/* camera */}
        <img
          src={camera}
          width={150}
          height={150}
          alt="pedestal-img"
          className="hero-img camera"
        />
        {/* hat */}
        <img
          src={hat}
          width={130}
          height={130}
          alt="pedestal-img"
          className="hero-img hat"
        />
        {/* sneakers */}
        <img
          src={sneakers}
          width={180}
          height={180}
          alt="pedestal-img"
          className="hero-img sneakers"
        />

        <div className="hero-text">
          <p className="hero-heading">Welcome to E-Commerce Space</p>

          <p className="hero-description">
            See the amazing list of products below!
          </p>
        </div>
      </div>

      <p className="product-content">Top Deals for You!!</p>

      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            productName={product.title}
            productImage={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
