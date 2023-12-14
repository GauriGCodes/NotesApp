import Header from "../components/Header.js";
import main from "../assets/main.svg";
import "./css/Landing.css";
import { Link } from 'react-router-dom';

const Landing = () => {
   return <div>
    <Header />
    <div className="container page">
        <div className="info">
            <h1 className="main-heading">
                Notes <span>App</span>
            </h1>
            <p>
                Save your thoughts, wherever you are
            </p>
            <Link to="/register" className='btn register-link'>Register</Link>
            <Link to="/login" className='btn'>Login</Link>
        </div>
        <img src={main} alt="Notes taking images" className="img main-img" />
    </div>
    </div>;
};


export default Landing;