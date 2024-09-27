"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const Redirect = () => {
  const Router = useRouter()
  Router.back(-2,{replace:true})
}

export default Redirect