import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ setSidebarStatus, sidebarStatus }) => {
  return (
    <nav
      className={` flex flex-col absolute right-0 ${
        sidebarStatus ? "w-[60%] " : "w-0"
      }   backdrop-blur-lg h-screen  transition-all duration-500 overflow-hidden`}
    >
      <div
        className="self-end p-10 cursor-pointer"
        onClick={() => {
          setSidebarStatus(false);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
            <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
          </g>
        </svg>
      </div>
      <div className="font-barlow pl-10">
        <ul className="flex flex-col text-2xl text-white">
          <NavLink
            onClick={() => setSidebarStatus(false)}
            className="py-7 whitespace-nowrap"
            to={"/"}
          >
            <span className="font-semibold mr-2">00</span> Home
          </NavLink>
          <NavLink
            onClick={() => setSidebarStatus(false)}
            className="py-7 whitespace-nowrap"
            to={"/destination"}
          >
            <span className="font-semibold mr-2">01</span> Destination
          </NavLink>
          <NavLink
            onClick={() => setSidebarStatus(false)}
            className="py-7 whitespace-nowrap"
            to={"/crew"}
          >
            <span className="font-semibold mr-2">02</span> Crew
          </NavLink>
          <NavLink
            onClick={() => setSidebarStatus(false)}
            className="py-7 whitespace-nowrap"
            to={"/technology"}
          >
            <span className="font-semibold mr-2">03</span> Technology
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
