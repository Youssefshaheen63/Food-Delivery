import React from "react";
import Footer from "../components/Footer";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Col, Container, Row } from "reactstrap";
import "../styles/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const Tr = (props) => {
    const { id, title, price, image01, quantity } = props.item;
    const dispatch = useDispatch();
    const deleteItem = () => {
      dispatch(cartActions.deleteItem(id));
    };
    return (
      <tr className="text-center">
        <td className="cart-img-container">
          <img src={image01} alt="product-img" />
        </td>
        <td>{title}</td>
        <td>${price}</td>
        <td>{quantity}x</td>
        <td className="delete-item-btn">
          <i class="ri-delete-bin-line" onClick={deleteItem}></i>
        </td>
      </tr>
    );
  };

  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col>
              {cartProducts.length === 0 ? (
                <h5 className="text-center">Your Cart is Empty</h5>
              ) : (
                <table className="table table-bordered">
                  <thead className="text-center">
                    <tr className="table-header">
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="bottom">
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <p className="shipping-description">Shipping will be calculated at Checkout</p>
                <div className="d-flex gap-3">
                  <button>
                    <Link to="/food">
                      Continue Shopping
                    </Link>
                  </button>
                  <button>
                    <Link to="/checkout">
                      Proceed to Checkout
                    </Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Helmet>
  );
};

export default Cart;
