"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const CartImage = "/Icons/Navigation/cart-32.png";
const SearchImage = "/Icons/Navigation/search-32.png";
const Navigation = () => {
  const [searchValue, setSearchValue] = useState("");
  const updateSearchValue = (e)=>{
    setSearchValue(e.target.value)
  };
  const handleQuerySubmit = ()=>{
    console.log(searchValue)
  }
  return (
    <div className="navigation-menu-main  h-24 w-full flex flex-row justify-evenly bg-gray-100">
      <div className="brand-name h-full w-auto flex ">
        <article className="text-blue-400 font-bold text-[42pt] ">Laroft</article>
        <img src="" alt="" />
      </div>
      <div className="search-bar-instance h-full w-auto flex flex-row items-center ">
        <div className="flex flex-row h-16 w-auto items-center border-b border-t border-l border-r  border-blue-400  ml-2 bg-slate-200 rounded-md">
          <img src={SearchImage} alt="" className="mr-1" />
          <input
            type="text"
            className="h-full w-96 outline-none pl-4  bg-slate-200 text-blue-400 placeholder-blue-300"
            placeholder="Search for products brands or categories"
            value={searchValue}
            onChange={(e)=>updateSearchValue(e)}
          />
        </div>

        <button className="h-16 w-48 bg-blue-600 rounded-md ml-1 mr-1" onClick={(e)=>{handleQuerySubmit()}}>
          Search
        </button>
      </div>
      <div className="account-issues-instance w-auto h-full flex flex-row items-center">
        <article className="text-blue-400 font-semibold">Account</article>
      </div>
      <div className="help-terminologies-instance  w-auto h-full flex flex-row items-center">
        <article className="font-semibold text-blue-400">Help</article>
      </div>
      <div className="cart-instance w-auto h-full">
        <Link
          href={"/products/cart"}
          className="h-full flex flex-row items-center"
        >
          {/* <article className="font-semibold text-blue-400 text-sm">cart</article> */}
          <img src={CartImage} alt="" />
          <sup className="text-blue-600 font-sans font-bold text-xl">10</sup>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
