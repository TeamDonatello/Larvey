import Footer from "@/components/Navigation/Footer";
import Navigation from "@/components/Navigation/Navigation";
import ProductDetails from "@/components/Products/ProductDetails";
import {Metadata} from "next";
export const metadata = {title:{
  default:'Laroft'
}}
export default function LandingPage(){
  return(
    <div className="overflow-x-hidden">
      
      <ProductDetails val='val' id={'id'}/>
      <Footer/>
    </div>
  )
}