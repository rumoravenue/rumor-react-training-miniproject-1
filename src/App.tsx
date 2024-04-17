import React from "react";
import Main from "./Components/Main";
import "./App.css";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";
import { stringify } from "querystring";
import Footer from "./Components/Footer";

function App() {
  const bgcolor1="#FCA3A3"
  const bgcolor2="#FFEA9E"
  return (
   

    <>
      <Container className="custom-container-padding" > 
        <Header />
        <Main bgcolor={bgcolor1}/>  
        <Main bgcolor={bgcolor2}/>  
        <Main bgcolor={bgcolor1}/>  
        <Footer/>
      </Container>
    </>
  );
}

export default App;
