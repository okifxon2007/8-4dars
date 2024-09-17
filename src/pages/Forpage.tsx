import React, { useRef, useState } from 'react';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import '../pages/index.css';
import { useNavigate } from 'react-router-dom';

const Forpage = () => {
  const navigate = useNavigate();


  const companyNameRef = useRef<HTMLInputElement>(null);
  const companyTypeRef = useRef<HTMLSelectElement>(null);
  const companyRegistrationRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState('');

  const validateInputs = (): boolean => {
    if (!companyNameRef.current?.value.trim()) {
      setError('Company name bosh bolmasligi kerak!');
      return false;
    } else if (!companyTypeRef.current?.value.trim() || companyTypeRef.current?.value === 'Select company type') {
      setError('Company type tanlanishi kerak!');
      return false;
    } else if (!companyRegistrationRef.current?.value.trim()) {
      setError('Company registration number bosh bolmasligi kerak!');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    if (validateInputs()) {
      
      const formData = {
        companyName: companyNameRef.current?.value,
        companyType: companyTypeRef.current?.value,
        companyRegistration: companyRegistrationRef.current?.value,
      };

      localStorage.setItem('formDataFourpage', JSON.stringify(formData));

      navigate('/fifepage');
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
            <form onSubmit={handleSubmit}>
              <label>Company Name</label> <br />
              <input
                ref={companyNameRef}
                type="text"
                placeholder="Company Name"
              /> <br />
              <label>Company Type</label> <br />
              <select ref={companyTypeRef}>
                <option>Select company type</option>
                <option>Type1</option>
                <option>Type2</option>
              </select> <br />
              <label>Company Registration Number</label> <br />
              <input
                ref={companyRegistrationRef}
                type="text"
                placeholder="Registration Number"
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

export default Forpage;
