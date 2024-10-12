import { useState } from "react";
import vector3 from "./assets/3rdvector.png";
import vector2 from "./assets/2ndvector.png";
import vector1 from "./assets/1stvector.png";
import logo from "./assets/logo.png";
import razor from "./assets/razor.png";
import startup from "./assets/startup.png";
import knight from "./assets/knight.png";
import wadhwani from "./assets/wadhwani.png";
import microsoft from "./assets/microsoft.png";
import india from "./assets/india.png";
import "./App.css";
import headerImage from "./assets/headerImage.png";
import { TiChevronRight } from "react-icons/ti";
import blueline from "./assets/blueline.png";

function App() {
  return (
    <>
      <div>
        <nav className="flex justify-around bg-white z-0">
          <div>
            <img src={logo} className="h-[80px] w-[200px]" alt="" />
          </div>
          <div className="flex  custom-blue gap-10 justify-around  pt-6 font-medium">
            <p className="">Learn</p>
            <p className="">Practice</p>
            <p className="">Assignments</p>
          </div>
          <div className=" pt-5">
            <button className="text-[14px] px-4 py-2 rounded-md mx-2 text-custom-blue border-2 border-custom-blue">
              Login
            </button>
            <button className=" mx-2 text-[14px] px-4 py-2 bg-custom-blue text-white rounded-md">
              SignUp
            </button>
          </div>
        </nav>
        <header className="flex min-h-screen py-[20px]  ">
          <div className=" ml-[150px] mr-[100px] h-[425px] mt-8">
            <div className=" flex flex-col w-[450px] ">
              <div className=" flex justify-start gap-6 text-[14px] font-medium text-custom-blue">
                <div className="flex items-center gap-2">
                  <div className="bg-custom-vector1 h-4 w-4 items-center flex justify-center rounded-sm">
                    <img src={vector1} alt="" className="ml-[1px]" />
                  </div>

                  <p> Students </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-custom-vector2 h-4 w-4 items-center flex justify-center rounded-sm">
                    <img src={vector2} className="ml-[1px]" />
                  </div>

                  <p>Teachers </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-custom-vector3 h-4 w-4 items-center flex justify-center rounded-sm">
                    <img src={vector3} className=" h-[10px] w-[10px]" />
                  </div>

                  <p>Parents</p>
                </div>
              </div>
              <div className="text-[48px] font-extrabold text-custom-blue">
                Beyond Learning, Becoming
                <div className="relative bottom-[85px] left-[230px]">
                  <img src={blueline} alt="" className="w-[130px] h-[6px]" />
                </div>
              </div>
              <div className="text-[15px] font-medium  text-custom-heading opacity-80 my-8">
                Say goodbye to stressful study sessions. With Hyggex's
                AI-powered learning paths, you can improve your grades and
                well-being in less time, with less stress.
              </div>
              <div className="mt-4">
                <div className="flex gap-2 mb-4">
                  <button className="bg-custom-lightBlue text-white px-4 py-2  rounded-xl flex">
                    Start Learning{" "}
                    <TiChevronRight className="mt-[5.5px] ml-2" />
                  </button>
                  <button className="bg-blue-100 text-custom-lightBlue px-4 py-2 rounded-xl">
                    Book a demo
                  </button>
                </div>
                <div className="text-sm">
                  <p>
                    <span className="text-custom-lightBlue">Akash</span> has
                    scored <span className="text-custom-lightBlue">9/10 </span>
                    in self awareness .{" "}
                    <span className="text-custom-lightBlue">Just Now </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div
              className="rounded-3xl my-2 relative left-36 "
              style={{
                backgroundImage: `url(${headerImage})`,
                backgroundPosition: "50% 12%",
                // objectFit: "fill",
                height: "150px",
                width: "600px",
              }}
            ></div>

            <div
              className="rounded-3xl my-2 "
              style={{
                backgroundImage: `url(${headerImage})`,
                backgroundPosition: "16% 31%",
                // objectFit: "fill",
                height: "150px",
                width: "600px",
              }}
            ></div>

            <div
              className="rounded-3xl my-2  relative left-20 "
              style={{
                backgroundImage: `url(${headerImage})`,
                backgroundPosition: "35% 50%",
                // objectFit: "fill",
                height: "150px",
                width: "600px",
              }}
            ></div>

            {/* <div
            style={{ backgroundImage: `url(${headerImage})` }}
            className="h-[300px] w-[600px]"
          ></div> */}
          </div>
        </header>
        <div
          className=" border-black   "
          style={{ backgroundColor: "rgba(64, 127, 255,0.035)" }}
        >
          <div className="flex items-center justify-around px-[70px]  ">
            <div className="w-[92px]">
              <span className="text-custom-darkBlue font-bold">
                Trusted by the best
              </span>
              <span className="text-gray-400 font-bold"> in the industry</span>
            </div>
            <div>
              <img src={razor} alt="" className=" h-[33px] w-[177px]" />
            </div>
            <div>
              <img
                src={startup}
                alt=""
                className=""
                style={{
                  objectFit: "contain",
                  height: "100px",
                  width: "100px",
                }}
              />
            </div>
            <div>
              <img src={knight} alt="" className="w-[70px]" />
            </div>
            <div>
              <img src={wadhwani} alt="" className="" />
            </div>
            <div>
              {" "}
              <img src={microsoft} alt="" className="" />
            </div>
            <div>
              <img src={india} className="h-[100px] w-[150px]" />
            </div>
          </div>
        </div>
        <div className="bg-custom-darkBlue min-h-screen ">
          <div className="border-2 border-red-700 flex items-center flex-col py-40 ">
            <div className=" text-[40px] mb-28 font-bold ">
              <span className="text-white ">See </span>
              <span className="text-custom-lightBlue">Adaptive Learning</span>
              <span className="text-white"> in Action</span>
            </div>
            <div className="bg-white h-[519px] w-[1024px] text-black rounded-[16px] border-[1px] border-white ">
              <div className="flex gap-3 ml-[16px] mt-[20px]">
                <div className="rounded-full bg-red-600 h-2 w-2"></div>
                <div className="rounded-full bg-yellow-400 h-2 w-2"></div>
                <div className="rounded-full bg-green-600 h-2 w-2"></div>
              </div>
              <div className="h-[453px] w-[992px] bg-black ml-[16px] mt-[15px]">
                <iframe
                  // src="https://www.youtube.com/watch?v=88NJP9j-qNo&list=PLgyJAK8noDUG81VJAP38cF9GVRVKLipmZ"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/watch?v=88NJP9j-qNo&list=PLgyJAK8noDUG81VJAP38cF9GVRVKLipmZ"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
