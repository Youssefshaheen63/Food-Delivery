import React, { useContext, useState } from "react"; //enable the use of JSX syntax and React hooks
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "./../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap"; //library for Bootstrap components implemented as React components
import { Link, useNavigate } from "react-router-dom"; //enable navigation to other routes
import "../styles/login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { AuthContext } from "../context/authcontext";

const Login = () => {
  //hook used to reference the input elements for email and password
  //,this allows referencing the document object model directly
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navitage = useNavigate();
  
  // Function used to defined to handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          toast.success("User logged Successfully", {
            position: "top-center",
          });

          dispatch({ type: "LOGIN", payload: user });
          if (email === "admin@tastytreat.com") {
            navitage("/admin");
          } else {
            navitage("/home");
          }
        }
      );
    } catch (error) {
      toast.success("Invalid email and password", {
        position: "top-center",
      });
    }
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container className="all">
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/*button to sign in */}
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              {/*go to sign up page */}
              <Link to="/register" className="register-link">
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