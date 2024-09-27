"use client"
import React from 'react'
import Link from 'next/link'
import NavigationElements from '@/components/Navigation/NavigationElements'
const ContactFrom = () => {
  return (
   <div className="contact-main-component overflow-x-hidden">
    <NavigationElements/>
        <div className="parent-element grid grid-rows-[auto_auto] bg-slate-300 grid-cols-[auto_auto] h-auto w-screen max-md:flex max-md:flex-col max-md:p-0 max-md:rounded-none max-md:items-center">
            <div className='row-span-2 mt-4  col-span-1 h-[86vh] w-[40vw] bg-slate-400 p-4 rounded-md m-6 max-md:w-[80vw] max-md:h-[80vh] max-md:m-0 max-sm:w-screen '>
                <article className='text-red-600 text-sm '>Get in touch</article>
                <h1 className='text-2xl text-gray-800 mt-1 mb-2'>Let's Chat, Reach Out to Us</h1>
                <p className='text-sm text-pretty text-gray-700'>Have questions or feedback? We are here to help . 
                    Send us a message and we will respond to you in the 
                    shortest time possible.
                </p>
                <hr className='mt-2 mb-2 text-gray-800'/>
                <div className='w-full h-[64px]  flex items-center justify-around max-md:flex-col max-md:h-auto max-md:mr-auto max-md:ml-auto max-md:mb-4 '>
                    <div className='h-[80%] w-auto flex flex-col max-md:w-[90%]'>
                        <label htmlFor="FName" className='text-sm text-gray-600'>First name</label>
                        <input type="text" name="" id="FName" className='h-[32px] w-auto  rounded-sm pl-4 outline-none border-none' placeholder='@first name'/>
                    </div>
                    <div className='h-[80%] w-auto flex flex-col max-md:w-[90%]'>
                        <label htmlFor="LName" className='text-sm text-gray-600'>Last name</label>
                        <input type="text" name="" id="LName" className='h-[32px] w-auto  rounded-sm pl-4 outline-none border-none' placeholder='@last name'/>
                    </div>
                </div>
                <div className='h-[64px] w-full flex flex-col pl-5'>
                    <label htmlFor="PEmail" className='text-sm text-gray-600'>Email</label>
                    <input type="email" name="" id="PEmail" placeholder='johndoe@gmail.com' className='h-[32px] w-[80%] pl-4 outline-none border-none max-md:w-[94%]'/>
                </div>
                <div className='flex flex-col '>
                    <label htmlFor="YMessage" className='text-sm text-gray-600 '>Message</label>
                    <textarea name="" id="YMessage" className='outline-none border-none h-16 text-gray-800 p-2  ' fixed></textarea>
                </div>
                <div className='h-auto flex mt-2'>
                    <input type="checkbox" name="" id="" /> 
                    <article className='text-gray-900 ml-2'>I agree to</article>
                    <Link href="/policy" className='text-gray-600 ml-2'>privacy policy</Link>
                </div>
            </div>
            <img src="/Images/Test/Jacket-11.jpg" className='h-[60vh] w-[30vw] mt-4 rounded-md max-md:w-screen max-md:h-auto max-md:mt-4 max-md:mb-4' />
            <div className='h-[20vh] w-[30vw] bg-transparent mt-3 flex-col max-md:w-screen max-md:auto'>
                <div className='flex items-center h-16 shadow-inner w-full bg-slate-700/25'>
                    <img src="/Icons/NavigationBar/settings-24.png" className="m-2" />
                    <div className='ml-4'>
                        <h1 className='text-xl text-gray-700 '>Email</h1>
                        <article className='text-sm text-gray-600 font-sans'>lar.vey.an@gmail.com</article>
                    </div>
                </div>
                <div className='flex items-center h-16 shadow-inner w-full bg-slate-700/25 mt-2'>
                    <img src="/Icons/NavigationBar/settings-24.png" className="m-2" />
                    <div className='ml-4'>
                    <h1 className='text-xl text-gray-700 '>Phone</h1>
                        <article className='text-sm text-gray-600 font-sans'>+ (254) 790 845 067</article>
                    </div>
                </div>
            </div>
        </div>
   </div>
  )
}

export default ContactFrom