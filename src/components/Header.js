import React from "react";
import "./css/Header.css";
import Applogo from "../Logo.png";

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                    <img className="logo" src={Applogo} alt="Logo"/>
                    <h1>Keep</h1>
            </div>
        )

    }
}

export default Header;