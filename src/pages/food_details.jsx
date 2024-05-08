import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import "../styles/food-details.css";
import ProductCard from "../components/UI/product-card/ProductCard";

import { useParams } from "react-router-dom";
import products from "../assets/Fakedata/products";

import { Col, Container, Row } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";

const FoodDetails = () => {
  //extracts the id parameter from the URL
  const { id } = useParams();
  //additemtocart
  const dispatch = useDispatch();

  //searching the products by the id extracted from the url
  const product = products.find((product) => product.id === id);
  //change the previewimage
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc, image01 } = product;

  //filtering the products based on the category
  const relatedProduct = products.filter((item) => category === item.category);

  //add item to cart
  const addItem = () => {
    dispatch(cartActions.addItem({ id, title, price, image01 }));
  };

  //updates the previewimage state according to the product
  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  //to go to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title="FoodDetails">
      <CommonSection title={title} />

      <section>
        <Container>
          <Row>
            <Col lg="5" md="5">
              <div className="product-main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="product-content">
                <h2 className="product-title mb-3">{title}</h2>
                <span className="product-price">
                  {" "}
                  <h6>Price: </h6>
                  <span>${price}</span>
                </span>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>
                <button onClick={addItem}>Add to cart</button>
              </div>
            </Col>
            <Col lg="12">
              <div className="tab d-flex align-items-center ">
                <h5 className="desc">Description</h5>
              </div>
              <div className="desc-content">
                <p>{desc}</p>
              </div>
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related-product-title">You might also like</h2>
            </Col>
            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Footer />
    </Helmet>
  );
};

export default FoodDetails;
