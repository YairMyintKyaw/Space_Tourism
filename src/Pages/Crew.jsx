import React from "react";
import { NavLink, useParams } from "react-router-dom";
import data from "../data.json";

const crew = data.crew;

const Crew = () => {
  const { crewId: crewIndex } = useParams();
  return (
    <div className="bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-cover min-h-screen  flex items-center justify-center gap-3">
      <div className="w-full flex flex-col  lg:static   px-5 md:px-10 lg:px-32 gap-5 pt-24 ">
        <div className=" lg:mb-11 tracking-widest uppercase  md:text-2xl text-center md:text-start  text-xl lg:text-2xl text-white font-barlow ">
          <span className="text-slate-500 font-extrabold mr-2">
            0{crewIndex}
          </span>
          Meet your crew
        </div>
        <div className=" w-full flex md:flex-col-reverse justify-around items-center md:items-start flex-col  lg:flex-row-reverse gap-7">
          <div className="lg:w-[50%] w-full  ">
            <img
              className="lg:h-[30rem] lg:w-auto md:w-60 w-52 mx-auto lg:absolute bottom-0 right-[10%]"
              src={crew[crewIndex].images.png}
              alt=""
            />
            <hr className="border-gray-500 w-full md:w-1/2 mx-auto  lg:hidden" />
          </div>
          <div className="lg:w-[60%] md:w-[50%] items-center mx-auto lg:items-start flex md:flex-col-reverse flex-col gap-7 justify-between">
            <div className="crew pt-5">
              <ul className="flex text-white font-barlow text-lg gap-7">
                <NavLink
                  to={"/crew/0"}
                  className="cursor-pointer  w-3 h-3 bg-gray-600 hover:bg-gray-500 rounded-full"
                ></NavLink>
                <NavLink
                  to={"/crew/1"}
                  className="cursor-pointer w-3 h-3 bg-gray-600 hover:bg-gray-500 rounded-full "
                ></NavLink>
                <NavLink
                  to={"/crew/2"}
                  className="cursor-pointer w-3 h-3 bg-gray-600 hover:bg-gray-500 rounded-full"
                ></NavLink>
                <NavLink
                  to={"/crew/3"}
                  className="cursor-pointer w-3 h-3 bg-gray-600 hover:bg-gray-500 rounded-full"
                ></NavLink>
              </ul>
            </div>
            <div className="gap-7 flex flex-col ">
              <div className="font-belle text-center lg:text-start">
                <div className="text-3xl lg:text-4xl text-gray-500">
                  {crew[crewIndex].role}
                </div>
                <div className="lg:text-6xl text-4xl  text-white">
                  {crew[crewIndex].name}
                </div>
              </div>
              <div className="text-secondary text-lg tracking-wider font-barlow leading-6 text-center lg:text-justify mb-2 lg:mb-8">
                {crew[crewIndex].bio}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
