import React from 'react'

const statistics = () => {
  return (
    <>
    <div className="statistics-dropdown items-center">
                  <div className="name flex flex-col">
                    <span className="text-lg">Statistics</span>
                    <span className="text-xs">November 2023</span>
                  </div>
                  <div className="dropdown">
                    <button
                      id="dropdownDefaultButton"
                      data-dropdown-toggle="dropdown"
                      className="text-white bg-blue-700  focus:outline-none font-normal rounded-lg text-sm px-2 py-1 text-center inline-flex items-center "
                      type="button"
                    >
                      Weekly
                      <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    <div
                      id="dropdown"
                      className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Monthly
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Weekly
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default statistics