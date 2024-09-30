"use client"
import React from 'react'
import Link from 'next/link'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation'
const GoogleIcon = '/Icons/Navigation/google.png'
const GithubIcon = '/Icons/Navigation/github.png'
const FacebookIcon = '/Icons/Navigation/facebook.png'
const SignIn = () => {
  const [emailSignUp, setEmailSignUp] = useState('')
  const route = useRouter()
  const handleSubmit = (e)=>{
    e.preventDefault()
    
  }
  return (
    <div className="sign-in-main-page h-screen w-screen bg-gray-900 backdrop-blur-3xl flex flex-row justify-around items-center">
        <div className="relative content-body-sign-in h-[90vh] w-[36vw] rounded-md p-1 bg-slate-100 flex flex-col max-md:w-screen max-md:h-screen">
          <article className='font-sans font-bold text-2xl text-black mb-9 ml-11 mt-4'>Laroft</article>
          <article className='text-3xl font-extrabold font-serif text-black ml-12 '>Log in</article>
          <Link href={'/'} className='text-gray-800 font-medium font-serif text-xs mt-2 ml-12 mb-3'> Continue to Laroft</Link>
          <label htmlFor="emailSignIn" className='text-black text-xs font-sans mt-3 ml-12'>Email</label>
          <input type="email" name="" id="emailSignIn" className='border-2 border-black outline-none h-[44px] w-[80%] rounded-md ml-auto mr-auto mt-2 mb-3 pl-4 text-gray-900 placeholder-gray-600' placeholder='johndoe@hostname.com' value={emailSignUp} onChange={(e)=>setEmailSignUp(e.target.value)}/>
          
          <button type="submit" className='h-[44px] w-[80%] outline-none border-none rounded-md bg-gray-800 text-slate-50 ml-auto mr-auto mb-3 mt-1' onClick={(e)=>handleSubmit(e)}>Sign in with email</button>
          <div className='h-auto w-[80%] ml-auto mr-auto flex'>
            <img src='' alt="" />
            <Link href={'/passkey'} className='text-gray-800 text-sm'>Sign in with pass key</Link>
          </div>
          <div className='flex flex-row items-center h-auto w-[80%] text-gray-900 mt-6 mb-6 ml-auto mr-auto'>
            <hr className='w-[46%] text-gray-900 ' />
            <article className='ml-2 mr-2'>or</article>
            <hr className='w-[46%] text-gray-900'/>
          </div>
          <div className='h-auto w-[80%] flex flex-row ml-auto mr-auto justify-evenly'>
            <button className='h-[64px] w-[32%] bg-slate-300 text-gray-900 rounded-md flex flex-row items-center justify-center '><img src={GithubIcon} alt="" /></button>
            <button className='h-[64px] w-[32%] bg-slate-300 text-gray-900 rounded-md flex flex-row items-center justify-center '><img src={FacebookIcon} alt="" /></button>
            <button className='h-[64px] w-[32%] bg-slate-300 text-gray-900 rounded-md flex flex-row items-center justify-center '><img src={GoogleIcon} alt="" /></button>
          </div>
          <div className='flex m-auto '>
            <article className='text-gray-900 text-sm'>New to Laroft</article>
            <Link href={'/client/sign-up'} className='text-gray-700 text-sm ml-2'>Get started</Link>
          </div>
          <div className='h-auto w-full flex flex-row justify-evenly text-gray-500 text-sm absolute bottom-4'>
            <Link href={'/Help'}>Help</Link>
            <Link href={'/privacy-policy'}>Privacy</Link>
            <Link href={'Terms'}>Terms </Link>
            </div>
        </div>
    </div>
  )
}

export default SignIn