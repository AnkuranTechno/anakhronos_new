import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import toast, { Toaster } from "react-hot-toast";
import Layout from "../Layout/Layout";
import './form.scss'

const AnakhronosEventform = () => {
  const [loc, setloc] = useState("");
  const [formdata, setformdata] = useState({
    Name: "",
    Gender: "",
    Contact:"",
    Whatsapp: "",
    Email: "",
    Event: "",
    College: "",
    Screenshot: "",
  });

  const SendData = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "anakhronosEvents"), formdata);
      console.log("Document written with ID: ", docRef.id);
      toast.success("Event Anakhronos registered");
    } catch (error) {
      toast.error("Currently We are down");
    }
  };
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <Layout>
        <div className="flex justify-center">
          <form className="w-full max-w-sm mt-40" onSubmit={SendData}>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-400 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Full Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  onChange={(e) =>
                    setformdata({ ...formdata, Name: e.target.value })
                  }
                  type="text"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-400 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-password"
                >
                  Gender
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-password"
                  type="text"
                  placeholder="Male"
                  onChange={(e) =>
                    setformdata({ ...formdata, Gender: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-400 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-password"
                >
                  Email
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-password"
                  type="email"
                  onChange={(e) =>
                    setformdata({ ...formdata, Email: e.target.value })
                  }
                  placeholder="sxd@gmail.com"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-400 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-password"
                >
                  Phone No.
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-password"
                  type="number"
                  placeholder="9343894832"
                  onChange={(e) =>
                    setformdata({ ...formdata, Contact: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-400 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-password"
                >
                Whatsapp No.
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-password"
                  type="number"
                  placeholder="9343894832"
                  onChange={(e) =>
                    setformdata({ ...formdata, Whatsapp: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-400 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-password"
                >
                Events
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-password"
                  type="text"
                  placeholder="Anakhronos Events"
                  onChange={(e) =>
                    setformdata({ ...formdata, Event: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-400 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-password"
                >
                College 
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-password"
                  type="text"
                  placeholder="College Name"
                  onChange={(e) =>
                    setformdata({ ...formdata, College: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6"></div>
            <div className="md:flex md:items-center md:justify-center">
              <div className="flex justify-center">
                <button
                  className="shadow w-40 bg-testred hover:bg-testred focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};
export default AnakhronosEventform;