"use client"
import {useEffect,useRef, useState} from "react"
import Link from "next/link";
import { useRouter } from "next/navigation";
const NavigationElements = () => {
  const router = useRouter()
  const [searchValue,setSearchValue]=useState('')
  const searchObject = useRef()
  
  const runSubmit=(param)=>{
    window.addEventListener("keydown",()=>{console.log(param.target.value)})
  }
  return (
    <div className="h-[96px] w-screen bg-slate-300 flex flex-row max-md:flex-col max-md:w-screen max-md:h-auto">
      <div className="h-full w-[40%] bg-transparent flex flex-row items-center max-md:h-auto max-md:w-screen max-md:mb-5 max-md:mt-4">
        <img src="/Icons/NavigationBar/logo.png" />
        <article className="text-gray-900 font-extrabold text-4xl font-serif ml-1 mr-1 max-md:text-2xl max-md:mr-0">
          Laroft
        </article>
        <div className="h-full w-[60%]  bg-transparent flex flex-row justify-around items-center">
          <button 
          onClick={()=>{router.push('/cart')}}
          className="h-[48px] outline-none border-none w-[48px] bg-slate-900/25 backdrop-blur-xl flex flex-row items-center justify-center rounded-3xl active:bg-slate-500" >
            <img src="/Icons/Navigation/cart-24.png" alt="" />            
          <sup className="text-red-600 text-[8pt] text-mono font-thin animate-pulse">{}9</sup>
          </button>
          <button 
          onClick={()=>{router.push('/notifications')}}
          className="h-[48px] outline-none border-none w-[48px] bg-slate-900/25 backdrop-blur-xl flex flex-row items-center justify-center rounded-3xl active:bg-slate-500">
            <img src="/Icons/NavigationBar/bell-24.png" alt="" />
          <sup className="text-red-600 text-[8pt] text-mono font-thin animate-pulse">{}</sup>
          </button>
          <button className="h-[48px] outline-none border-none w-[48px] bg-slate-900/25 backdrop-blur-xl flex flex-row items-center justify-center rounded-3xl active:bg-slate-500">
            <img src="/Icons/NavigationBar/settings-24.png" alt="" />
          <sup className="text-red-600 text-[8pt] text-mono font-thin animate-pulse">{}</sup>
          </button>
          <button className="h-[48px] outline-none border-none w-[48px] bg-slate-900/25 backdrop-blur-xl flex flex-row items-center justify-center rounded-3xl active:bg-slate-500">
            <img src="/Icons/NavigationBar/speech-bubble.png" alt="" />
          <sup className="text-red-600 text-[8pt] text-mono font-thin animate-pulse">{}</sup>
          </button>
        </div>
      </div>

      <div className="h-full w-[30%] max-md:w-screen max-md:h-auto max-md:mb-3">
        <div className="w-full h-full flex flex-row items-center">
          <div className="h-[44px] w-[44px] bg-white/45 rounded-l-lg flex flex-row items-center justify-center max-md:ml-3">
            <img src="/Icons/Navigation/search-32.png" className="" />
          </div>

          <input type="text" 
          className="h-[44px] w-[90%] m-0 rounded-r-lg border-none outline-none pl-3 text-gray-800 placeholder-gray-600 max-md:w-[80%] " 
          placeholder="Search for items"
          value={searchValue}
          onChange={(e)=>{setSearchValue(e.target.value)}}
          onClick={(e)=>{runSubmit(e)}} 
          ref={searchObject}/>
        </div>
      </div>
      <div className="h-full w-[30%] bg-transparent flex flex-row items-center justify-evenly max-md:h-[100px] max-md:w-screen">
        
          <Link href="/" className="w-[48px] h-[64px] m-1">
          <div className="h-[48px] w-[48px] m-0 bg-slate-900/25 rounded-sm flex flex-row items-center justify-center">
            <img src="/Icons/NavigationBar/logo.png" className="h-[24px] w-[24px]" />
          </div>
          <article className="text-gray-700 mt-2 text-sm ">Shops</article>
          </Link>
          <Link href="/shops" className="w-[48px] h-[64px] m-1">
          <div className="h-[48px] w-[48px] m-0 bg-slate-900/25 rounded-sm flex flex-row items-center justify-center active:bg-slate-400">
            <img src="/Icons/NavigationBar/shops-24.png" className="h-[24px] w-[24px]" />
          </div>
          <article className="text-gray-700 mt-2 text-sm ">In-store</article>
          </Link>
          <Link href="/shops" className="w-[48px] h-[64px] m-1">
          <div className="h-[48px] w-[48px] m-0 bg-slate-900/25 rounded-sm flex flex-row items-center justify-center active:bg-slate-400">
            <img src="/Icons/NavigationBar/coin-24.png" className="h-[24px] w-[24px]" />
          </div>
          <article className="text-gray-700 mt-2 text-sm ">Rewards</article>
          </Link>
          <Link href="/shops" className="w-[48px] h-[64px] m-1">
          <div className="h-[48px] w-[48px] m-0 bg-slate-900/25 rounded-sm flex flex-row items-center justify-center active:bg-slate-400">
            <img src="/Icons/Navigation/price-tag-24.png" className="h-[24px] w-[24px]" />
          </div>
          <article className="text-gray-700 mt-2 text-sm ">Deals</article>
          </Link>
          <Link href="/favorites" className="w-[48px] h-[64px] m-1">
          <div className="h-[48px] w-[48px] m-0 bg-slate-900/25 rounded-sm flex flex-row items-center justify-center active:bg-slate-400">
            <img src="/Icons/NavigationBar/bookmark-24.png" className="h-[24px] w-[24px]" />
          </div>
          <article className="text-gray-700 mt-2 text-sm ">Saved</article>
          </Link>
       
      </div>
    </div>
  );
};
export default NavigationElements;
