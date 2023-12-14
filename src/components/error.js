import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/not-found.svg';
import "./css/Error.css";

const Error = () => {
    const error = useRouteError();
    if (error.status === 404) {
        return <div className='error'>
            <img className='error-img' src={img} alt="not found" />
            <h3>Ohh! Page not found</h3>
            <p>We can't seem to find the page you are looking for
            <Link to='/' className='home-link'> Back Home</Link></p>
        </div>
    }
    return (
            <div>
                <h3>Something went wrong</h3>
            </div>
    );
};

export default Error;