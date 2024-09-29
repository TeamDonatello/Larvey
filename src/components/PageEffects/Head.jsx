"use client"
import React from 'react'
import Head from 'next/head'
import { useState ,useEffect } from 'react'

const HeadFile = () => {
    const favicon_1 = '/Icons/NavigationBar/favicon.ico'
    const favicon_2 = 'favicon'
    const [pageFavicon , setPageFavicon] = useState(favicon_1)
    const [pageTitle , setPageTitle] = useState('Welcome to laroft software solutions today is tomorrow waiting')
    const [isTrue , setIsTrue] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            if(isTrue==true){
                setPageFavicon(favicon_1)
                setPageTitle('Laroft')
                setIsTrue(prevValue=>!prevValue)
            }
            else if (isTrue!==true){
                setPageTitle('Make sales , less fanum taxin')
                setPageFavicon(favicon_2)
                setIsTrue(prevValue=>!prevValue)
            }
            else return setIsTrue(true)
        },5000)
    },[])
  return (
    <Head>
        <head>
            <link rel="shortcut icon" href={pageFavicon} type="image/x-icon" />
            <title>{pageTitle}</title>
        </head>
    </Head>
  )
}

export default HeadFile