import React from "react";

const Loader = () => {
  return (
    <div className=" flex flex-col justify-center items-center h-screen bg-black">
      <h1 className=" text-5xl text-yellow-400  z-10 shadow-lg shadow-yellow-400 mb-9 sm:text-7xl">
        <div className="custom-loader"></div>
      </h1>
    </div>
  );
};

export default Loader;
