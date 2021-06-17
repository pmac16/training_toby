import React from "react";
import "./style.css";
import Card from "../UI/Card";
import Logo from "../Logo";
import Navbar from "../Navbar";
import HeroPic from "../../assets/blog/HeroCircle.jpg";
/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
  return (
    <div>
      <Card>
        <div style={{ padding: "10px 0" }}>
          <Logo />
        </div>
        <div className="heroImageContainer">
          <img src={HeroPic} />
        </div>
      </Card>
    </div>
  );
};

export default Hero;
