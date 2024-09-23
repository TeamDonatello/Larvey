"use client"
import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
const metadata = {
  title : '404 Item is not on this server',
}
const NotFound = () => { 
  const router = useRouter()
  const handleClientReRoute = () =>{
    // router.push('/',{replace:true})
  }
  useEffect(()=>{
    setTimeout(()=>{
      handleClientReRoute()
    },900000000000)
  },[])
  return (
    <div className="error-page h-screen w-screen grid place-items-center">
        <div className='h-auto m-auto'>
          <button className="button-wait-list-value h-[44px] w-[240px] rounded-xl text-center bg-slate-100 animate-pulse text-slate-950" >Wait list</button>
        </div>
        <div className="error-404-numbers">
          <h1 className='text-9xl font-extrabold backdrop-blur-0 animate-pulse m-2 font-mono'>404</h1>
        </div>
        <div className="error-404-not-found">
          <article className='animate-pulse text-2xl m-2'>Page Not Found</article>
        </div>
        <button className='button-wait-list-value h-[44px] w-[240px] rounded-xl text-center bg-slate-100 animate-pulse text-slate-950 m-3' onClick={()=>{handleClientReRoute()}}>Back</button>
    </div>
  )
}
export {metadata}
export default NotFound