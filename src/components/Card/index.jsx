import React from "react";

const Card = () => {
  return (
    <div class="relative py-3 sm:max-w-xl sm:mx-auto gap-x-80 flex-shrink-0">
      <div className="absolute inset-0 bg-blue-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative  lg:w-sm mx-auto px-4 py-10 bg-white shadow-lg sm:rounded-3xl ">
        <div className="p-5  bg-white font-semibold rounded-lg text-gray-700 text-left ">
          <h1>Rakesh Shrestha </h1>
          <p>Age: 18</p>
          <p>Address: Jumla</p>
          <p>Phone: 9842098420</p>
          <p>BloodGroup: A+</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
