import { useState } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  return (
    <>
      <nav className="fixed  w-screen flex items-center justify-between px-10 md:pr-0 font-barlow">
        <div className="rounded-full w-fit bg-white  my-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fillRule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </div>
        <div className="bg-white hidden md:flex -mr-5 md:-mr-1  md:h-[.5px] flex-1 ml-10 z-50"></div>
        <div
          className="w-[60%] hidden  backdrop-blur-3xl md:flex justify-center"
          // style={{ backdropFilter: "blur(30px)" }}
        >
          <ul className="uppercase text-white flex gap-16">
            <NavLink
              className="py-7 hover:text-secondary hover:border-b-4"
              to={"/"}
            >
              <span className="hidden font-semibold mr-1 lg:inline">00</span>{" "}
              Home
            </NavLink>
            <NavLink
              className="py-7 hover:text-secondary hover:border-b-4"
              to={"/destination"}
            >
              <span className="hidden font-semibold mr-1 lg:inline">01</span>{" "}
              Destination
            </NavLink>
            <NavLink
              className="py-7 hover:text-secondary hover:border-b-4"
              to={"/crew"}
            >
              <span className="hidden font-semibold mr-1 lg:inline">02</span>{" "}
              Crew
            </NavLink>
            <NavLink
              className="py-7 hover:text-secondary hover:border-b-4"
              to={"/technology"}
            >
              <span className="hidden font-semibold mr-1 lg:inline">03</span>{" "}
              Technology
            </NavLink>
          </ul>
        </div>
        <div className="flex md:hidden">
          <div
            className={`cursor-pointer`}
            onClick={() => {
              setSidebarStatus(true);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
              </g>
            </svg>
          </div>
        </div>
      </nav>
      <Sidebar
        sidebarStatus={sidebarStatus}
        setSidebarStatus={setSidebarStatus}
      />
    </>
  );
};

export default Navbar;
