import Image from 'next/image';
import React from "react";
import "../style.css";
import { LuSend } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";
import { GrMicrophone } from "react-icons/gr";

const Profile = () => {
  return (
    <div className="h-screen bg-[#060918d8] px-7 rounded-l-3xl rounded-r-3xl ">
      <div className=" profilefirst flex text-sm ">
        {/* This will cover the right side of the screen */}
        <section
          style={{ width: "21rem" }}
          className=" mx-auto  rounded-2xl  shadow-lg"
        >
          <div className="mt-3 w-fit mx-auto rounded-full">
  <Image
    src="https://image.kpopmap.com/2020/10/kim-soohyun-handsome-actor-gold-medalist.jpg"
    className="rounded-full w-28 h-28 border-4 border-white"
    alt="profile picture"
    width={112} // Set the width and height attributes as required
    height={112}
  />
</div>

          <div className="mt-3 ">
            <h2 className="text-white font-bold text-xl tracking-wide text-center">
              Aliam Colter
            </h2>
          </div>
          <p className="text-slate-400 font-normal mt-1.5 text-center">
            Physician
          </p>
        </section>
      </div>
      <div className=" mt-4 profilesecond flex justify-around items-center mx-auto bg-gradient-to-r from-indigo-500 h-14 rounded-2xl">
        <div className="name  font-medium ">Active Patients</div>
        <div className="flex -space-x-4 rtl:space-x-reverse">
        <Image
  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
  src="https://th.bing.com/th/id/OIP.y-R6b74yIBCpAOfYIBVQpAHaLH?rs=1&pid=ImgDetMain"
  alt=""
  width={40} // Set the width and height attributes as required
  height={40}
/>
<Image
  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
  src="https://th.bing.com/th/id/R.4018ed13207d69229e298908e6b46149?rik=MM%2bBaS525Ti2Yg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-GQ8cGH8azEE%2fUVG4hjpTJcI%2fAAAAAAAALg4%2fYi6SyEe6R4o%2fs1600%2ftumblr_mblpmm4TZ31qm7345o1_1280.jpeg&ehk=VyXQSVEK7KRXAQh3ExQd%2bqMwiHzHPR7KjZXLvqTFIsI%3d&risl=&pid=ImgRaw&r=0"
  alt=""
  width={40} // Set the width and height attributes as required
  height={40}
/>
<Image
  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
  src="https://i.pinimg.com/originals/e2/43/c0/e243c0f7b9ee95151d2f2c045367047c.jpg"
  alt=""
  width={40} // Set the width and height attributes as required
  height={40}
/>
          <a
            className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
            href="#"
          >
            +8
          </a>
        </div>
      </div>

      <div className="third mt-3 rounded-2xl bg-gradient-to-b from-indigo-500 h-[55%] mb-5">
        <div className="max-w-md mx-auto p-2">
          {/* <!-- Chat Container --> */}
          <div className=" rounded-lg shadow-md p-2">
            {/* <!-- Chat Header --> */}
            <div className="flex items-center justify-between mb-2 px-4">
              
              <div className="ml-3 text-sm flex gap-2 items-center">
              <Image
  className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
  src="https://th.bing.com/th/id/OIP.y-R6b74yIBCpAOfYIBVQpAHaLH?rs=1&pid=ImgDetMain"
  alt=""
  width={32} // Set the width and height attributes as required
  height={32}
/>
               <div className='flex flex-col'>
               <p className=" font-medium">Alexa Max</p>
                <p className="text-gray-300 font-light">Active 5 min ago</p>
               </div>
              </div>
              <div className="flex justify-between ">
                <div className='cursor-pointer'>
                  <IoMdCall style={{ fontSize: "1.5rem" }} />
                </div>
              </div>
            </div>
            <hr className="border-gray-300 my-1"></hr>

            {/* <!-- Chat Messages --> */}
            <div className="space-y-2 mt-2">
              {/* <!-- sent Message --> */}
              <div className="flex items-start">
                <div className="ml-3 bg-gray-100 p-2 rounded-lg">
                  <p className="text-sm text-gray-800">Hi, Doctor</p>
                </div>
              </div>

              {/* <!-- Sent Message --> */}
              <div className="flex items-end justify-end">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="text-sm text-gray-800">
                    I got knee jerk. What should do right now?
                  </p>
                </div>
                <Image
  src="https://th.bing.com/th/id/OIP.y-R6b74yIBCpAOfYIBVQpAHaLH?rs=1&pid=ImgDetMain"
  alt="Other User Avatar"
  className="w-8 h-8 rounded-full ml-3"
  width={32} // Set the width and height attributes as required
  height={32}
/>
              </div>
              {/* received message */}
              <div className="flex items-start">
                <div className="ml-3 bg-blue-500 p-2 rounded-lg">
                  <p className="text-sm text-white">Hi, Alexa</p>
                </div>
              </div>
              <div className="flex items-end justify-end">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <p className="text-sm text-white">
                    This help maintain balance and posture Dont worry.
                  </p>
                </div>
                <Image
  src="https://image.kpopmap.com/2020/10/kim-soohyun-handsome-actor-gold-medalist.jpg"
  alt="Other User Avatar"
  className="w-8 h-8 rounded-full ml-3"
  width={32} // Set the width and height attributes as required
  height={32}
/>
              </div>
            </div>

            {/* <!-- Chat Input --> */}
            <div className="mt-4 flex items-center">
              <div className="bg-blue-500 text-white px-2 py-2 rounded-full  hover:bg-blue-600 cursor-pointer">
                <GrMicrophone />
              </div>
              <input
              
                type="text"
                placeholder="Type your text..."
                className="flex-1 py-2 ml-1 rounded-full bg-gray-100 focus:outline-none px-3 text-black"
              />
              <div className="bg-blue-500 text-white p-2 rounded-full ml-1 hover:bg-blue-600 cursor-pointer">
                <LuSend />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
