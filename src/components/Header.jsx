import React from 'react'
import {Link} from 'react-scroll'
const Header = () => {
  return (
    <div className='h-[80px] flex items-center justify-around' id='header'>
        <div>
            <h2 className='font-bold text-2xl '>Tour <span className='text-blue-500'>& Travel</span></h2>
        </div>
        <div className='flex items-center justify-center '>
            <Link className='mx-4 my-2 text-lg hover:underline cursor-pointer hover:text-blue-500 font-semibold' smooth={true} to='home'>Home</Link>
            <Link className='mx-4 my-2 text-lg hover:underline cursor-pointer hover:text-blue-500 font-semibold' smooth={true} to='about'>About</Link>
            <Link className='mx-4 my-2 text-lg hover:underline cursor-pointer hover:text-blue-500 font-semibold' smooth={true} to='plan'>Plan</Link>
            <Link className='mx-4 my-2 text-lg hover:underline cursor-pointer hover:text-blue-500 font-semibold' smooth={true} to='gallery'>Gallery</Link>
        </div>
    </div>
  )
}

export default Header