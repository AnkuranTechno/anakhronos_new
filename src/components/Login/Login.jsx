import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
// import "../../pages/anakhronos/sections/About/About.scss"
import { FaGoogle } from "react-icons/fa";
import {
	signInWithPopup,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const googleLogin = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				navigate("/dashboard");
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	};
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");

	const EmailLogin = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				navigate("/dashboard")
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};
	return (
		<div className="login">
		<div className="center">
		  <h1>Login</h1>
		  <div className="google-login" onClick={googleLogin}>
			<FaGoogle className="google-icon" />
			<span> Login with Google </span>
		  </div>
		  <form onSubmit={EmailLogin}>
			<div className="txt_field">
			  <input
				type="email"
				required
				value={email}
				onChange={(e) => setemail(e.target.value)}
			  />
			  <span></span>
			  <label>Email</label>
			</div>
			<div className="txt_field">
			  <input
				type="password"
				required
				value={password}
				onChange={(e) => setpassword(e.target.value)}
			  />
			  <span></span>
			  <label>Password</label>
			</div>
			<button type="submit" className="btn" onClick={EmailLogin}>
			  Login
			</button>
			<div className="signup_link">
			  Don't have an account? <Link to="/signup">Sign Up</Link>
			</div>
		  </form>
		</div>
	  </div>
	);
};

export default Login;