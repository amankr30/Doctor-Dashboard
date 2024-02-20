import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

import { FaArrowTrendUp } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-10 bg-blue-950">
        <Sidebar />
        <div className="col-span-9 grid grid-cols-7 bg-blue-700 m-5 rounded-3xl">
          <div className="hero col-span-5 text-center grid grid-rows-12">
            <Navbar />

            <div className="bottom row-span-5 bg-pink-800 flex  ">
              <div className="left bg-slate-700 w-1/2 flex items-center flex-col">
                <div className="first h-1/2 flex  items-center  rounded-2xl w-[100%]">
                  <div className="parentvisited bg-blue-950 flex h-[100%] justify-center items-center text-center ">
                    <div className="flex flex-col items-start  ">
                      <div className="font-bold">42</div>
                      <div className="flex flex-col items-start pt-3">
                        <h2 className="text-lg">Parent Visited</h2>
                        <p className="text-sm">This Month</p>
                      </div>
                    </div>
                  </div>
                  <div className=" btn w-[30%] bg-gray-600 flex  justify-center h-[100%] ">
                    <div className="percentage bg-blue-600  w-10 py-4 rounded-full flex justify-center flex-col h-fit">
                      <span>
                        <FaArrowTrendUp />
                      </span>
                      <span>70%</span>
                    </div>
                  </div>
                </div>

                {/* <div className="second h-1/2 flex  items-center  rounded-2xl w-[100%] ">
                  <div className="parentvisited bg-blue-950 flex h-[100%] justify-center items-center text-center ">
                    <div className="flex flex-col items-start  ">
                      <div className="font-bold">42</div>
                      <div className="flex flex-col items-start pt-3">
                        <h2 className="text-lg">Parent Visited</h2>
                        <p className="text-sm">This Month</p>
                      </div>
                    </div>
                  </div>
                  <div className=" btn w-[30%] bg-gray-600 flex  justify-center h-[100%] ">
                    <div className="percentage bg-blue-600  w-10 py-4 rounded-full flex justify-center flex-col h-fit">
                      <span>
                        <FaArrowTrendUp />
                      </span>
                      <span>70%</span>
                    </div>
                  </div>
                </div> */}
              </div>











              <div className="right">statistics</div>
            </div>
          </div>

          <div className="profile col-span-2 bg-[#020024]">profile</div>
        </div>
      </div>
    </>
  );
}
