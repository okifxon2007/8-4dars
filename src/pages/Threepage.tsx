import React, { useRef, useState } from 'react';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import '../pages/index.css';
import { useNavigate } from 'react-router-dom';

const Threepage = () => {
  const navigate = useNavigate();

  const vatRef = useRef<HTMLInputElement>(null);
  const industryRef = useRef<HTMLSelectElement>(null);
  const websiteRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState('');

  const validateInputs = (): boolean => {
    if (!vatRef.current?.value.trim()) {
      setError('VAT raqami kiritilishi shart!');
      return false;
    } else if (!industryRef.current?.value.trim() || industryRef.current?.value === 'Please select your industry') {
      setError('Sohani tanlang!');
      return false;
    } else if (!websiteRef.current?.value.trim() || !websiteRef.current?.value.includes('www.')) {
      setError('To\'g\'ri web-sayt manzilini kiriting! Masalan, www.example.com');
      return false;
    }
    setError('');
    return true;
  };

  const handleNavigate = (event: React.FormEvent): void => {
    event.preventDefault();
    if (validateInputs()) {
     
      const formData = {
        vat: vatRef.current?.value,
        industry: industryRef.current?.value,
        website: websiteRef.current?.value,
      };


      localStorage.setItem('formDataThreepage', JSON.stringify(formData));

      navigate('/forpage');
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
            <form onSubmit={handleNavigate}>
              <label>VAT Number</label> <br />
              <input
                ref={vatRef}
                type="text"
                placeholder="VAT Number"
              /> <br />
              <label>Industry</label> <br />
              <select ref={industryRef}>
                <option>Please select your industry</option>
                <option>Industry1</option>
                <option>Industry2</option>
              </select> <br />
              <label>Website</label> <br />
              <input
                ref={websiteRef}
                type="text"
                placeholder="Website"
              /> <br />
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Threepage;
