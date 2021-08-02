import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const text = ["BLOOD", "Fuel", "Life"];
const Hero = () => {
  useEffect(() => {
    const newText = document.getElementById("text");
    let i = 0;

    setInterval(() => {
      newText.innerHTML = text[i];

      if (i < 2) {
        i++;
      }
    }, 1000);
  }, []);

  return (
    <div>
      <div className="bg-white h-screen flex flex-col justify-center items-center ">
        <h1
          className="lg:text-8xl md:text-7xl sm:text-5xl text-3xl font-black mb-14"
          // onChange={typing()}
        >
          GIVE ME{" "}
          <span id="text" style={{ minWidth: "100px" }}>
            BLOOD
          </span>
        </h1>
        <div className="flex ">
          <Link className="py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce">
            DONATE NOW
          </Link>
          <Link className="py-6 ml-10 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce">
            Request Blood
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// const [currentText, setCurrentText] = useState("");
// useEffect(() => {
//   setCurrentText(

//   )
// }, []);
