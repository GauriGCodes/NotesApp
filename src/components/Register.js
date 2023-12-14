import FormRow from "../components/FormRow.js";
import Header from "../components/Header.js";
import "./css/LoginAndRegister.css";
import { Link } from 'react-router-dom';


const Register = () => {
    return <div>
        <Header />
        <div className="container design">
            <form className='form'>
                <h4>Register</h4>
                <FormRow type='text' name='name' />
                <FormRow type='text' name='lastName' labelText='last name' />
                <FormRow type='text' name='location' />
                <FormRow type='email' name='email' />

                <FormRow type='password' name='password' />
                <button type='submit' className='btn btn-block'>
                    submit
                </button>
                <p>
                    Already a member?
                    <Link to='/login' className='member-btn'>
                        Login
                    </Link>
                </p>
            </form>
        </div>
    </div>
}

export default Register;