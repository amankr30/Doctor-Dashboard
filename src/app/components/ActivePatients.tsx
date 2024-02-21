import React from "react";
import { LuAlarmClock } from "react-icons/lu";
import Image from "next/image";

const ActivePatients = () => {
  return (
    <>
      <div className="activepatients flex flex-col  w-1/2 items-center px-5 rounded-3xl">
        <div>
          <h1>Active Patients</h1>
        </div>
        <div className=" bg-blue-950 mt-3 w-[100%] px-4 rounded-3xl">
          <div className="active-patient flex justify-around flex-row py-2">
            <div>
              <p className="text-sm">08:00 am</p>
            </div>
            <div className="profile  flex justify-center items-center px-4 bg-pink-300 text-black w-fit h-[100%] py-1 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="profile">
                  <Image
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="Bordered avatar"
                    width={40} // Set the width and height attributes as required
                    height={40}
                    className="w-10 h-10 rounded-full ring-2 ring-teal-500 dark:ring-teal-400"
                  />
                </div>

                <div className="name flex flex-col">
                  <div className="font-bold">Alexa Max</div>
                  <div className="flex items-center text-[10px]">
                    <span>
                      <LuAlarmClock />
                    </span>
                    <label className="ml-1">8:00-9:00 PM</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="active-patient flex justify-around flex-row  ">
            <div>
              <p className="text-sm">09:00 am</p>
            </div>
            <div className="profile-two  flex justify-center items-center px-4 bg-pink-300 text-black w-fit h-[100%] py-1 rounded-xl ">
              <div className="flex items-center gap-4">
                <div className="profile">
                  <Image
                    className="w-10 h-10 rounded-full ring-2 ring-teal-500 dark:ring-teal-400"
                    src="https://th.bing.com/th/id/R.4018ed13207d69229e298908e6b46149?rik=MM%2bBaS525Ti2Yg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-GQ8cGH8azEE%2fUVG4hjpTJcI%2fAAAAAAAALg4%2fYi6SyEe6R4o%2fs1600%2ftumblr_mblpmm4TZ31qm7345o1_1280.jpeg&ehk=VyXQSVEK7KRXAQh3ExQd%2bqMwiHzHPR7KjZXLvqTFIsI%3d&risl=&pid=ImgRaw&r=0"
                    alt="Bordered avatar"
                    width={40}
                    height={40}
                  />
                </div>

                <div className="name flex flex-col">
                  <div className="font-bold">Mark Jakson</div>
                  <div className="flex items-center text-[10px]">
                    <span>
                      <LuAlarmClock />
                    </span>
                    <label className="ml-1">9:00-10:00 PM</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="active-patient flex justify-around flex-row py-2">
            <div>
              <p className="text-sm">10:00 am</p>
            </div>
            <div className="profile  flex justify-center items-center px-4 bg-pink-300 text-black w-fit h-[100%] py-1 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="profile">
                  <Image
                    className="w-10 h-10 rounded-full ring-2 ring-teal-500 dark:ring-teal-400"
                    src="https://randomuser.me/api/portraits/women/3.jpg"
                    alt="Bordered avatar"
                    width={40}
                    height={40}
                  />
                </div>

                <div className="name flex flex-col">
                  <div className="font-bold">Maira Khan</div>
                  <div className="flex items-center text-[10px]">
                    <span>
                      <LuAlarmClock />
                    </span>
                    <label className="ml-1">10:00-11:00 PM</label>
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

export default ActivePatients;
