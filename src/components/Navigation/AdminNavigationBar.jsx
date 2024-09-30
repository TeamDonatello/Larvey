"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
export default function AdminNavigationBar() {
  const [dataValue, setDataValue] = useState("");
  return (
    <div className="w-screen h-24 bg-transparent flex items-center justify-center max-md:h-auto max-md:pt-3">
      <div className="w-[96%] h-16 bg-gray-800/30 border-[1px] border-gray-400/10 rounded-xl pl-3 pr-3 flex max-md:h-auto max-md:flex-col">
        <div className="h-full w-auto mr-2 flex items-center max-md:h-24 ">
          <img src="/Icons/NavigationBar/logo.png" />
          <h1 className="text-xl text-balance text-blue-50 font-bold ml-2 mr-1">
            Laroft
          </h1>
        </div>
        <div className="w-[90%] h-full flex items-center max-md:flex-col-reverse max-md:h-16 max-md:w-full max-md:mt-2">
          <div className="w-[60%] h-full flex items-center justify-center max-md:w-full max-md:mt-2 max-md:mb-2">
            <div className="w-[80%] h-full flex items-center justify-center border-[1px] border-gray-600/10 max-md:border-none max-md:w-full">
              <button className="h-[44px] w-[44px] bg-gray-800/30 rounded-l-lg outline-none border-none flex items-center justify-center">
                <img src="/Icons/Navigation/search-24.png" />
              </button>
              <input
                placeholder="type to search"
                className="h-[44px] w-[80%] border-none outline-none bg-gray-800/30 rounded-r-lg pl-6 text-white placeholder-gray-300/10"
                value={dataValue}
                onChange={(e) => {
                  setDataValue(e.target.value);
                }}
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-row w-[30%] h-full items-center justify-evenly max-md:w-full relative">
            <Link href="/admin/notifications">
              <div className="h-[44px] w-[44px] rounded-full bg-gray-600/30 flex items-center justify-center">
                <img src="/Icons/NavigationBar/bell-24.png" />
                <sup></sup>
              </div>
            </Link>
            <Link href="/admin/settings">
            <div className="h-[44px] w-[44px] rounded-full bg-gray-600/30 flex items-center justify-center">
                <img src="/Icons/NavigationBar/settings-24.png" />
                <sup></sup>
              </div>
            </Link>
            <Link href="/admin/accounts">
              <div className="w-[120px] h-[44px] bg-gray-600/10 rounded-l-full rounded-r-full">
                <div className="h-[44px] w-[44px] flex items-center justify-center bg-gray-700/10 rounded-full">
                   <img src="/Icons/NavigationBar/profile.png" /> 
                </div>
                
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
