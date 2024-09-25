"use client"
import {Metadata} from "next";
import { Provider } from "react-redux";
import { Store } from "./_lib_store/Store";
import NavigationElements from "@/components/Navigation/NavigationElements";
import ProductDetails from "@/components/Products/ProductDetails";

export default function LandingPage(){
  return(
    <div className="overflow-x-hidden">
      <Provider store={Store}>
       <NavigationElements/>
       <ProductDetails/>
      </Provider>
      
    </div>
  )
}