"use client"
import {Metadata} from "next";
import NavigationElements from "@/components/Navigation/NavigationElements";
import ProductDetails from "@/components/Products/ProductDetails";
import HomeDefaultPage from "@/components/Home/home";

export default function LandingPage(){
  return(
    <div className="overflow-x-hidden">
       <NavigationElements/>
       <HomeDefaultPage/>     
    </div>
  )
}