import React from "react";
import "../style.css"
import { IoHomeOutline } from "react-icons/io5";
import { IoDocumentTextSharp } from "react-icons/io5";
import { BsFire } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";

const sidebar = () => {
  return <div className="sidebar">
  
    <div className="col-span-1 bg-blue-950 sidenavbar h-screen flex flex-col justify-between text-center py-10">
      <div className="up flex flex-col justify-between h-2/5 items-center">
        <div className="logo mb-5 text-3xl text-sky-500 cursor-pointer">
          <BsFire />
        </div>
        <div className="flex flex-col items-center justify-evenly">
          <ul>
            <li className=" list my-5 text-2xl text-white ">
              <IoHomeOutline />
            </li>
            <li className="list my-5 text-2xl text-white">
              <IoDocumentTextSharp />
            </li>
            <li className=" list my-5 text-2xl text-white">
              <IoHomeOutline />
            </li>
            <li className="list my-5 text-2xl text-white">
              <IoHomeOutline />
            </li>
            <li className=" list my-5 text-2xl text-white">
              <IoHomeOutline />
            </li>
          </ul>
        </div>
      </div>
      <div className="down flex flex-col items-center justify-between">
        <div className="pics py-5 cursor-pointer">
          <img
            src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?cs=srgb&amp;dl=pexels-thorn-yang-139829.jpg&amp;fm=jpg"
            className="object-cover object-right w-10 h-10 rounded-full"
            alt="person"
          />
        </div>
        <div className=" list logout pt-3 text-2xl text-white">
          <IoMdLogOut />
        </div>
      </div>
    </div>

    
  
</div>









  
};

export default sidebar;
