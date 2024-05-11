import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import "../styles/food-details.css";
import ProductCard from "../components/UI/product-card/ProductCard";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import fetchProductsFromFirestore from "../assets/Fakedata/products.js";

const FoodDetails = () => {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();

  // Fetch product from Firestore using id
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProductsFromFirestore();
        const foundProduct = products.find((p) => p.id === id);
        setProduct(foundProduct);
        // related products based on category
        const related = products.filter(
          (product) =>
            product.category === foundProduct.category && product.id !== id
        );
        setRelatedProducts(related);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [id]);

  // add item to cart
  const addItemToCart = () => {
    if (product) {
      dispatch(
        cartActions.addItem({
          id: product.id,
          title: product.title,
          price: product.price,
          img: product.img,
        })
      );
    }
  };

  //to go to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return <div>Loading...</div>; // Render loading state until product data is fetched
  }

  const { title, price, category, description, img } = product;

  return (
    <Helmet title="FoodDetails">
      <CommonSection title={title} />

      <section>
        <Container>
          <Row>
            <Col lg="5" md="5">
              <div className="product-main-img">
                <img src={img} alt="" className="w-100" />
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
                <button onClick={addItemToCart}>Add to cart</button>
              </div>
            </Col>
            <Col lg="12">
              <div className="tab d-flex align-items-center ">
                <h5 className="desc">Description</h5>
              </div>
              <div className="desc-content">
                <p>{description}</p>
              </div>
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related-product-title">You might also like</h2>
            </Col>
            {relatedProducts.map((item) => (
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
