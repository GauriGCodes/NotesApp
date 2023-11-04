import React from "react";
import Header from "./components/Header";
import Footer from "./components/footer";
import Notes from "./components/Notes";

import './App.css';
class App extends React.Component{
 render(){
  return (
    <div className="container">
      <Header/>
      <Notes/>
      <Footer/>
    </div>
  );
 }
}

export default App;
