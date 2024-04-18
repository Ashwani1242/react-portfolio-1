import React from 'react'

const Navbar = () => {
  return (
    <div className='flex md:p-2 top-2 right-2 text-lg fixed z-50'>
      <ul className='md:flex md:space-x-[1px] md:space-y-0 space-y-[1px] bg-black border border-black w-min'>
        <li className='py-2 px-4 bg-white cursor-pointer'>Intro</li>
        <li className='py-2 px-4 bg-white cursor-pointer'>About</li>
        <li className='py-2 px-4 bg-white cursor-pointer'>Projects</li>
        <li className='py-2 px-4 bg-white cursor-pointer'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
