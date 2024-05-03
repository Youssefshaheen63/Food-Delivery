import React, { useState } from "react";
import { Container } from "reactstrap";
import logo from "../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import "../styles/header.css";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../store/shopping-cart/cartUiSlice";

const nav_items = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "Food",
    path: "/food",
  },
  {
    title: "Cart",
    path: "/cart",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const totalQuantity =  useSelector(state => state.cart.totalQuantity);
  
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(cartUiActions.toggle())
  }

  return (
    <header className="header sticky-top ">
      <Container>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>

          <div className={`navigation ${isMenuOpen ? "show_menu" : ""}`}>
            <div className="menu d-flex align-items-center gap-4">
              {nav_items.map((item, index) => (
                <NavLink to={item.path} key={index} onClick={toggleMenu}>
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="nav_right d-flex align-items-center gap-3">
            <span className="cart_icon" onClick={toggleCart}>
              <i className="ri-shopping-cart-line"></i>
              <span className="cart_quantity">{totalQuantity}</span>
            </span>
            <span className="user">
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            </span>
            <span className="mobile_menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
