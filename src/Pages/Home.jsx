import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-barlow text-white flex items-center bg-home-mobile md:bg-home-tablet lg:bg-home-desktop h-screen  bg-cover">
      <div className="flex flex-col lg:flex-row text-center lg:text-start items-center mt-0 lg:mt-20 lg:absolute lg:bottom-[20%]">
        <div className=" w-[90%] md:w-[60%]   lg:w-[40%]  flex flex-col gap-5 p-10 lg:pb-0">
          <div className="text-2xl text-secondary">
            SO, YOU WANT TO TRAVEL TO
          </div>
          <h1 className="font-belle text-8xl">SPACE</h1>
          <p className="text-lg lg:text-justify text-center text-secondary tracking-widest">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex-1 flex justify-center items-end lg:self-end">
          <Link
            to={"/destination/0"}
            className="rounded-full w-40 h-40 flex items-center justify-center text-3xl text-primary bg-white cursor-pointer hover:outline-[35px] lg:hover:outline-[50px] hover:outline hover:outline-outline "
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
