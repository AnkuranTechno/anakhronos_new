// import React, { useState } from "react";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../firebase/firebase";
// import toast, { Toaster } from "react-hot-toast";
// import Layout from "../components/Layout/Layout";

// const AnakhronosEventform = () => {
//   const [loc, setloc] = useState("");
//   const [formdata, setformdata] = useState({
//     Name: "",
//     Gender: "",
//     Contact:"",
//     Whatsapp: "",
//     Email: "",
//     Event: "",
//     College: "",
//     Screenshot: "",
//   });

//   const SendData = async (e) => {
//     e.preventDefault();
//     try {
//       const docRef = await addDoc(collection(db, "Events"), formdata);
//       console.log("Document written with ID: ", docRef.id);
//       toast.success("Event Anakhronos registered");
//     } catch (error) {
//       toast.error("Currently We are down");
//     }
//   };
//   return (

//       </Layout>
//   );
// };

// export default AnakhronosEventform;
