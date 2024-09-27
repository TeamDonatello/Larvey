"use client"
import { Store } from '@/app/_lib_store/Store'
import NavigationElements from '@/components/Navigation/NavigationElements'
import React from 'react'
import { Provider } from 'react-redux'
const Notifications = () => {
  return (
    <Provider store={Store}>
        <div className="notifications-parent overflow-x-hidden">
            <NavigationElements/>
            <div className="notifications-content h-screen w-screen bg-slate-300">
                <div className="h-[72px] w-screen pl=4 mb-4">
                    <button className='h-[64px] w-[120px] outline-none bg-blue-600 shadow-xl ml-4 mt-2 rounded-md max-ms:h-[32px] max-ms:w-[43px ma] max-ms:text-xs'>
                        Refresh
                    </button>
                </div>
                <div className="w-[90%] h-[64px] border-solid border-x shadow-lg ml-auto mr-auto mt-4 overflow-hidden active:h-auto hover:h-auto hover:pb-4">
                    <h1 className='font-serif font-light text-gray-900 text-xl ml-4 mb-3 '>You've a new notification</h1>
                    <article className='text-xs text-balance text-gray-700 mt-4 ml-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, vitae reprehenderit. Corrupti rerum optio fugit, obcaecati facere delectus quaerat accusamus 
                        repellat doloribus laboriosam quidem odio veritatis mollitia est hic maxime!</article>
                </div>
                <div className="w-[90%] h-[64px] border-solid border-x shadow-lg ml-auto mr-auto mt-4 overflow-hidden active:h-auto hover:h-auto hover:pb-4">
                    <h1 className='font-serif font-light text-gray-900 text-xl ml-4 mb-3'>You've a new notification</h1>
                    <article className='text-xs text-balance text-gray-700 mt-4 ml-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, vitae reprehenderit. Corrupti rerum optio fugit, obcaecati facere delectus quaerat accusamus 
                        repellat doloribus laboriosam quidem odio veritatis mollitia est hic maxime!</article>
                </div>
                <div className="w-[90%] h-[64px] border-solid border-x shadow-lg ml-auto mr-auto mt-4 overflow-hidden active:h-auto hover:h-auto hover:pb-4">
                    <h1 className='font-serif font-light text-gray-900 text-xl ml-4 mb-3'>You've a new notification</h1>
                    <article className='text-xs text-balance text-gray-700 mt-4 ml-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, vitae reprehenderit. Corrupti rerum optio fugit, obcaecati facere delectus quaerat accusamus 
                        repellat doloribus laboriosam quidem odio veritatis mollitia est hic maxime!</article>
                </div>
            </div>
        </div>
    </Provider>
  )
}

export default Notifications