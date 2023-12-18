import React from 'react'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div id='home'>
        <img className='w-full h-screen left-0 top-0' src="https://images.pexels.com/photos/16527965/pexels-photo-16527965/free-photo-of-isik-deniz-safak-peyzaj.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='w-full h-screen left-0 top-[80px] bg-black/25 absolute'></div>
        <div className='absolute left-[100px] top-[300px] text-white'>
            <h2 className='text-6xl font-bold'>Hotels <span className='text-blue-300'>& Beaches</span></h2>
            <p className='text-xl w-[800px] my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus itaque nostrum commodi blanditiis cum fugit velit illum architecto doloremque cupiditate.</p>
            <Link className='border border-white px-4 py-2 rounded-xl hover:bg-white hover:text-blue-500 cursor-pointer' to='plan'>Reserve Now</Link>
        </div>
    </div>
  )
}

export default Home