import React from 'react'
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin} from "react-icons/fa";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='grid grid-cols-3 h-[150px] my-14'>
        <div className='flex items-center justify-center'>
            <FaFacebook className='mx-2 cursor-pointer hover:bg-blue-500 hover:text-white p-1 rounded-xl' size={40}/>
            <FaTwitter className='mx-2 cursor-pointer hover:bg-blue-500 hover:text-white p-1 rounded-xl' size={40}/>
            <FaWhatsapp  className='mx-2 cursor-pointer hover:bg-blue-500 hover:text-white p-1 rounded-xl' size={40}/>
            <FaLinkedin className='mx-2 cursor-pointer hover:bg-blue-500 hover:text-white p-1 rounded-xl' size={40}/>
        </div>
        <div className='flex items-center justify-center flex-col border-x-2 border-black '>   
            <Link className='text-lg my-2 font-semibold hover:underline underline-offset-8 cursor-pointer hover:text-blue-500' smooth={true} to='home'>Support</Link>
            <Link className='text-lg my-2 font-semibold hover:underline underline-offset-8 cursor-pointer hover:text-blue-500' smooth={true} to='about'>Documentation</Link>
            <Link className='text-lg my-2 font-semibold hover:underline underline-offset-8 cursor-pointer hover:text-blue-500' smooth={true} to='plan'>Pricing</Link>
            <Link className='text-lg my-2 font-semibold hover:underline underline-offset-8 cursor-pointer hover:text-blue-500' smooth={true} to='gallery'>Refund</Link>
        </div>
        <div className='flex items-center justify-center flex-col'>   
            <Link className='text-lg my-2 font-semibold hover:underline underline-offset-8 cursor-pointer hover:text-blue-500' smooth={true} to='home'>Home</Link>
            <Link className='text-lg my-2 font-semibold hover:underline underline-offset-8 cursor-pointer hover:text-blue-500' smooth={true} to='about'>About</Link>
            <Link className='text-lg my-2 font-semibold hover:underline underline-offset-8 cursor-pointer hover:text-blue-500' smooth={true} to='plan'>Plan</Link>
            <Link className='text-lg my-2 font-semibold hover:underline underline-offset-8 cursor-pointer hover:text-blue-500' smooth={true} to='gallery'>Gallery</Link>
        </div>
    </div>
  )
}

export default Footer