import React from "react";
import "./style.css";
import WelcomeNavBar from "../../components/WelcomeNavBar/welcomeNavBar";
import Banner from "../../components/Banner/banner";
import Instructions from "../../components/Instructions/instructions";
import Summary from "../../components/Summary/summary";

function Welcome() {
    return (
      <div className="mainContainer">
        <WelcomeNavBar/>
        <br/>
        <br/>
        <Banner/>
        <br/>
        <Summary/>
        <Instructions/>
        {/* <SocialMedia/>
        <Promos/> */}
        
      </div>
    );
  };

  export default Welcome