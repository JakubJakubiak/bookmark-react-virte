import { useEffect, useState } from 'react';
import iconError from "./images/icon-error.svg"

import './syles/EmailAndTimer.sass';

const EmailAndTimer = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [counter, setCounter] = useState(35000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter -25 : 0));
    }, 10);

    return () => clearInterval(intervalId);
  }, []); 



  const validateForm = () => {
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(pattern)) {
      setIsValid(true);
      setEmail('');
      return true;
    } else {
      setIsValid(false);
      return false;
    }
  };



  return (
    <section className={`contact ${isValid ? 'valid' : 'invalid'}`}>
      <h3>{counter} already joined</h3>
      <h4>Stay up-to-date with what<br /> we’re doing</h4>

      <form
        action="#"
        autoComplete="off"
        id="formbox"
        className="inputspan"
        onSubmit={(e) => {
          e.preventDefault();
          validateForm();
        }}
      >
      <input
      type="text"
      required
      placeholder="Enter your email address"
      id="email"
      data-protonpass-base-css={{ paddingRight: '' }}
    />
    <span id="alert">{isValid ? '' : 'Whoops, make sure it\'s an email'}</span>
        <img
          src={iconError}
          alt="error icon"
          className={`error ${isValid ? '' : 'visible'}`}
          id="img"
        />
        <button type="submit">Contact Us</button>
        
      </form>
    </section>
  );
};

export default EmailAndTimer;
