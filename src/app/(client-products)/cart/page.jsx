"use client"
import { Store } from '@/app/_lib_store/Store'
import NavigationElements from '@/components/Navigation/NavigationElements'
import React, { useEffect } from 'react'
import { useRef,useState } from 'react'
import { Provider } from 'react-redux'
const CartItemsDisplay = () => {
    const DeleteIcon = useRef()
  return (
    <Provider store={Store}>
            <div className="parent-cart overflow-x-hidden">
                <NavigationElements/>
                <div className="cart-body h-screen w-screen bg-slate-300 flex flex-col items-center">
                    <div className="child-product mt-2 h-[120px] w-[80%] bg-slate-400 border-b-gray-500 shadow-md flex flex-row flex-shrink-0 items-center max-md:w-screen max-md:justify-between">
                        <img src="/Images/Test/trainers.jpg" className='h-96px mt-auto mb-auto ml-3 mr-2 h-[96px] w-[auto]  rounded-md'/>
                        <div className='h-[80%] w-[70%] p-2 max-lg:w-auto'>
                            <h1 className='text-2xl font-mono text-gray-900'>Trainers</h1>
                            <article className='font-serif text-xs text-gray-700'>$ 123.456</article>
                        </div>
                        <div className='h-[80%] w-[14%] ml-3 flex flex-row items-center p-1 max-lg:w-auto'>
                            <button className='h-[44px] w-[44px] bg-blue-600 flex flex-row items-center justify-center rounded-full m-2 active:bg-blue-500'><img src={"/Icons/Navigation/minus-16.png"}/></button>
                            <article className='h-6 w-10 text-center text-gray-950' ref={DeleteIcon}>12</article>
                            <button className='h-[44px] w-[44px] bg-blue-600 flex flex-row items-center justify-center rounded-full m-2 active:bg-blue-500'><img src="/Icons/Navigation/plus-16.png"/></button>
                        </div>
                    </div>
                </div>
            </div>
    </Provider>
  )
}

export default CartItemsDisplay