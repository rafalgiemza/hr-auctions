import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="top-0 sticky z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white:opacity-25 shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between">
            <Link
              href={`#top`}
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              HR Auctions
            </Link>
            <Link href={`#discord`}>
              <button
                className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                type="button"
              >
                <i className="fas fa-arrow-alt-circle-down"></i>
                Dołączam
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
