"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { Store } from "@/app/_lib_store/Store";
const ProductDetails = () => {
  const [selectDisplay, setSelectDisplay] = useState(1);
  let buttonElements = [];
  for (let i = 0; i <= 3; i++) {
    buttonElements.push(
      <button
        onClick={() => setSelectDisplay(i + 1)}
        className="w-[160px] rounded-md max-md:max-h-[160px] max-md:max-w-[22%]"
      >
        <img
          src={`/Images/Test/Jacket-${i + 1}.jpg`}
          alt=""
          className="h-full w-full rounded-md"
          lazy
        />
      </button>
    );
  }
  let serverElements = [];
  for (let i = 0; i <= 11; i++) {
    serverElements.push(
      <div className=" h-[360px] w-[240px] m-3 mb-6 bg-transparent">
        <img
          src="/Images/Test/Jacket-4.jpg"
          alt=""
          className="w-full h-[80%] rounded-md"
          lazy
        />
        <Link href={"/productId"} className="ml-2">
          <article className="text-xs font text-ellipsis w-full h-24px text-gray-900 mt-1 ml-3 ">
            Jumper man Jacket modern
          </article>
          <article className="text-xs font-bold font-sans text-gray-900 ml-3">
            $123.32
          </article>
          <article className="text-xl text-ellipsis text-gray-900 ml-3">
            Shoppers Shops
          </article>
        </Link>
      </div>
    );
  }
  return (
    <Provider store={Store}>
      <div className="product-details-main-component h-auto w-screen flex flex-col bg-slate-300 overflow-x-hidden">
        <div className="product-description h-[460px] p-1  flex flex-row justify-evenly w-screen bg-transparent max-md:h-auto max-md:flex-col items-center">
          <div className="h-full w-[40%] max-md:w-screen">
            <img
              src={`/Images/Test/Jacket-${selectDisplay}.jpg`}
              alt=""
              className="h-full w-full rounded-md"
            />
          </div>
          <div className="w-[180px] ml-2 mr-1 h-full bg-transparent flex flex-col items-center justify-evenly max-md:w-screen max-md:max-h-[180px] max-md:flex-row max-md:mt-2 max-md:ml-0 max-md:mr-0 max-md:mb-2 max-md:justify-evenly">
            {buttonElements}
          </div>
          <div className=" relative bg-transparent h-full w-[44vw]  p-2 rounded-md max-md:w-screen max-md:h-auto">
            <article className="discounted-price text-4xl text-gray-900 font-sans font-extrabold mt-2 ml-3 mb-3">
              Boa Fleece Jacket
            </article>
            <div className="w-full h-[24px] flex flex-row items-baseline mb-3">
              <article className="sale-price text-sm font-sans ml-4 mr-2 text-mono text-bold text-gray-700 line-through">
                Was $ 123.45
              </article>
              <article className="item-description text-gray-950 ml-4 text-xl font-extrabold font-sans">
                $ 112.34
              </article>
            </div>
            <article className="font-serif text-xl text-gray-950 font-bold ">
              Description
            </article>
            <p className="item-description-data h-auto w-full flex text-gray-900 text-wrap">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores reprehenderit cumque quos nemo. Laborum nam labore ipsa
              temporibus cum quasi, possimus minus vitae quas est quidem dolores
              dignissimos, porro repudiandae.
            </p>
            <Link href={"/more"} className="text-blue-900 text-sm">
              More...
            </Link>

            <div className="h-auto w-full absolute bottom-0 max-md:relative ">
              <button className="h-[44px] w-[46%] bg-blue-900 m-1 rounded-md active:animate-pulse">
                Checkout
              </button>
              <button className="h-[44px] w-[46%] bg-blue-900 m-1 rounded-md active:animate-pulse">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="server-products h-auto w-screen bg-transparent">
          <div className="product-line grid grid-cols-4 place-items-center max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {serverElements}
          </div>
        </div>
      </div>
    </Provider>
  );
};
export default ProductDetails;
