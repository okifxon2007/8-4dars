import React, { useRef, useState } from 'react';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import '../pages/index.css';
import { useNavigate } from 'react-router-dom';

const Fifepage = () => {
  const navigate = useNavigate();
  const smsRef = useRef<HTMLInputElement>(null);
  const authenticatorAppRef = useRef<HTMLInputElement>(null);
  

  const [error, setError] = useState<string>('');

  const validateInputs = (): boolean => {
    if (!smsRef.current?.value.trim()) {
      setError('SMS option bo\'sh bo\'lmasligi kerak!');
      return false;
    } else if (!authenticatorAppRef.current?.value.trim()) {
      setError('Authenticator app option bo\'sh bo\'lmasligi kerak!');
      return false;
    }
    setError('');
    return true;
  };

  const handleContinue = (event: React.FormEvent): void => {
    event.preventDefault();
    if (validateInputs()) {
    
      const formData = {
        sms: smsRef.current?.value,
        authenticatorApp: authenticatorAppRef.current?.value,
      };

     
      localStorage.setItem('formDataFivepage', JSON.stringify(formData));

      navigate('/footerpage');
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
            <form onSubmit={handleContinue}>
              <div className="emainld">
                <label>Keep your account secure</label> <br />
                <input
                  ref={smsRef}
                  type="text"
                  placeholder="Use SMS"
                /> <br />
                <input
                  ref={authenticatorAppRef}
                  type="text"
                  placeholder="Use an authenticator app"
                />
              </div>
              <br />
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <button type="submit">Continue</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifepage;
