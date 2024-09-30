"use client"
import React ,{useState ,useEffect} from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import Link from 'next/link'
const AdminSearchBar = () => {
  return (
    <div>
        <div>

        </div>
        <div>
            <button>
                <img src="" alt="" />
            </button>
            <input type="text" />
        </div>
        <Link href="/notifications">
            <div>
               <img src="" alt="" /> 
            </div>
            
        </Link>
        <div>
            <Link href="/credentials">Account Details</Link>
        </div>
    </div>
  )
}

export default AdminSearchBar