import { useState } from "react";

import { TableData } from "../constants/data";

export default function Content() {
  const listItem = "flex items-center gap-2 text-xs";
  const unorderedList = "flex flex-col gap-2";

  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
    setIsRotated(!isRotated);
  };

  return (
    <div className="flex">
      <button
        className="flex absolute hidden right-[40px] top-[40px] max-[890px]:block transition duration-500 ease-in-out"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 transition-transform duration-400 ${
              isRotated ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 transition-transform duration-400 ${
              isRotated ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
      <div>
        <div
          className={`flex flex-col h-[400px] w-[220px] bg-white rounded-[16px] px-3 py-3 shadow-md ${
            isOpen
              ? "absolute top-[287px] inset-y-0 right-[-80px] transform -translate-x-1/2 -translate-y-1/2 z-10"
              : "max-[890px]:hidden"
          } `}
        >
          <span className="py-1 text-xs text-slate-400 font-semibold">
            APPS
          </span>

          <ul className={unorderedList}>
            <li className={listItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-9 h-9 shadow-md p-2 rounded-lg text-green-600 hover:shadow-xl rounded-full cursor-pointer duration-200"
              >
                <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
                <path
                  fillRule="evenodd"
                  d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Insights</span>
            </li>
            <li className={listItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-9 h-9 shadow-md p-2 rounded-lg text-green-600 hover:shadow-xl rounded-full cursor-pointer duration-200"
              >
                <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                <path
                  fillRule="evenodd"
                  d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Cards</span>
            </li>
          </ul>

          <span className="h-[2px] bg-slate-200 my-4 rounded-md"></span>

          <span className="flex items-center pb-5 gap-1 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-red-500"
            >
              <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
            </svg>

            <span className="text-slate-400 font-medium">Booking</span>
          </span>

          <ul className={unorderedList}>
            <li className={listItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9 shadow-md p-2 rounded-lg hover:shadow-xl rounded-full cursor-pointer duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
              <span>Sales Expert</span>
            </li>
            <li className={listItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-9 h-9 shadow-md p-2 rounded-lg text-purple-400 hover:shadow-xl rounded-full cursor-pointer duration-200"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM15.375 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Charity</span>
            </li>
          </ul>

          <span className="h-[2px] bg-slate-200 my-4 rounded-md"></span>

          <ul className={unorderedList}>
            <li className={listItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9 shadow-md p-2 rounded-lg hover:shadow-xl rounded-full cursor-pointer duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
              <span>Newstand</span>
            </li>
            <li className={listItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 shadow-md p-2 rounded-lg text-yellow-300 hover:shadow-xl rounded-full cursor-pointer duration-200"
              >
                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
              </svg>
              <span>Golden Bar</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="w-10/12 flex flex-col mx-auto max-[890px]:mt-5">
          <nav className="flex mt-5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="tracker-widest">
                <div className="flex items-center tracker-widest">
                  <a
                    href="#"
                    className="ms-1 text-sm tracker-widest font-medium text-gray-400 hover:text-gray-500 cursor-pointer duration-200 "
                  >
                    Financing
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-400 hover:text-gray-500 cursor-pointer duration-200">
                    April 24, 2024
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="flex items-center pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={4}
              stroke="currentColor"
              className="w-6 h-4 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            <h1 className="pl-5 font-medium text-xl">Remittance Progress</h1>
          </div>

          <div className="flex flex-col pt-9">
            <div className="flex justify-between">
              <div className="">
                <span className="text-xs text-emerald-600 font-medium">
                  <p className="p-2">Remitted</p>
                </span>
                <h2 className="text-4xl text-emerald-600 cursor-pointer">
                  $41,622
                </h2>
              </div>
              <div>
                <span className="text-xs text-gray-600 font-medium">
                  <p className="text-right p-2">Left to Remit</p>
                </span>
                <h2 className="text-4xl text-gray-600 cursor-pointer">
                  $458,378
                </h2>
              </div>
            </div>
            <div>
              <div className="w-full bg-emerald-200 rounded-full h-2 mb-3 dark:bg-emerald-700 hover:shadow-md cursor-pointer duration-300">
                <div className="w-full bg-emerald-100 rounded-full h-2 mb-4 dark:bg-emerald-200">
                  <div
                    className="bg-emerald-400 h-2 rounded-full dark:bg-gradient-to-r from-emerald-300 to-emerald-400 my-3"
                    style={{ width: "10.32%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-emerald-500 font-medium">
                8.32%
              </span>
              <span className="text-xs text-gray-400 font-medium">91.68%</span>
            </div>
          </div>

          <div className="flex justify-between text-center gap-10 py-8 px-10 bg-neutral-100 rounded-2xl mt-8 max-[950px]:hidden">
            <div>
              <span className="text-[21px] text-gray-600">$500,000.00</span>
              <p className="text-[15px] text-gray-400">Remittance Total</p>
            </div>
            <div>
              <span className="text-[21px] text-gray-600">$500,000.00</span>
              <p className="text-[15px] text-gray-400">Cash Advance Amount</p>
            </div>
            <div>
              <span className="text-[21px] text-gray-600">April 27, 2022</span>
              <p className="text-[15px] text-gray-400">Cash Advance Start</p>
            </div>
            <div>
              <span className="text-[21px] text-gray-600">April 8, 2022</span>
              <p className="text-[15px] text-gray-400">Remittance Start</p>
            </div>
          </div>

          <div className="bg-transparent mt-10 not-prose overflow-x-auto">
            <table className="w-full text-sm overflow-hidden">
              <thead className="py-6 tracking-wider border-b-[1px] border-slate-300 font-light">
                <th className="py-4 px-5 text-left font-medium">Date</th>
                <th className="py-4 px-5 text-left font-medium">Sales</th>
                <th className="py-4 px-5 text-left font-medium">
                  Wayflyer Remittance
                </th>
                <th className="py-4 px-5 text-left font-medium">
                  Payment Status
                </th>
                <th className="py-4 px-5 text-right font-medium">
                  Payment Date
                </th>
              </thead>

              {TableData.map((item) => {
                const className = "px-3 py-[3px] rounded-xl font-medium";

                const PaymentStatus = `${className} ${
                  item.PaymentStatus === "Processing"
                    ? "bg-yellow-200 text-yellow-600"
                    : item.PaymentStatus === "Completed"
                    ? "bg-green-200 text-green-600"
                    : "bg-white"
                }`;

                return (
                  <tbody
                    key={item}
                    className="text-gray-500 border-b-[1px] border-slate-300"
                  >
                    <td className="py-4 px-5 text-sm">{item.Date}</td>
                    <td className="text-left px-5">{item.Sales}</td>
                    <td className="text-left px-5">{item.WayflyrRemittance}</td>
                    <td className="text-left px-5">
                      <span className={PaymentStatus}>
                        {item.PaymentStatus}
                      </span>
                    </td>
                    <td className="text-right px-5">{item.PaymentDate}</td>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
