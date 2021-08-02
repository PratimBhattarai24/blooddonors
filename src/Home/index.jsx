import React from "react";
import Card from "../components/Card";
import Content from "../components/Content";
import Hero from "../components/Hero";

const Donor = () => {
  return (
    <div>
      <div>
        <Hero />
        <div>
          <h2 className="text-5xl mb-16 font-bold">Thanks to New Donor</h2>
        </div>
        <Card />
        <Content />
      </div>
    </div>
  );
};

export default Donor;
