import React from "react";
import { NavLink, useParams } from "react-router-dom";
import data from "../data.json";

const technology = data.technology;
const Technology = () => {
  const { technologyId: technologyIndex } = useParams();
  console.log(technology);
  return (
    <div className="bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop bg-cover min-h-screen  flex items-center justify-center gap-3">
      <div className="w-full flex flex-col  px-0  lg:pl-20 gap-5 pt-24 lg:pt-0 ">
        <div className=" lg:mb-11 md:px-10 lg:px-0 tracking-widest uppercase  md:text-2xl text-center md:text-start  text-xl lg:text-2xl text-white font-barlow ">
          <span className="text-slate-500 font-extrabold  mr-2">0{technologyIndex}</span>
          SPACE LAUNCH 101
        </div>
        <div className=" w-full flex md:items-start lg:items-center flex-col gap-5   lg:flex-row-reverse ">
          <div className="lg:w-auto w-full">
            <img
              className="px-0 mx-0 lg:hidden w-screen "
              src={technology[technologyIndex].images.landscape}
              alt=""
            />
            <img
              className="lg:w-auto  hidden lg:inline-block "
              src={technology[technologyIndex].images.portrait}
              alt=""
            />
          </div>
          <div className=" md:w-[50%] items-center mx-auto lg:ml-0 lg:items-start flex flex-col lg:flex-row  gap-7 justify-between">
            <div className="technology pt-5">
              <ul className="flex text-white lg:flex-col font-barlow text-lg gap-7">
                <NavLink
                  to={"/technology/0"}
                  className="cursor-pointer w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center border-gray-500 border hover:border-white rounded-full"
                >
                  1
                </NavLink>
                <NavLink
                  to={"/technology/1"}
                  className="cursor-pointer w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center border-gray-500 border hover:border-white rounded-full"
                >
                  2
                </NavLink>
                <NavLink
                  to={"/technology/2"}
                  className="cursor-pointer w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center border-gray-500 border hover:border-white rounded-full"
                >
                  3
                </NavLink>
              </ul>
            </div>
            <div className="gap-7 flex flex-col ">
              <div className="font-belle text-center lg:text-start">
                <div className="text-lg tracking-widest lg:text-2xl text-gray-500">
                  THE TERMINOLOGY…
                </div>
                <div className="lg:text-6xl text-5xl  text-white">
                  {technology[technologyIndex].name}
                </div>
              </div>
              <div className="text-secondary text-lg tracking-wider font-barlow leading-6 text-center lg:text-justify mb-2 lg:mb-8">
                {technology[technologyIndex].description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
