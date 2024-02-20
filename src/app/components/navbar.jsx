import React from 'react'

const navbar = () => {
  return (
    <div className="top row-span-2  flex justify-between px-4 items-center text-white">
      <div className="logo flex items-center flex-col justify-center">
        <div className="w-[100%] flex text-xl">Hello,</div>
        <div className="text-2xl font-bold">Dr. Colter!</div>
      </div>
      <div className="search flex items-center">
        <div className="flex items-center">
          <form className="max-w-md mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-[22rem] p-4 ps-10 text-sm text-gray-900 outline-none border-none  bg-blue-200 rounded-2xl"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
        <div className="bg-sky-600 px-3 py-2 rounded-xl mx-3">
          <button className="inline-block relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="animate-ping absolute top-1 right-0.5 block h-1 w-1 rounded-full ring-2 ring-green-400 bg-green-600"></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default navbar