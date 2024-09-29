"use client";
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCartItems } from "@/app/_lib_store/CartSlice";
const HomeDefaultPage = () => {
  const dispatch = useDispatch();
  const searchFormer = useSelector((state) => state.search.arrayValue);
  console.log(searchFormer.length);
  return (
    <div className="home-defaut-page-main min-h-screen bg-slate-300">
      <div className="w-screen h-26 bg-slate-300 flex items-center">
        <article className="text-gray-900 mr-1 text-sm ml-2">
          Previous searches:
        </article>
        {searchFormer.map((element, index) => (
          <article key={index} className="text-gray-600 mr-1 text-xs">
            {element}
          </article>
        ))}
      </div>
      <div className="w-screen h-auto grid grid-rows-[auto] grid-cols-[auto_auto_auto_auto] ">
        <div className="item-card flex flex-col flex-grow-0 flex-shrink-[.2] h-auto pb-2 w-52 bg-slate-100 shadow-lg rounded-md m-2">
          <img
            className="w-[60%] h-auto place-self-center mt-1 rounded-sm"
            src="/Images/Data/3799.jpg"
          />
          <h3 className="text-gray-900 place-self-center mt-1 text-semibold text-sans text-balance">
            Product name
          </h3>
          <article className="text-gray-600 place-self-center">
            $1234.56
          </article>
          <article className="review text-gray-800 text-balance place-self-center">
            Rated 4.5 by 154
          </article>
          <div className="w-full h-auto flex justify-around mt-2">
            <button
              onClick={(e) => {
                if (e.target.src == "/Icons/Home/love.png") {
                  return (e.target.src = "/Icons/Home/hate.png");
                } else return (e.target.src = "/Icons/Home/love.png");
              }}
              className="h-auto w-auto outline-none border-none "
            >
              <img src="/Icons/Home/hate.png" />
            </button>
            <button
              onClick={() => {
                dispatch(
                  addCartItems({
                    product_name: "Air Chordans 4 fake shoes on max",
                    product_id: 1234,
                    supply_quantity: 1234,
                    supply_demand: 1,
                    product_price: 12345,
                    product_image_url: `/Images/Test/trainers.jpg`,
                  })
                );
              }}
              className="h-[32px] w-[64px] rounded-lg bg-orange-600 border-none outline-none"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDefaultPage;
