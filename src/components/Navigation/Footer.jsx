import React from 'react'

const Footer = () => {
  return (
    <div className="footer-main-component-sigma h-auto w-full bg-slate-300 flex flex-row justify-around max-md:h-auto max-md:flex-col max-md:items-center">
        <hr />
        <div className="newsletter-sub-info h-full w-40% flex flex-col max-md:items-center bg-transparent p-4 mr-6 max-md:w-screen max-md:h-auto max-md:mb-2 ">
          <h2 className='font-bold font-sans text-4xl text-gray-900 max-md:flex max-md:flex-col mb-4 max-sm:text-center'>Laroft</h2>
          <article className='text-xl text-gray-700 font-serif mb-2 max-sm:text-center'>Style feeds your ego-that feeds your personality</article>
          <article  className='text-2xl mb-2 text-red-800 max-sm:text-center'>Subscribe to our newsletter</article>
          <div className='h-auto w-full flex flex-row mb-2 mt-4 ml-auto mr-auto max-md:[80%]'>
            <input type="email"  className='h-[44px] w-[66%] border-x outline-none pl-4 ml-auto rounded-l-md bg-gray-400 text-gray-800 placeholder-gray-600' placeholder='johndoe@gmail.com'/>
            <button className='w-[44%] h-[44px] bg-gray-950  max-md:w-120px'>Subscribe</button>
          </div>
        </div>
        <div className='h-full w-auto flex flex-row items-center max-md:h-auto max-md:w-full max-md:flex-col max-md:items-center max-md:hidden'>
          <ul className='h-full w-auto mt-4'>
            <header className='text-4xl text-gray-800 font-sans font-semibold'>Foods</header>
            <li className='text-xl text-gray-700 font-serif font-light '>Wet foods</li>
            <li className='text-xl text-gray-700 font-serif font-light '>Cat Cookies</li>
            <li className='text-xl text-gray-700 font-serif font-light '>Doggy Biscuits</li>
            <li className='text-xl text-gray-700 font-serif font-light '>Snack Sticks</li>
            <li className='text-xl text-gray-700 font-serif font-light '>Protein Mix</li>
          </ul>
        </div>
        <div className='h-full w-auto flex flex-row items-center ml-4 mr-4 max-md:h-auto max-md:w-full max-md:flex-col max-md:items-center max-md:hidden'>
          <ul className='h-full w-auto mt-4'>
            <header className='text-4xl text-gray-800 font-sans font-semibold'>Services</header>
            <li className='text-xl text-gray-700 font-serif font-light '>Customize</li>
            <li className='text-xl text-gray-700 font-serif font-light '>Altering</li>
            <li className='text-xl text-gray-700 font-serif font-light '>Event Cover</li>
            <li className='text-xl text-gray-700 font-serif font-light '>Grooming</li>
            
          </ul>
        </div>
        <div className='h-full w-auto flex flex-row items-center max-md:h-auto max-md:w-full max-md:flex-col max-md:items-center max-md:hidden'>
          <ul className='h-full w-auto mt-4'>
            <header className='text-4xl text-gray-800 font-sans font-semibold'>About</header>
            <li className='text-xl text-gray-700 font-serif font-light '>Shops</li>
            <li className='text-xl text-gray-700 font-serif font-light '>Shipping</li>
            <li className='text-xl text-gray-700 font-serif font-light '>Returning Service</li>
            <li className='text-xl text-gray-700 font-serif font-light '>Privacy</li>
            <li className='text-xl text-gray-700 font-serif font-light '>Terms & Conditions</li>
          </ul>
        </div>
    </div>
  )
}

export default Footer