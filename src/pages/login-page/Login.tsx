import Logo from '../../assets/lendsqr_logo.svg';
import LoginImage from '../../assets/pablo-sign-in.svg';
import LoginForm from '../../components/login-form/LoginForm';
import './Login.scss';

const Login = () => {
  return (
    <main className="login-section">
      <div>
        <img className="logo" src={Logo} alt="Lendsqr Logo" />
        <img className="login-image" src={LoginImage} alt="Login Image" />
      </div>
      <LoginForm />
    </main>
  );
};

export default Login;
