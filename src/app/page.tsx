import "./style.css";
import Sidebar from "./components/sidebar";
import Navbar from './components/navbar';
import Profile from './components/Profile'
import Patientsvisited from "./components/patientsvisited";
import Upcomingevents from './components/upcomingevents';
import TeamMeeting from './components/TeamMeeting';

import Consultation from "./components/Consultation";
import ActivePatients from "./components/ActivePatients";
import Statistics from './components/statistics'

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-10 bg-blue-950">
        <Sidebar />
        <div className="col-span-9 grid grid-cols-8   m-5 rounded-3xl">
          <div className="hero col-span-5 bg-[#030637] text-center grid grid-rows-12 rounded-3xl">
            <Navbar />

            <div className="bottom row-span-5  flex pr-5  ">
              <div className="left  w-1/2 flex items-center flex-col">
                <Patientsvisited />

                <div className="first h-1/2 flex  items-center  rounded-2xl w-[100%]  mt-3 mb-3">
                  <Upcomingevents />
                </div>
              </div>

              <div className="right bg-gradient-to-b from-indigo-500 w-1/2 rounded-3xl">
                <Statistics />
              </div>
            </div>

            <div className="row-span-5 flex justify-evenly items-center text-center">
              {/* active patients */}
             <ActivePatients />

              <div className="upcomingevents flex flex-col gap-y-2">
                <div>
                  <h1>Upcoming Events</h1>
                </div>
                <div className="">
                  {" "}
                  <TeamMeeting />
                </div>
                <div className="">
                  {" "}
                  <Consultation />
                </div>
              </div>
            </div>
          </div>

          <div className="profile col-span-3 ml-5 pb-10 h-screen ">
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
}
