import React, { useRef, useState } from 'react';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import '../pages/index.css';
import { useNavigate } from 'react-router-dom';

const Twopage = () => {
  const navigate = useNavigate();

  // Refs for form inputs
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const zipRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState('');

  const validateInputs = (): boolean => {
    if (!firstNameRef.current?.value.trim() || !lastNameRef.current?.value.trim()) {
      setError('First name va Last name bo\'sh bo\'lmasligi kerak!');
      return false;
    } else if (!emailRef.current?.value.trim() || !emailRef.current?.value.includes('@')) {
      setError('Email to\'g\'ri formatda bo\'lishi kerak!');
      return false;
    } else if (!addressRef.current?.value.trim()) {
      setError('Address bo\'sh bo\'lmasligi kerak!');
      return false;
    } else if (!cityRef.current?.value.trim()) {
      setError('City bo\'sh bo\'lmasligi kerak!');
      return false;
    } else if (!zipRef.current?.value.trim()) {
      setError('Zip bo\'sh bo\'lmasligi kerak!');
      return false;
    } else if (!telRef.current?.value.trim()) {
      setError('Telefon raqam bo\'sh bo\'lmasligi kerak!');
      return false;
    }
    setError('');
    return true;
  };

  const handthree = (event: React.FormEvent): void => {
    event.preventDefault();
    if (validateInputs()) {
      // Collect form data into an object
      const formData = {
        firstName: firstNameRef.current?.value,
        lastName: lastNameRef.current?.value,
        email: emailRef.current?.value,
        address: addressRef.current?.value,
        city: cityRef.current?.value,
        zip: zipRef.current?.value,
        tel: telRef.current?.value,
      };

      // Save to localStorage
      localStorage.setItem('formDataTwopage', JSON.stringify(formData));

      navigate('/threepage');
    }
  };

  return (
    <div>
      <div className="onepar">
        <Header />
      </div>
      <div className="display conta">
        <div className="chart">
          <Main />
        </div>
        <div className="twopar">
          <div className="dfthree conta">
            <form onSubmit={handthree}>
              <label>Name</label> <br />
              <div className="inpdf">
                <input
                  ref={firstNameRef}
                  type="text"
                  placeholder="FirstName"
                />
                <input
                  ref={lastNameRef}
                  type="text"
                  placeholder="Lastname"
                />
              </div>
              <br />
              <div className="emainld">
                <label>Email</label> <br />
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="Email"
                />
              </div>
              <br />
              <label>Address</label> <br />
              <input
                ref={addressRef}
                type="text"
                placeholder="address line1"
              /> <br />
              <input
                type="text"
                placeholder="address line2"
              /> <br />
              <input
                ref={cityRef}
                type="text"
                placeholder="City"
              /> <br />
              <input
                ref={zipRef}
                type="text"
                placeholder="Zip"
              /> <br />
              <input
                ref={telRef}
                type="tel"
                placeholder="Tel:"
              /> <br />
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <button type="submit">Continue</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Twopage;
