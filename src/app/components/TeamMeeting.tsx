import React from "react";
import Image from "next/image";

import { LuAlarmClock } from "react-icons/lu";
import { IoMdNotifications } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";

const TeamMeeting = () => {
  return (
    <>
      <div className="first h-1/2 flex  items-center  rounded-2xl w-[100%]  mt-2 mb-1">
        <div className="parentvisited bg-blue-950 flex h-[100%] justify-center items-center text-center px-4 rounded-l-3xl py-4">
          <div className="flex flex-col items-start ">
            <div className="">
              <div className="flex text-[15px] w-max">Team Meeting</div>
              <div className="flex items-center text-[10px]">
                <span>
                  <LuAlarmClock />
                </span>
                <label className="">8:00-9:00 Pm</label>
              </div>
            </div>
            <div className="flex flex-col items-start pt-2">
              <div className="flex -space-x-3 rtl:space-x-reverse">
                <Image
                  className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800"
                  src="https://th.bing.com/th/id/OIP.y-R6b74yIBCpAOfYIBVQpAHaLH?rs=1&pid=ImgDetMain"
                  alt=""
                  width={28}
                  height={28}
                />
                <Image
                  className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800"
                  src="https://th.bing.com/th/id/R.4018ed13207d69229e298908e6b46149?rik=MM%2bBaS525Ti2Yg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-GQ8cGH8azEE%2fUVG4hjpTJcI%2fAAAAAAAALg4%2fYi6SyEe6R4o%2fs1600%2ftumblr_mblpmm4TZ31qm7345o1_1280.jpeg&ehk=VyXQSVEK7KRXAQh3ExQd%2bqMwiHzHPR7KjZXLvqTFIsI%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                  width={28}
                  height={28}
                />
                <Image
                  className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800"
                  src="https://i.pinimg.com/originals/e2/43/c0/e243c0f7b9ee95151d2f2c045367047c.jpg"
                  alt=""
                  width={28}
                  height={28}
                />
                <a
                  className="flex items-center justify-center w-7 h-7 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                  href="#"
                >
                  +8
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" btn w-[30%] flex bg-blue-950 justify-center h-[100%] rounded-r-3xl ">
          <div className=" rounded-full flex justify-between flex-col h-full gap-y-10 py-[10.5px] px-4 ">
            <div className="text-lg bg-slate-700 p-1 rounded-lg text-blue-600 fill-blue-600 cursor-pointer">
              <IoMdNotifications />
            </div>
            <div className="text-lg bg-blue-500 px-1 text-center rounded-lg cursor-pointer">
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMeeting;
