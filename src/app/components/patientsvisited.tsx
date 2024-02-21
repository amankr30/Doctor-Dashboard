import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";

const patientsvisited = () => {
  return (
    <>
    <div className="first h-1/2 flex  items-center  rounded-2xl w-[100%]  mt-2 mb-1">
                  <div className="parentvisited bg-blue-950 flex h-[100%] justify-center items-center text-center px-4 rounded-l-3xl py-4">
                    <div className="flex flex-col items-start ">
                      <div className="font-bold">42</div>
                      <div className="flex flex-col items-start pt-2">
                        <h2 className="text-lg">Parent Visited</h2>
                        <p className="text-sm">This Month</p>
                      </div>
                    </div>
                  </div>
                  <div className=" btn w-[30%] bg-gray-600 flex  justify-center h-[100%] rounded-r-3xl ">
                    <div className="percentage bg-blue-600  w-10 py-4 rounded-full flex justify-center flex-col h-fit ">
                      <span>
                        <FaArrowTrendUp />
                      </span>
                      <span>70%</span>
                    </div>
                  </div>
                </div>
    
    </>
  )
}

export default patientsvisited