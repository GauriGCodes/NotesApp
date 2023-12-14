import { useEffect, useState,useContext} from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { Link} from 'react-router-dom';
import Header from "../components/Header.js";
import FormRow from "../components/FormRow.js";
import "./css/LoginAndRegister.css";

const Login = () => {
    const [users, setUsers] = useState({});
    function handleCallbackResponse(response) {
        const token = response.credential;
        const userObject = jwtDecode(token);
        axios.post('http://localhost:8000', { idToken: token, Id: 123 }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err);
        })
        setUsers(userObject);
        document.getElementById("signInDiv").hidden = true;
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "509227650194-h88h211plb4bsf36evhggvc44thcj62k.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {
                theme: "outline",
                size: "large",
                width: 310,
                height: 50,
                longtitle: true
            }
        );
        google.accounts.id.prompt();
    }, []);

    return (
        <div>
            <Header user={users} />
            <div className="container design">
                <form className='form'>
                    <div id="signInDiv"></div>
                    <h4 id="login-header">or with email and password</h4>
                    <FormRow type='email' name='email' defaultValue='john@gmail.com' />
                    <FormRow type='password' name='password' defaultValue='secret123' />
                    <button type='submit' className='btn btn-block'>
                        submit
                    </button>
                    <button type='button' className='btn btn-block'>
                        explore the app
                    </button>
                    <p>
                        Not a member yet?
                        <Link to='/register' className='member-btn'>
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );



}

export default Login;