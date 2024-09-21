"use client"
import React from 'react'
import Link from 'next/link'
const FacebookIcon = '/Icons/Navigation/facebook.png'
const GithubIcon = 'Icons/Navigation/github.png'
const GoogleIcon = '/Icons/Navigation/google.png'
const EmailIcon = '/Icons/Navigation/github.png'
const Page = () => {
  return (
    <div className="sign-up-main-component h-screen w-screen flex flex-row items-center justify-center bg-gray-900">
        <div className=" sign-up-component relative w-[36vw] h-[90vh] p-3 bg-slate-300 rounded-md max-sm:w-screen max-sm:h-screen">
          <article className='text-gray-900 text-3xl font-sans font-bold ml-12 mt-4 mb-4'>Laroft</article>
          <article className='text-gray-800 text-2xl font-semibold ml-12 mb-3'>Create a Loroft account</article>
          <article className='text-xl text-gray-700 mb-4 font-thin text-pretty ml-12'>One step to access Order tracking privileges</article>
          <div className='flex flex-col h-auto w-[80%] ml-auto mr-auto'>
            <button className='w-full h-[48px] bg-slate-600 mt-1 mb-2 rounded-md'> <img src={EmailIcon} alt="" /> Sign up with Email</button>
            <button className='w-full h-[48px] bg-slate-600 mt-1 mb-2 rounded-md'> <img src={GithubIcon} alt="" /> Sign up with Github</button>
            <button className='w-full h-[48px] bg-slate-600 mt-1 mb-2 rounded-md'> <img src={FacebookIcon} alt="" /> Sign up with Meta</button>
            <button className='w-full h-[48px] bg-slate-600 mt-1 mb-2 rounded-md'> <img src={GoogleIcon} alt="" /> Sign up with Google</button>
          </div>
          <div className='h-auto w-[80%] flex flex-row items-center mr-auto ml-auto mb-4 mt-2' >
            <hr className='h-auto w-[48%] bg-gray-900'/>
            <article className='text-black ml-2 mr-2 '>or</article>
            <hr className='h-auto w-[48%] bg-gray-900'/>
          </div>
          <div className='flex flex-row'>
            <article className='text-gray-900 ml-12'>Aready have an account ? </article>
            <Link href={'/sign-in'} className='text-gray-700 ml-3'> Sign In</Link>
          </div>
          <p className='w-[80%] text-gray-900 h-auto ml-auto mr-auto mt-2 '>By proceeding you agree to the 
            <Link href='/Terms' className=' text-gray-700 ml-2 mr-2'>Terms and Conditions</Link> and 
            <Link href='/Policy' className=' text-gray-700 ml-2 mr-2'>Privacy policy</Link>
          </p>
          <div className='absolute bottom-3 h-auto w-full flex flex-row justify-evenly'>
            <Link href='/Terms' className='text-sm text-gray-700 '>Terms</Link>
            <Link href='/help' className='text-sm text-gray-700 '>Help</Link>
            <Link href='/policy' className='text-sm text-gray-700 '>Policy</Link>
          </div>
        </div>
    </div>
  )
}

export default Page