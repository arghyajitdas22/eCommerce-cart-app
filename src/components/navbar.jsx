import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import NavIcon from "./svg/NavIcon";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <NavIcon />
      </div>

      <div className="links">
        <Link to="/"> Products </Link>
        <Link to="/cart" className="cart-section">
          <ShoppingCart size={28} />
          <span>Cart</span>
        </Link>
      </div>
    </div>
  );
};
