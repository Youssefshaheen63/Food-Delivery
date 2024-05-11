import React from "react";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

import Category from "../components/UI/category/Category";
import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import Testimonialslider from "../components/UI/slider/TestimonialSlider.jsx";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import featureImag01 from "../assets/images/service-01.png";
import featureImag02 from "../assets/images/service-02.png";
import featureImag03 from "../assets/images/service-03.png";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";
import "../styles/landing.css";
import "../styles/home.css";
import { Link } from "react-router-dom";
import fetchProductsFromFirestore from "../assets/Fakedata/products.js";

const featureData = [
	{
		title: "Quick Delivery",
		ImagUrl: featureImag01,
		desc: "Fast food delivery at your door step in just 30 minutes."
	},
	{
		title: "Super Dine In",
		ImagUrl: featureImag02,
		desc: "Tasty Treat serves fresh, delicious food in a lively atmosphere."
	},
	{
		title: "Easy Pick Up",
		ImagUrl: featureImag03,
		desc: "Easy pick up and delivery. No more waiting in long line."
	}
];

const Home = () => {
	const [category, setCategory] = useState("ALL");
	const [allProducts, setAllProducts] = useState([]);
	const [hotPizza, setHotPizza] = useState([]);

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async (selectedCategory = null) => {
		try {
			const productsData = await fetchProductsFromFirestore();
			setAllProducts(productsData);
			console.log(productsData);

			if (selectedCategory && selectedCategory !== "ALL") {
				const filteredProducts = productsData.filter(
					(item) => item.category.toUpperCase() === selectedCategory
				);
				setAllProducts(filteredProducts);
			} else {
				setAllProducts(productsData);
			}

			const filteredPizza = productsData.filter(
				(item) => item.category.toUpperCase() === "PIZZA"
			);
			const slicePizza = filteredPizza.slice(0, 4);
			setHotPizza(slicePizza);
		} catch (error) {
			console.error("Error fetching products:", error);
		}
	};

	return (
		<Helmet title="Home">
			<section>
				<Container>
					<Row>
						<Col lg="6" md="6">
							<div className="landing__content">
								<h5 className="mb-3">Easy way to make an order</h5>
								<h1 className="mb-4 landing__title">
									<span>HUNGRY?</span>
									Just wait <br /> food at
									<span> your door</span>
								</h1>

								<p>
									Tasty Treat serves fresh, delicious food in a lively
									atmosphere, perfect for any occasion with friends, family, or
									colleagues.
								</p>
								<div className="landing__btns d-flex align-items-center gap-5 mt-4">
									<button className="order__btn d-flex align-items-center justify-content-between">
										Order now <i class="ri-arrow-right-s-line"></i>
									</button>

									<button className="all__foods-btn d-flex align-items-center justify-content-between">
										<Link to="/food">See all foods</Link>
										<i class="ri-restaurant-2-line"></i>
									</button>
								</div>
								<div className="services d-flex align-items-center gap-5 mt-5">
									<p className="d-flex align-items-center gap-2">
										<span className="shipping__icon">
											<i class="ri-car-line"></i>
										</span>
										No shipping charge
									</p>
									<p className="d-flex align-items-center gap-2">
										<span className="checkout__icon">
											<i class="ri-shield-check-line"></i>
										</span>
										100% secure checkout
									</p>
								</div>
							</div>
						</Col>
						<Col lg="6" md="6">
							<div className="hero__img">
								<img src={heroImg} alt="hero" className="w-100" />
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section>
				<Category />
			</section>
			<section className="pt-0">
				<Container>
					<Row>
						<Col lg="12" className="text-center mt-5">
							<h5 className="feature__subtitle mb-4">What we serve</h5>
							<h2 className="feature__title">Just sit back at home</h2>
							<h2 className="feature__title">
								We will <span>take care</span>
							</h2>
							<p className="mb-1 mt-4 feature__text">
								Tasty Treat offers a wide range of delicious and fresh food.
							</p>
							<p className="feature__text">
								We are constantly adding new and exciting items to our menu.
							</p>
						</Col>
						{featureData.map((item, index) => (
							<Col lg="4" md="4" key={index} className="mt-5">
								<div className="feature__item text-center px-5 , py-3">
									<img
										src={item.ImagUrl}
										alt="feature-{index}"
										className="w-25 mb-3"
									/>
									<h5 className="fw-bold mb-3">{item.title}</h5>
									<p>{item.desc}</p>
								</div>
							</Col>
						))}
					</Row>
				</Container>
			</section>
			<section>
				<Container>
					<Row>
						<Col lg="12" className="text-center ">
							<h2>Popular Foods</h2>
						</Col>
						<Col lg="12">
							<div className="food__category d-flex align-items-center justify-content-center gap-3">
								<button
									className={`all__btn  ${
										category === "ALL" ? "active__btn" : ""
									}`}
									onClick={() => {
										setCategory("ALL");
										fetchProducts(); // Call fetchProducts without any category parameter
									}}
								>
									All
								</button>
								<button
									className={`d-flex align-items-center gap-2 ${
										category === "BURGER" ? "active__btn" : ""
									} `}
									onClick={() => {
										setCategory("BURGER");
										fetchProducts("BURGER");
									}}
								>
									<img src={foodCategoryImg01} alt="" />
									Burger
								</button>

								<button
									className={`d-flex align-items-center gap-2 ${
										category === "PIZZA" ? "active__btn" : ""
									} `}
									onClick={() => {
										setCategory("PIZZA");
										fetchProducts("PIZZA");
									}}
								>
									<img src={foodCategoryImg02} alt="" />
									Pizza
								</button>

								<button
									className={`d-flex align-items-center gap-2 ${
										category === "BREAD" ? "active__btn" : ""
									} `}
									onClick={() => {
										setCategory("BREAD");
										fetchProducts("BREAD");
									}}
								>
									<img src={foodCategoryImg03} alt="" />
									Bread
								</button>
							</div>
						</Col>

						{allProducts.map((item) => (
							<Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
								<ProductCard item={item} />
							</Col>
						))}
					</Row>
				</Container>
			</section>

			<section className="why__us mt-5">
				<Container>
					<Row>
						<Col lg="6" md="6">
							<img src={whyImg} alt="Why Us" className="w-100" />
						</Col>

						<Col lg="6" md="6">
							<div className="why_us_content">
								<h2 className="why_us_title mb-4">
									Why <span>Teasty Treat?</span>
								</h2>
								<p className="why_us_desc">
									Tasty Treat is a family-owned and operated restaurant that has
									been in business since 2010.
								</p>

								<ListGroup className="mt-5">
									<ListGroupItem className=" border-0 ps-0">
										<p className="choose_us_title  d-flex align-items-center gap-2">
											<i className="ri-checkbox-circle-line"></i>Fresh and tasty
											foods
										</p>
										<p className="choose_us_desc">
											We provide the best quality of food.
										</p>
									</ListGroupItem>

									<ListGroupItem className="border-0 ps-0">
										<p className="choose_us_title  d-flex align-items-center gap-2">
											<i className="ri-checkbox-circle-line"></i>Quality support
										</p>
										<p className="choose_us_desc">
											We always try to give our best.
										</p>
									</ListGroupItem>

									<ListGroupItem className="border-0 ps-0">
										<p className="choose_us_title  d-flex align-items-center gap-2">
											<i className="ri-checkbox-circle-line"></i>Order from any
											location
										</p>
										<p className="choose_us_desc">
											You can order from anywhere.
										</p>
									</ListGroupItem>
								</ListGroup>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="pt-0 mb-5">
				<Container>
					<Row>
						<Col lg="12" className="text-center mb-5 mt-5">
							<h2>Hot Pizza</h2>
						</Col>

						{hotPizza.map((item) => (
							<Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-5">
								<ProductCard item={item} />
							</Col>
						))}
					</Row>
				</Container>
			</section>
			<section>
				<Container>
					<Row>
						<Col lg="6" md="6">
							<div className="testimonial ">
								<h5 className="testimonial__subtitle mb-4">Testimonial</h5>
								<h2 className="testimonial__title">
									What our <span>customers</span> says
								</h2>
								<p className="testimonial__desc">
									Our customers are always very happy with their food. They
									recommend us to their friends and family.
								</p>
								<Testimonialslider />
							</div>
						</Col>
						<Col lg="6" md="6">
							<img src={networkImg} alt="Network" className="w-100" />
						</Col>
					</Row>
				</Container>
			</section>
			<Footer />
		</Helmet>
	);
};

export default Home;
