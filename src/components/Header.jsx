export default function Header() {
  return (
    <header className="flex bg-[#fff] rounded-[58px] mx-auto my-5">
      <nav className="flex items-center w-full justify-between bg-grey-600">
        <div className="flex items-center flex-1">
          <img src="../public/logo.png" alt="logo" className="h-[66px] " />
          <span className="w-1 h-7 bg-[#f3f3f3] shadow-2xl rounded-md"></span>
          <p className="">
            <span className="text-[16px] font-medium pl-6">Financing</span>
          </p>
        </div>

        <div className="relative flex justify-center text-gray-600 items-center flex-1">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-5 h-5 relative left-20"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input
            type="text"
            name="q"
            className="py-2 text-sm text-black bg-gray-100 rounded-[38px] pl-[90px] pr-[50px] border-none"
            placeholder="What are you looking for?"
            autoComplete="off"
          />
        </div>
        <div className="flex items-center justify-end pr-10 flex-1">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="h-7 w-7"
          >
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-14 h-14 ml-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg>

            <p className="flex flex-col">
              <span className="font-medium text-sm">Harver</span>
              <span className="text-slate-400 text-sm">Adam Roberts</span>
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
}
