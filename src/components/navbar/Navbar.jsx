import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartModal from "../../shop/CartModal";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  const products = useSelector((state) => state.cart.products)
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartToggle = ()=>{
    setIsCartOpen(!isCartOpen)
  }
  const handleMenuToggle = ()=>{
    setMenuToggle(!menuToggle);
  }

  // add event listener for the header scroll

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });
  return (
    <>
    <header className={headerFixed? "header header-backgrpund-set" : "header"}>
      <div className="header-container">
        <div header-logo>
          <Link to={"/"} className="link-logo">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header-list">
          <ul>
            <li>
              <Link to="/"className="header-link">Home</Link>
            </li>
            <li>
              <Link to="/shop"className="header-link">Shop</Link>
            </li>
            <li>
              <Link to="/blog"className="header-link">Blog</Link>
            </li>
            <li>
              <Link to="/contact"className="header-link">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="header-icons">
          <span>
            <Link to="/search" className="header-link">
              <i className="ri-search-line"></i>
            </Link>
          </span>
          <span>
            <button onClick={handleCartToggle} ><i className="ri-shopping-bag-line"></i>
            <sup>{products.length}</sup>
            </button>
          </span>
          <span>
            <Link to="login" className="header-link">
            <i className="ri-user-line"></i>
            </Link>
          </span>
        </div>
        <div className="menu-icon" onClick={handleMenuToggle}>
          <i className="ri-menu-line"></i>
        </div>
      </div>
      {
        isCartOpen && <CartModal products={products} isOpen ={isCartOpen} onClose ={handleCartToggle} />
      }
    </header>
    {
      menuToggle && <div className="menu-toggle">
      <ul className="menu-toggle-list">
        <li><Link to="/"className="header-link-two">Home</Link></li>
        <li><Link to="/shop"className="header-link-two">Shop</Link></li>
        <li><Link to="/blog"className="header-link-two">Blog</Link></li>
        <li><Link to="/contact"className="header-link-two">Contact us</Link></li>
      </ul>
    </div>
    }
    
    </>
  );
};

export default Navbar;
