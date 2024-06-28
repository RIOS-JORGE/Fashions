import logo from "./portada.webp";
const Logo = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center h-screen bg-black">
        <h1 className=" text-5xl text-yellow-400  z-10 shadow-lg shadow-yellow-400 mb-9 sm:text-7xl">
          fashions
        </h1>
        <img
          className=" w-60 rotate-6 rounded-lg shadow-lg shadow-yellow-400 sm:text-4xl sm:w-80"
          src={logo}
          alt=""
        />
      </div>
    </>
  );
};

export default Logo;
