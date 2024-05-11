import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navitage = useNavigate();
	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			const user = auth.currentUser;
			console.log(user);
			console.log("user Registered Successfully");

			toast.success("User Registered Successfully", {
				position: "top-center"
			});
			navitage("/login");
		} catch (error) {
			console.log(error.message);
			toast.error(error.message, {
				position: "top-center"
			});
		}
	};

	return (
		<Helmet title="Signup">
			<CommonSection title="Signup" />
			<section>
				<Container>
					<Row>
						<Col lg="6" md="6" sm="12" className="m-auto text-center">
							<form className="form mb-5" onSubmit={submitHandler}>
								<div className="form__group">
									<input
										type="fullname"
										placeholder="Full name"
										required
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
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
								<button type="submit" className="addTOCart__btn">
									Sign Up
								</button>
								<ToastContainer />
							</form>
							<Link to="/login">Already have an account? Login</Link>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Register;