import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import Image from 'next/image';


const upcomingevents = () => {
  return (
    <>
    <div className="profile bg-blue-950 flex h-[100%] justify-center items-center text-center px-9 py-2 rounded-3xl">
                    <div className="flex flex-col items-start ">
                      <div className="font-bold flex items-center justify-between ">
                        <label className="bg-blue-600 p-1 rounded-2xl mr-2 cursor-pointer">
                          <FaLongArrowAltRight />
                        </label>
                        <label className="text-sm font-light">Upcoming Events</label>
                      </div>
                      <div className="flex justify-between pt-2 gap-x-5">
                      <div className="profile">
  <Image
    className="w-14 h-14 p-1 rounded-full ring-2 ring-teal-500 dark:ring-teal-400"
    src="https://randomuser.me/api/portraits/women/2.jpg"
    alt="Bordered avatar"
    width={56} // Set the width and height attributes as required
    height={56}
  />
</div>

                        <div className="name flex flex-col ">
                          <div className="flex flex-col justify-start">
                         <div className="font-bold">Aliza shah</div>
                          <div className="flex items-center text-[10px]">
                            <span>
                              <LuAlarmClock />
                            </span>
                            <label className="" >8:00-9:00 Pm</label>
                          </div>
                          </div>
                          <div className="lastvisit text-xs font-light mt-3 bg-slate-600 rounded-full px-1">Visited 7 days ago</div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
    
    
    
    </>
  )
}

export default upcomingevents