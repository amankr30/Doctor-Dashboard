import React from "react";
import Image from "next/image";

import { BsThreeDots } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";

const Consultation = () => {
  return (
    <>
      <div className="first h-1/2 flex  items-center  rounded-2xl w-[100%]  mt-2 mb-1">
        <div className="parentvisited bg-blue-950 flex h-[100%] justify-center items-center text-center px-4 rounded-3xl py-2">
          <div className="flex flex-col items-start ">
            <div className="flex justify-between w-[100%]">
              <div className="flex text-xs w-max">Consultation</div>
              <div>
                <span className="font-bold text-lg">
                  <BsThreeDots />
                </span>
              </div>
            </div>
            <div className="flex  items-start pt-2">
              <div className="left flex flex-col justify-start">
                <div className="flex pb-3">82/100</div>
                <div className="percentage bg-blue-600 px-6 gap-2  rounded-lg flex justify-center w-fit ">
                  <span>70%</span>
                  <span>
                    <FaArrowTrendUp />
                  </span>
                </div>
              </div>
              <div className="right ml-5">
                <div className="profile">
                  <Image
                    className="w-12 h-12"
                    src="https://cdn4.iconfinder.com/data/icons/banking-true-line-color/32/diagram-circle-statistics-segment-512.png"
                    alt="Bordered avatar"
                    width={48} // Set the width and height attributes as required
                    height={48}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consultation;
