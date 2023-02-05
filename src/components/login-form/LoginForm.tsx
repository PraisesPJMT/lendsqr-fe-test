import React, { useState } from 'react';
import './LoginForm.scss';

const initialErrorMessage = { email: '', password: '' };
const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const PWD_REGEX = /^[A-z0-9!@#$%-_]{6,24}$/;

const LoginForm = () => {
  const [pwdVisible, setPwdVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [error, setError] = useState(initialErrorMessage);

  const validateEmail = () => {
    if (!email) {
      setError((prev) => ({ ...prev, email: 'Email is required!' }));
      return false;
    }

    if (!EMAIL_REGEX.test(email)) {
      setError((prev) => ({
        ...prev,
        email: 'Email is must be a valid email address!',
      }));
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setError((prev) => ({ ...prev, password: 'Password is required!' }));
      return false;
    }

    return true;
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const v1 = validateEmail();
    const v2 = validatePassword();

    if (v1 && v2) {
      // Use state values of email & password
      // to perform login function via API

      // redirect to dashboard
      console.log(email, password);
    }
  };

  const updateEmail = (emailVal: string) => {
    setError(initialErrorMessage);
    setEmail(emailVal);
  };

  const updatePassword = (passwordVal: string) => {
    setError(initialErrorMessage);
    setPassword(passwordVal);
  };

  return (
    <form id="login-form">
      <h1>Welcome!</h1>
      <p>Enter details to login.</p>
      <div className="input-field">
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => updateEmail(e.target.value)}
          aria-invalid={email ? 'false' : 'true'}
          aria-describedby="eamilNote"
          required
        />
        {error.email ? (
          <p id="emailNote" className="error">
            {error.email}
          </p>
        ) : (
          ''
        )}
      </div>

      <div className="input-field">
        <input
          type={pwdVisible ? 'text' : 'password'}
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => updatePassword(e.target.value)}
          aria-invalid={password ? 'false' : 'true'}
          aria-describedby="pwdNote"
          required
        />
        <button
          type="button"
          className="password-btn"
          onClick={() => setPwdVisible((prev) => !prev)}
        >
          {pwdVisible ? 'HIDE' : 'SHOW'}
        </button>
        {error.password ? (
          <p id="pwdNote" className="error">
            {error.password}
          </p>
        ) : (
          ''
        )}
      </div>
      <a href="/login" className="link">
        Forgot PASSWORD?
      </a>
      <button type="submit" className="btn primary-btn" onClick={handleSubmit}>
        LOG IN
      </button>
    </form>
  );
};

export default LoginForm;
