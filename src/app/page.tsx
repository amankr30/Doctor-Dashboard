import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-10 bg-blue-950">
        <Sidebar />
        <div className="col-span-9 grid grid-cols-7 bg-blue-700 m-5 rounded-3xl">
          <div className="hero col-span-5 text-center grid grid-rows-12">
            <Navbar />

            <div className="bottom row-span-5 ">events</div>
          </div>

          <div className="profile col-span-2 bg-[#020024]">
            {" "}
            <Profile />{" "}
          </div>
        </div>
      </div>
    </>
  );
}
