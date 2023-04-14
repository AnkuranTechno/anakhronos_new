import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { db } from '../../firebase';
import toast, { Toaster } from 'react-hot-toast';
//import '../Login/SignUp.css';
import './anakhronosEvent.scss';
import { EventQRcode } from '../../constants/images';

const AnakhronosEventform = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const validateData = () => {
    // Check if the phone number is valid
    if (formdata.Contact.length !== 10 || formdata.Whatsapp.length !== 10) {
      toast.error('Invalid Phone Number');
      return false;
    }

    // Check with the regex that the phone number is valid
    if (
      !/^\d{10}$/.test(formdata.Contact) ||
      !/^\d{10}$/.test(formdata.Whatsapp)
    ) {
      toast.error('Invalid Phone Number');
      return false;
    }

    // Check if the email is valid
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formdata.Email)) {
      toast.error('Invalid Email');
      return false;
    }

    return true;
  };

  const SendData = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsSuccess(false);
    toast.loading('Submitting the form...');
    console.log('Sumitting the form...');

    if (!validateData()) {
      setLoading(false);
      setIsSuccess(false);
      return;
    }

    // Check if the email with the same event is already registered
    const querySnapshot = await getDocs(
      query(
        collection(db, 'anakhronosEvents'),
        where('Email', '==', formdata.Email),
        where('Event', '==', formdata.Event)
      )
    );

    if (querySnapshot.size > 0) {
      toast.error('You have already registered for this event');
      setLoading(false);
      setIsSuccess(false);
      return;
    }

    // Upload the screenshot to firebase storage and get the download url
    const storage = getStorage();
    const fileName = `${formdata.Name} - ${formdata.Email} - ${formdata.Event}`;
    const storageRef = ref(storage, 'anakhronosEvents/' + fileName);
    const uploadTask = uploadBytesResumable(storageRef, formdata.Screenshot);

    console.log(formdata.Screenshot);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            toast.error('You are not authorized to upload');
            setLoading(false);
            setIsSuccess(false);
            return;
          case 'storage/canceled':
            toast.error('Upload cancelled');
            setIsSuccess(false);
            setLoading(false);
            return;
          case 'storage/unknown':
            toast.error('Unknown error occured');
            setIsSuccess(false);
            setLoading(false);
            return;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setformdata({ ...formdata, Screenshot: downloadURL });
        });
      }
    );

    try {
      // Add the data to the firestore
      const docRef = await addDoc(collection(db, 'anakhronosEvents'), formdata);
      console.log('Document written with ID: ', docRef.id);
      toast.success('Event for Anakhronos Registered');
      setIsSuccess(true);
    } catch (error) {
      console.log('Error adding document: ', error);
    }

    setLoading(false);
    toast.success('Form submitted successfully');
    console.log('Form submitted successfully');

    // Navigate to the home page only if the form is submitted successfully
    if (isSuccess) {
      setTimeout(() => {
        navigate('/anakhronos');
      }, 5000);
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
              {/* <input
                required
                type="text"
                onChange={(e) =>
                  setformdata({ ...formdata, Gender: e.target.value })
                }
              /> */}
              <select
                required
                onChange={(e) =>
                  setformdata({ ...formdata, Gender: e.target.value })
                }
              >
                <option value="">--Please choose an option--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <span></span>
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
                type="tel"
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
                type="tel"
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
              <select
                required
                onChange={(e) =>
                  setformdata({ ...formdata, Event: e.target.value })
                }
              >
                <option value="">--Please choose an event--</option>
                <option value="Sur Tarang">Sur Tarang(Rs.100)</option>
                <option value="Step Up">Step Up(Rs. 100)</option>
                <option value="Club Feet">Club Feet(Rs. 500)</option>
                <option value="Panache">Panache (Rs. 50/person)</option>
                <option value="2mins2fame" disabled>
                  2mins2fame
                </option>
                <option value="BandBox" disabled>
                  BandBox
                </option>
                <option value="Impression" disabled>
                  Impression
                </option>
                <option value="Short Film Making" disabled>
                  Short Film Making
                </option>
                <option value="Art and Craft" disabled>
                  Art and Craft
                </option>
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
            <div className="txt_field">
              <input
                required
                type="file"
                onChange={(e) =>
                  setformdata({ ...formdata, Screenshot: e.target.files[0] })
                }
              />
            </div>
            {/* <img className="txt_field" src={EventQRcode} alt='QR'/> */}
            <div className="buttons">
              <button type="submit" className="btn" disabled={loading}>
                {loading ? 'Loading...' : 'Submit'}
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
