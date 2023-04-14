import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import toast, { Toaster } from 'react-hot-toast';
import '../Login/SignUp.css';

const AnakhronosEventform = () => {
  // const [loc, setloc] = useState("");
  const [formdata, setformdata] = useState({
    Name: '',
    Gender: '',
    Contact: '',
    Whatsapp: '',
    Email: '',
    Event: '',
    College: '',
    Screenshot: '',
  });

  const SendData = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'anakhronosEvents'), formdata);
      console.log('Document written with ID: ', docRef.id);
      toast.success('Event for Anakhronos Registered');
    } catch (error) {
      toast.error('Currently We are down');
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
          className: '',
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <div className="login">
        <div className="center">
          <h1>Anakhronos Event Registration</h1>
          <h3>Add payment screenshot at the end</h3>
          <form onSubmit={SendData}>
            <div className="txt_field">
              <input
                type="text"
                required
                onChange={(e) =>
                  setformdata({ ...formdata, Name: e.target.value })
                }
              />
              <span></span>
              <label>Full Name </label>
            </div>
            <div className="txt_field">
              <input
                required
                type="text"
                onChange={(e) =>
                  setformdata({ ...formdata, Gender: e.target.value })
                }
              />
              <span></span>
              <label>Gender</label>
            </div>
            <div className="txt_field">
              <input
                required
                type="email"
                onChange={(e) =>
                  setformdata({ ...formdata, Email: e.target.value })
                }
              />
              <span></span>
              <label>Email</label>
            </div>
            <div className="txt_field">
              <input
                required
                onChange={(e) =>
                  setformdata({ ...formdata, Whatsapp: e.target.value })
                }
              />
              <span></span>
              <label>Whatsapp No.</label>
            </div>
            <div className="txt_field">
              <input
                required
                onChange={(e) =>
                  setformdata({ ...formdata, Contact: e.target.value })
                }
              />
              <span></span>
              <label>Contact No.</label>
            </div>
            <div className="txt_field">
              <input
                required
                type="text"
                onChange={(e) =>
                  setformdata({ ...formdata, Event: e.target.value })
                }
              />
              <span></span>
              <label>Anakhronos Event</label>
            </div>
            <div className="txt_field">
              <input
                required
                type="text"
                onChange={(e) =>
                  setformdata({ ...formdata, College: e.target.value })
                }
              />
              <span></span>
              <label>College Name</label>
            </div>
            <div className="txt_field">
              <input
                required
                type="file"
                onChange={(e) =>
                  setformdata({ ...formdata, Screenshot: e.target.value })
                }
              />
              <span></span>
              {/* <label>Add Payment Sreenshot</label> */}
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default AnakhronosEventform;
