"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
const Jacket_1 = "/Images/Test/Jacket.jpg";
const Jacket_2 = "/Images/Test/Jacket-1.jpg";
const Jacket_3 = "/Images/Test/Jacket-2.jpg";
const Jacket_4 = "/Images/Test/Jacket-3.jpg";
export { Jacket_1, Jacket_2, Jacket_3, Jacket_4 };
export default function ProductDetails({ id, value }) {
  const targetMore = "9090";
  const targetMoreLink = "0909";
  const [imageArray, setImageArray] = useState([]);
  useEffect(() => {
    setImageArray([Jacket_1, Jacket_2, Jacket_3, Jacket_4]);
  }, [0]);

  const [selectImageArray, setSelectImageArray] = useState(0);
  const elements = []
  for(let i = 0;i<=9;i++){
    elements.push(<div className="server-ad-item h-78 w-auto m-2" key={i}>
      <img src={Jacket_1} alt=""  className="h-64 w-48 rounded-md"/>
      <article className="font-sans font-bold text-lg text-zinc-950 m-1">Bomba Jacket</article>
      <article className="server-ad-item-price-tag font-serif font-thin text-zinc-900 text-lg m-1">$234.00</article>
    </div>)
  }
  return (
    <div className=" h-auto flex flex-col bg-slate-100 ">
      <div className="productDetailsContainer flex flex-row h-3/5 m-3">
        <section
          className="main-image h-[66vh] w-2/5 m-3 bg-current bg-cover bg-no-repeat bg-center rounded-xl flex-1 bg-black"
          style={{ backgroundImage: `url(${imageArray[selectImageArray]})` }}
        ></section>
        <div className="sub-Images h-full w-2/12 bg-slate-100 m-2 flex flex-col p-2 items-center justify-between flex-2">
        {imageArray.map((value,key)=>(
          <button className="h-[24%] w-[80%] bg-transparent border-none outline-none mb-1 mt-1" key={key}>
            <img
              src={value}
              alt=""
              className="h-full w-full rounded-lg"
              onClick={() => {
                setSelectImageArray(key);
              }}
            /> </button>
        ))}                
        </div>
        <div className=" relative product-description h-auto max-h-full w-2/5 m-3 p-2 bg-white rounded-md flex-3">
          <h1 className="title-product-name text-black text-3xl text-pretty text-center font-sans font-bold">
            Boa Fleece Jacket
          </h1>
          <div className="title-product-offer h-6 w-full flex flex-row m-2 items-end">
           <article className="title-product-prices text-gray-800 font-normal font-serif  line-through align-baseline">
            $129.00
          </article> 
            <article className="font-serif text-gray-800 font-extrabold text-3xl ml-2">$122.00</article>
          </div>
          
          <article className="title-product-reviews text-lg text-slate-700">
            Description
          </article>
          <h3 className="article-product-description-title"></h3>
          <article className="article-product-description text-sm text-gray-800 h-48 font-sans font-thin">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            accusamus repudiandae eaque eius sapiente ex tenetur, odit itaque
            optio pariatur maxime nobis deleniti sequi! Quae praesentium
            voluptatem ratione modi illum.
          </article>
          <div className="absolute bottom-0">
            <div className="h-[44px] w-[120px] rounded-lg bg-slate-500 flex items-center justify-center mt-4 ml-2 mb-2">
              <Link
                href={`/${targetMoreLink}`}
                className="w-full h-full text-center"
              >
                More..
              </Link>
            </div>

            <div>
              <button className="h-[48px] w-[240px] m-2 bg-slate-300 rounded-xl">
                Add To Cart
              </button>
              <button className="h-[48px] w-[240px] m-2 bg-sky-600 rounded-xl">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <article className="text-slate-950 text-3xl font-sans font-thin m-5">This item can be cool with this</article>
      <div className="server-ad-response h-auto w-auto grid grid-cols-[auto_auto_auto_auto_auto] justify-around">
        {elements}
      </div>
    </div>
  );
}
