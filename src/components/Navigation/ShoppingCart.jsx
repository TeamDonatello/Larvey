import React from 'react'
import { useEffect , useState ,useRef } from 'react'
import Image from 'next/image'
const PlusSign = '/Icons/Navigation/plus-32.png'
const MinusSign = '/Icons/Navigation/minus-32.png'
const DeleteSign = '/Icons/Navigation/dollar-sign-32.png'
const PlaceholderImage = "/Images/Test/Jacket.jpg"
const ShoppingCart = () => {
  
  return (
    <div className="main-cart-component h-screen bg-slate-200 w-full flex flex-col items-center pt-4">
        <div className="cart-component w-[90vw] h-32 bg-blue-900 rounded-3xl flex flex-row items-center justify-evenly ">
          <div className='w-auto h-full flex flex-row items-center'>
            <img src={PlaceholderImage} alt="" className='h-[80%] w-auto ml-0' />
          </div>
          <div className='h-full w-[50%] flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-thin'>Product Description</h1>
            {/* <article>Product Simple Details</article> */}
            <article className=' font-serif font-bold text-xl '>$123.45</article>
          </div>
          <div className='flex flex-row h-20 w-[240px] justify-evenly items-center'>
            <button className='h-12 w-12 outline-none rounded-full bg-transparent m-1 mr-3 text-gray-900 flex flex-row items-center justify-center'><img src={MinusSign} alt="" /></button>
            <article className='h-12 w-auto text-center flex flex-row items-center'>32</article>
            <button className=' w-12 h-12 outline-none rounded-full bg-transparent m-1 ml-3 text-gray-900 flex flex-row items-center justify-center' ><img src={PlusSign} alt="" /></button>
          </div>
        </div>
        <div className='h-[64px] w-[90vw] flex flex-row rounded-md mt-5 items-center justify-between bg-blue-700'>
          <article className='ml-5 text-2xl font-sans font-thin'>Total Bill + VAT</article>
          <article className='mr-3 text-2xl font-serif font-semibold'>= $1234.56</article>
        </div>
        <div>
         <button className='w-[20vw] h-14 bg-slate-500 mt-5 rounded-3xl'>Add more items</button> 
        <button className='w-[30vw] h-14 bg-blue-600 mt-5 ml-5 rounded-3xl'>Checkout</button>
        
        </div>

    </div>
  )
}

export default ShoppingCart