import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import logo from "./assets/logo.png";
import razor from "./assets/razor.png";
import startup from "./assets/startup.png";
import knight from "./assets/knight.png";
import wadhwani from "./assets/wadhwani.png";
import microsoft from "./assets/microsoft.png";
import india from "./assets/india.png";
import "./App.css";
import headerImage from "./assets/headerImage.png";

function App() {
  return (
    <>
      <div>
        <nav className="flex justify-around bg-white z-0">
          <div>
            <img src={logo} className="h-[80px] w-[200px]" alt="" />
          </div>
          <div className="flex justify-evenly custom-blue gap-3 pt-6">
            <p className="px-2">Learn</p>
            <p className="px-2">Practice</p>
            <p className="px-2">Assignments</p>
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
        <header className="flex justify-center gap-5 ">
          <div className="border-2 border-red-600">
            <div className="border-2 border-black flex flex-col w-[550px] ">
              <div className=" flex justify-evenly text-[14px] font-medium text-custom-blue">
                <p> Students </p>
                <p>Teachers </p>
                <p>Parents</p>
              </div>
              <div className="text-[48px] font-extrabold text-custom-blue">
                Beyond Learning, Becoming
              </div>
              <div className="text-[20px] text-custom-blue">
                Say goodbye to stressful study sessions. With Hyggex's
                AI-powered learning paths, you can improve your grades and
                well-being in less time, with less stress.
              </div>
              <div>
                <div>
                  <button className="bg-custom-lightBlue text-white px-4 py-2 rounded-xl">
                    Start Learning
                  </button>
                  <button className="bg-custom-lightBlue  text-black px-4 py-2 rounded-xl">
                    Book a demo
                  </button>
                </div>
                <div>
                  <p>Akash has scored 9/10 in self awareness</p>
                  <p>Just Now </p>
                </div>
              </div>
              <div className="border-2 border-black"></div>
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
        <div className="flex items-center justify-around px-[70px] ">
          <div>Trusted by the best in the industry</div>
          <div>
            <img src={razor} alt="" className=" h-[33px] w-[177px]" />
          </div>
          <div>
            <img
              src={startup}
              alt=""
              className=""
              style={{ objectFit: "contain", height: "100px", width: "100px" }}
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
        <div className="bg-custom-darkBlue min-h-screen ">
          <div className="border-2 border-red-700">
            <div className="border-4 border-white ">
              See <span> Adaptive Learning </span> in Action
            </div>
            <div className="bg-white h-[519px] w-[1024px] text-black rounded-[16px] border-[1px] border-white">
              <div className="flex gap-3 ml-[16px] mt-[20px]">
                <div className="rounded-full bg-red-600 h-2 w-2"></div>
                <div className="rounded-full bg-yellow-400 h-2 w-2"></div>
                <div className="rounded-full bg-green-600 h-2 w-2"></div>
              </div>
              <div className="h-[453px] w-[992px] bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
