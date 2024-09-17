import React, { useRef, useState } from 'react';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import '../pages/index.css';
import { useNavigate } from 'react-router-dom';

const Onepage = () => {
  const navigate = useNavigate();
  const addressRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const zipRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState('');

  const validateInputs = (): boolean => {
    if (!addressRef.current?.value.trim()) {
      setError('Address bosh bolmasligi kerak!');
      return false;
    } else if (!cityRef.current?.value.trim()) {
      setError('City bosh bolmasligi kerak!');
      return false;
    } else if (!zipRef.current?.value.trim()) {
      setError('Zip bosh bolmasligi kerak!');
      return false;
    }
    setError('');
    return true;
  };

  const handtwo = (event: React.FormEvent): void => {
    event.preventDefault();

    if (validateInputs()) {

      const formData = {
        address: addressRef.current?.value,
        city: cityRef.current?.value,
        zip: zipRef.current?.value,
      };

      localStorage.setItem('formDataOnepage', JSON.stringify(formData));

      navigate('/twopage');
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
            <form onSubmit={handtwo}>
              <label>Business address</label> <br />
              <select>
                <option>Registered business address</option>
                <option>business1</option>
                <option>business2</option>
              </select> <br />
              <select>
                <label>Type</label>
                <option>Type of business</option>
                <option>business1</option>
                <option>business2</option>
              </select> <br />
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
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <button type="submit">Continue</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onepage;
