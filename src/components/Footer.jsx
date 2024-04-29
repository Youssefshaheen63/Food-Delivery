import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import logo from "../assets/images/res-logo.png";
import "../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer-logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                Tasty Treat serves fresh, delicious food in a lively atmosphere,
                perfect for any occasion with friends, family, or colleagues.
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer-title">Delivery Time</h5>
            <ListGroup className="delivery-time-list">
              <ListGroupItem className=" delivery-time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 12:00am</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery-time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>11:00am - 11:00pm</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer-title">Contact</h5>
            <ListGroup className="delivery-time-list">
              <ListGroupItem className=" delivery-time-item border-0 ps-0">
                <span>Location: Heliopolis, Cairo, Egypt</span>
              </ListGroupItem>
              <ListGroupItem className=" delivery-time-item border-0 ps-0">
                <span>Phone: 01140096695</span>
              </ListGroupItem>
              <ListGroupItem className=" delivery-time-item border-0 ps-0">
                <span>Email: food-delivery@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer-title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright-text">
              Copyright - 2024, website made by Software team. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social-links d-flex align-items-center gap-4 ">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                <Link to="https://www.facebook.com/" className="no-underline">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>
              <span>
                <Link to="https://www.instagram.com/" className="no-underline">
                  <i class="ri-instagram-line"></i>
                </Link>
              </span>
              <span>
                {" "}
                <Link to="https://twitter.com/" className="no-underline">
                  <i class="ri-twitter-x-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
