import React from "react";
import Card from "../../components/Card";
import "./menu.css";

const About = () => {
  return (
    <div className="container">
      <div className="hero-text h-screen flex justify-center items-center flex-col bg-green-300 ">
        <h1 className="text-9xl uppercase font-black tracking-widest ">
          Find Donors
        </h1>
        <p className="text-7xl mt-10 font-semibold uppercase ">Your Donor</p>
      </div>
      <div className="cards min-h-screen w-screen flex  items-center justify-center ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default About;
