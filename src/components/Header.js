import "./css/Header.css";
import Applogo from "../Logo.png";

const Header = ({user}) => {
        return (
            <div className="header">
                <div className="site-logo">
                    <img className="logo" src={Applogo} alt="Logo" />
                    <p>Keep</p>
                </div>   
                <div className="userInfo">
                    {user && user.name && <p>Hello, {user.name}</p>}
                    {user && user.picture && <div><img className="user-picture" src="https://lh3.googleusercontent.com/a/ACg8ocIzJ7nMYEe-Bt28prFXvvIwPf6H5DZESvjdt-V0xREI=s96-c"></img></div>}
                </div>

            </div>
        )
}

export default Header;