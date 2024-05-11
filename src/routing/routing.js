import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Food from "../pages/food";
import FoodDetails from "../pages/food_details";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";
import Contact from "../pages/contact";
import AddItem from "../pages/add_item_page";

const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/home" />}></Route>
			<Route path="/home" element={<Home />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/register" element={<Register />}></Route>
			<Route path="/admin" element={<AddItem />}></Route>
			<Route path="/food" element={<Food />}></Route>
			<Route path="/food/:id" element={<FoodDetails />}></Route>
			<Route path="/cart" element={<Cart />}></Route>
			<Route path="/checkout" element={<Checkout />}></Route>
			<Route path="/contact" element={<Contact />}></Route>
		</Routes>
	);
};

export default Routing;
