import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./SignUp.css";
// import { FaGoogle } from "react-icons/fa";
import {
	// signInWithPopup,
	// GoogleAuthProvider,
	createUserWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const navigate = useNavigate();
	// const googleLogin = () => {
	// 	const provider = new GoogleAuthProvider();
	// 	signInWithPopup(auth, provider)
	// 		.then((result) => {
	// 			// This gives you a Google Access Token. You can use it to access the Google API.
	// 			const credential = GoogleAuthProvider.credentialFromResult(result);
	// 			const token = credential.accessToken;
	// 			// The signed-in user info.
	// 			const user = result.user;
	// 			navigate("/dashboard");
	// 			// ...
	// 		})
	// 		.catch((error) => {
	// 			// Handle Errors here.
	// 			const errorCode = error.code;
	// 			const errorMessage = error.message;
	// 			// The email of the user's account used.
	// 			const email = error.customData.email;
	// 			// The AuthCredential type that was used.
	// 			const credential = GoogleAuthProvider.credentialFromError(error);
	// 			// ...
	// 		});
	// };
	const [name, setname] = useState("");
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	// const [organization, setorg] =useState("")
	// const [department, setdept] = useState("")

	const EmailLogin = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				updateProfile(auth.currentUser, {
					displayName: name,
				});
				// ...
				console.log(userCredential.user);
				navigate("/dashboard");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(error);
				// ..
			});
	};
	return (
		<div className="login">
		<div className="center">
		  <h1>Sign Up</h1>
		  <form onSubmit={EmailLogin}>
			<div className="txt_field">
			  <input type="text" onChange={(e) => setname(e.target.value)} required />
			  <span></span>
			  <label>Full Name</label>
			</div>
			<div className="txt_field">
			  <input type="email" onChange={(e) => setemail(e.target.value)} required />
			  <label>Email</label>
			</div>
			<div className="txt_field">
			  <input type="password" onChange={(e) => setpassword(e.target.value)} required />
			  <label>Password</label>
			  {/* <span className="pass">Show</span> */}
			</div>
			{/* <div className="txt_field">
			  <input type="organization" onChange={(e) => setorg(e.target.value)} required />
			  <label>Institute/Organization Name </label>
			</div> */}
			{/* <div className="txt_field">
			  <input type="" onChange={(e) => setdept(e.target.value)} required/>
			  <label>Department Name</label>
			</div> */}
			<button className="btn" onClick={EmailLogin}>
							Sign up
			</button>
		  </form>
		  <div className="signup_link">
			Already have an account? <a href="/login">Log in</a>
		  </div>
		</div>
	  </div>
		
	);
};

export default SignUp;
