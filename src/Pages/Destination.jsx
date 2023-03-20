import { NavLink, useParams } from "react-router-dom";
import data from "../data.json";

const destination = data.destinations;
const Destination = () => {
  const { planetId: destinationIndex } = useParams("planetId");

  return (
    <>
      <div className="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop bg-cover min-h-screen flex-col flex items-center justify-center gap-3">
        <div className="flex flex-col px-5 md:px-10 lg:px-32 gap-5 pt-24 lg:pt-0">
          <div className=" tracking-widest uppercase md:text-xl text-center md:text-start text-lg lg:text-3xl text-white font-barlow ">
            <span className="text-slate-500 font-extrabold mr-2">
              0{destinationIndex}
            </span>
            PICK your destination
          </div>
          <div className=" w-full flex justify-around items-center flex-col lg:flex-row gap-3">
            <div className="lg:w-[50%] ">
              <img
                className="lg:w-80 w-60 mx-auto"
                src={destination[destinationIndex].images.png}
                alt=""
              />
            </div>
            <div className="lg:w-[40%] md:w-[50%] items-center lg:items-start flex flex-col gap-7 justify-between">
              <div className="destination pt-5">
                <ul className="flex text-secondary font-barlow text-lg gap-7">
                  <NavLink
                    to={"/destination/0"}
                    className="cursor-pointer hover:border-b-2"
                  >
                    Moon
                  </NavLink>
                  <NavLink
                    to={"/destination/1"}
                    className="cursor-pointer hover:border-b-2"
                  >
                    Mars
                  </NavLink>
                  <NavLink
                    to={"/destination/2"}
                    className="cursor-pointer hover:border-b-2"
                  >
                    Europa
                  </NavLink>
                  <NavLink
                    to={"/destination/3"}
                    className="cursor-pointer hover:border-b-2"
                  >
                    Titan
                  </NavLink>
                </ul>
              </div>
              <div className="lg:text-7xl text-5xl font-belle text-white">
                {destination[destinationIndex].name}
              </div>
              <div className="text-secondary text-sm tracking-wider font-barlow leading-6 text-center lg:text-justify mb-2 lg:mb-8">
                {destination[destinationIndex].description}
              </div>
              <hr className="w-full" />
              <div className="flex flex-col sm:flex-row w-full gap-4 md:gap-0 text-center lg:text-start">
                <div className="flex-1">
                  <small className="text-secondary font-barlow text-md">
                    AVG. DISTANCE
                  </small>
                  <div className="text-2xl text-white font-belle">
                    {destination[destinationIndex].distance}
                  </div>
                </div>
                <div className="flex-1">
                  <small className="text-secondary font-barlow text-md">
                    EST. TRAVEL TIME
                  </small>
                  <div className="text-2xl text-white font-belle">
                    {destination[destinationIndex].travel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
