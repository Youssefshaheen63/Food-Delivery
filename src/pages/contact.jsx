import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import logo from "../assets/images/res-logo.png";
import "../styles/contact.css";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";

const Contact = () => {
  return (
    <body >
    <div className="contact">
      <Container>
        <Row>
          <Col lg="12" md="4" sm="6">
            <div className=" contact__logo text-start">
              {/* <img src={logo} alt="logo" /> */}
              <h2>Tasty Treat</h2>
              <p>
              Tasty Treat offers delicious food prepared with fresh ingredients by a skilled culinary team. 
              Its lively yet upscale atmosphere makes it perfect for dining with friends, 
              family, or colleagues, whether enjoying a full-course meal or grabbing drinks and pizza at the bar.
              </p>
            </div>
          </Col>
          </Row>
          <Row>

<<<<<<< HEAD
          <Col lg="3" md="4" sm="6">
            <h5 className="contact_title">Delivery Time</h5>
            <ListGroup className="deliver__list">
              <ListGroupItem className=" delivery__item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>11:00am - 11:00pm</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="contact_title">Contact</h5>
            <ListGroup className="deliver__list">
              <ListGroupItem className=" delivery__item border-0 ps-0">
                <p>Location: Helipolis, Cairo , Egypt.</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__item border-0 ps-0">
                <span>Phone: </span>
                <p>01140096695</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__item border-0 ps-0">
                <span>Email: </span>
                <p>Tasty-Treat@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          </Row>
          <Row>
          <Col lg="3" md="4" sm="6">
            <h5 className="email_title"> Newsletter</h5>
            <p className=" ">Subscribe our newsletter</p>
            <div className="news_letter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright_text">
              Copyright - 2024, website made by software team . All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social_links d-flex align-items-center gap-4 justify-content-end">
              <p className=" follow m-0">Follow: </p>
              <span>
                {" "}
                <Link to="https://www.facebook.com/" className="no-underline">
                  <i class="ri-facebook-fill"></i>
                </Link>{" "}
              </span>
              <span>
                <Link to="https://www.instagram.com/" className="no-underline">
                  <i class="ri-instagram-line"></i>
                </Link>
              </span>
              <span>
                {" "}
                <Link to="https://twitter.com/" className="no-Underline">
                  <i class="ri-twitter-x-fill"></i>
                </Link>{" "}

              </span>
            </div>
          </Col>
        </Row>
        </Container>
    </div>
    </body>
  );
=======
								<ListGroupItem className=" delivery__time-item border-0 ps-0">
									<span>Friday - Saturday</span>
									<p>11:00am - 11:00pm</p>
								</ListGroupItem>
							</ListGroup>
						</Col>

						<Col lg="3" md="4" sm="6">
							<h5 className="contact__title">Contact</h5>
							<ListGroup className="deliver__time-list">
								<ListGroupItem className=" delivery__time-item border-0 ps-0">
									<p>Location: Helipolis, Cairo , Egypt.</p>
								</ListGroupItem>
								<ListGroupItem className=" delivery__time-item border-0 ps-0">
									<span>Phone: 01140096695</span>
								</ListGroupItem>

								<ListGroupItem className=" delivery__time-item border-0 ps-0">
									<span>Email: Tasty-Treat@gmail.com</span>
								</ListGroupItem>
							</ListGroup>
						</Col>
					</Row>
					<Row>
						<Col lg="3" md="4" sm="6">
							<h5 className="email__title"> Newsletter</h5>
							<p className=" ">Subscribe our newsletter</p>
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
							<p className="copyright__text">
								Copyright - 2024, website made by software team . All Rights
								Reserved.
							</p>
						</Col>
						<Col lg="6" md="6">
							<div className="social__links d-flex align-items-center gap-4 justify-content-end">
								<p className=" follow m-0">Follow: </p>
								<span>
									{" "}
									<Link to="https://www.facebook.com/" className="no-underline">
										<i class="ri-facebook-fill"></i>
									</Link>{" "}
								</span>
								<span>
									<Link
										to="https://www.instagram.com/"
										className="no-underline"
									>
										<i class="ri-instagram-line"></i>
									</Link>
								</span>
								<span>
									{" "}
									<Link to="https://twitter.com/" className="no-underline">
										<i class="ri-twitter-x-fill"></i>
									</Link>{" "}
								</span>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</Helmet>
	);
>>>>>>> origin/shopping-cart
};



export default Contact;
