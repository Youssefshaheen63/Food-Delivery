import React,{UseRef} from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const signupNameRef = UseRef();
  const signupPasswordRef = UseRef();
  const signupEmailRef = UseRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };
  
  return(
    <>
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef}/>
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef} />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef}/>
                </div>
                <button type="submit" className="addTOCart__btn">
                  Sign Up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>

            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Register;
