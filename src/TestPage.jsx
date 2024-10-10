import React from "react";
import headerImage from "./assets/headerImage.png";

function TestPage() {
  return (
    <>
      <div>
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
      </div>
    </>
  );
}

export default TestPage;
