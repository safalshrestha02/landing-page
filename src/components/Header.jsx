import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
    setIsRotated(!isRotated);
  };

  return (
    <header className="flex bg-[#fff] rounded-[58px] mx-auto my-5">
      <nav className="flex flex-1 justify-between items-center w-full bg-grey-600">
        <div className="flex flex-[35%] items-center">
          <img src="logo.png" alt="logo" className="h-[66px] " />
          <span className="w-1 h-7 bg-[#f3f3f3] shadow-2xl rounded-md max-[425px]:hidden"></span>
          <p className="">
            <span className="text-[18px] font-medium pl-6 max-[425px]:hidden">
              Financing
            </span>
          </p>
        </div>
        <button
          className="mr-5 absolute right-[60px] hidden max-[890px]:block"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 transition duration-400 ${
                isRotated ? "rotate-0" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 transition duration-400 ${
                isRotated ? "rotate-180" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </button>

        <div
          className={`flex flex-[75%] justify-around mr-5 ${
            isOpen
              ? "absolute top-[87px] w-[97%] float-center flex bg-white z-10 py-4 px-5 rounded-[38px] items-center gap-5"
              : "max-[890px]:hidden"
          } `}
        >
          <div className="flex justify-around text-gray-600 items-center">
            <div className="relative flex px-[50px] justify-center py-2 rounded-[26px] border-2 overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="16px"
                className="fill-gray-600 mr-3 rotate-90 "
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
              <input
                type="email"
                placeholder="What are you looking for?"
                className="w-full outline-none bg-transparent text-gray-600 text-sm"
              />
            </div>
          </div>
          <div className="flex right-[-150px] items-center justify-end">
            <div>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-7 w-7 max-[425px]:hidden hover:shadow-lg rounded-full cursor-pointer duration-200"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 ml-7 max-[425px]:ml-1 max-[425px]:w-10 hover:shadow-lg rounded-full cursor-pointer duration-200"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="flex flex-col max-[425px]:hidden cursor-pointer">
                <span className="font-medium text-sm">Harver</span>
                <span className="text-slate-400 text-sm">Adam Roberts</span>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
