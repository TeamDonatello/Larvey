import ProductDetails from "@/components/Products/ProductDetails"
import {Metadata} from "next";
export const metadata = {title:{
  default:'Laroft'
}}
export default function LandingPage(){
  return(
    <>
      <ProductDetails id='0po09' value={'val'}/>
    </>
  )
}