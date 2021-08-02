import React from "react";
import ImageOne from "../../assets/donors.jpg";

const Content = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
      <img
        src={ImageOne}
        alt="giving blood "
        className="h-full rounded mb-20 shadow"
      />
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl mb-2">Donating Blood</h2>
        <p className="mb-2">Give Blood, Save Life </p>
      </div>
    </div>
  );
};

export default Content;
