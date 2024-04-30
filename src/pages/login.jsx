import React, { useRef } from "react"; //enable the use of JSX syntax and React hooks
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "./../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap"; //library for Bootstrap components implemented as React components
import { Link } from "react-router-dom"; //enable navigation to other routes

const Login = () => {
  //hook used to reference the input elements for email and password
  //,this allows referencing the document object model directly
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  // Function used to defined to handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input 
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
                  />
                </div>
                <div className="form__group">
                  <input 
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                  />
                </div>
              {/*button to sign in */} 
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              {/*go to sign up page */}
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
