"use client"
import Link from "next/link"
import React,{useState , useEffect ,useRef} from 'react'
export default function(){
    const [dataValue ,setDataValue] = useState('')
    return(
        <div className="w-screen h-12">
            <div>
                <div>
                    <img src="" alt="" />
                    <h1></h1>
                </div>
                <div>
                    <div>
                        <button>
                            <img src="" alt="" />
                        </button>                        
                        <input 
                            value={dataValue}
                            onChange={(e)=>{setDataValue(e.target.value)}}
                            type="text"  />
                    </div>
                    <div>
                        <Link href="/admin/notifications"> 
                            <div>
                                <img src="" alt="" />
                                <sup></sup>
                            </div>
                        </Link>
                        <link>
                            <div>
                               <img src="" alt="" />
                               <sup></sup>
                            </div>
                        </link>
                        <Link href="/admin/settings" >
                            <div>
                                <img src="" alt="" />
                                <sup>

                                </sup>
                            </div>
                        </Link>
                        <Link>
                            <div>
                                <img src="" alt="" />
                                <sup></sup>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}