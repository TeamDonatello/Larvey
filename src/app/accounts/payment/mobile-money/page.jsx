"use client"
import { useRouter} from "next/navigation"
import React ,{useState, useEffect,useRef}from "react"
const MobileMoney = () => {
  const router = useRouter()
  const inputObject = useRef()
  const [objectValue, setObjectValue]= useState('')
  const [warning,setWarning] = useState('border-red-600 bg-red-300/35')
  const greenLight = ''
  const handleValidate =()=>{
      if(inputObject.current.value.length>10 || inputObject.current.value.length<10){
        inputObject.current.classList += warning
        setTimeout(()=>{
          setWarning('border-emerald-500 bg-emerald-300/35')
        },3000)
      }
  }
  return (
    <div className='flex flex-row items-center justify-center w-screen h-screen bg-transparent'>
        <div className="mobile-money-payment bg-slate-300 flex flex-col rounded-md justify-around items-center w-96 h-72 place-self-center justify-self-center max-sm:w-screen">
            <h1 className="mobile-money text-emerald-600 font-sans font-light text-3xl">Pay with M-Pesa</h1>
            <input 
                type="number"
                ref={inputObject}
                className="outline-none transition-colors bg-emerald-300/30 border-emerald-500 border-2 pl-3 h-12 mr-auto ml-auto placeholder-gray-400 text-gray-500 w-[80%] rounded-md "
                value={objectValue}
                onChange={(e)=>{setObjectValue(e.target.value)}}
                placeholder='07 712 345 678'
                max={10} />
            <div className="w-full h-16 bg-transparent flex flex-row justify-around">
                <button 

                  onClick={()=>{router.push('/accounts/payment')}}
                  className='rounded-lg h-12 w-28 bg-emerald-300/30 font-sans text-center text-gray-600 text-sm'>close</button>
                <button 
                type="submit"
                  onClick={()=>handleValidate()}
                  className='rounded-lg h-12 w-28 bg-emerald-500 text-lg text-center'>Register</button>
            </div>
        </div>   
    </div>
    
  )
}

export default MobileMoney