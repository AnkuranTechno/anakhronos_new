import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import toast, { Toaster } from 'react-hot-toast';
//import '../Login/SignUp.css';
import './anakhronosEvent.scss'
import { EventQRcode } from '../../constants/images';

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
    UPI: '',
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
      <div className="login-anakhronos">
        <div className="center-anakhronos">
          <h1>Anakhronos Event Registration</h1>
          <h3>Add payment screenshot at the end</h3>
          <h3>UPI - 8336877281@ybl</h3>
          <h3>UPI - 8336877281@axl</h3>
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
                type='tel'
                minLength={10}
                maxLength={10}
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
                type='tel'
                required
                minLength={10}
                maxLength={10}
                onChange={(e) =>
                  setformdata({ ...formdata, Contact: e.target.value })
                }
              />
              <span></span>
              <label>Contact No.</label>
            </div>
            <div className="txt_field">
              <select required>
                <option value="">--Please choose an event--</option>
                <option value="Sur Tarang">Sur Tarang(Rs.100)</option>
                <option value="Step Up">Step Up(Rs. 100)</option>
                <option value="Club Feet">Club Feet(Rs. 500)</option>
                <option value="Panache">Panache (Rs. 50/person)</option>
                <option value="2mins2fame" disabled>2mins2fame</option>
                <option value="BandBox" disabled>BandBox</option>
                <option value="Impression" disabled>Impression</option>
                <option value="Short Film Making" disabled>Short Film Making</option>
                <option value="Art and Craft" disabled>Art and Craft</option>
              </select>

              {/* <input
                required
                type="text"
                onChange={(e) =>
                  setformdata({ ...formdata, Event: e.target.value })
                }
              /> */}
              {/* <label>Anakhronos Event</label> */}
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
            {/* <div className="txt_field">
              <input
                required
                type="text"
                onChange={(e) =>
                  setformdata({ ...formdata, UPI: e.target.value })
                }
              />
              <span></span>
              <label>UPI ID</label>
            </div> */}
            <div className="txt_field">
              <input
                required
                type="file"
                onChange={(e) =>
                  setformdata({ ...formdata, Screenshot: e.target.value })
                }
              />
            </div>
            {/* <img className="txt_field" src={EventQRcode} alt='QR'/> */}
            <div className='buttons'>
              <button type="submit" className="btn">
                Submit
              </button>
            
              <a href={EventQRcode} download>
                Download QR to Pay
              </a>
             
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default AnakhronosEventform;
