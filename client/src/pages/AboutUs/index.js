import React from "react";
import "./style.css";
import NavBar from "../../components/NavBar"
import { withAuthorization } from '../../components/Session';
import FAQs from "../../components/FAQs/faqs";
import AboutContainer from "../../components/AboutContainer/aboutcontainer";
import ContactForm from "../../components/ContactForm/contactform";
import {Animated} from "react-animated-css";

function AboutUs() {
  return (
    <div className="mainContainer">
      <NavBar />
      <br/>
      <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={0.1} animationInDuration={1000} isVisible={true}>
        <h1 className='aboutUsFont'>Sobre Nosostros</h1>
        <div className="cardContainer aboutUsFon">
          <AboutContainer/>
        </div>
        <div className="cardContainer aboutUsFon">
        <FAQs/>
        </div>
        <div className="cardContainer aboutUsFon">
        <ContactForm/>
        </div>
        <br/>
      </Animated>
    </div>
  );
};


const condition = authUser => !!authUser;
export default withAuthorization(condition)(AboutUs);