import React from 'react'

const Plan = () => {
  return (
    <div id='plan' className='grid grid-cols-2 mx-10'>
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh] '>
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/1430675/pexels-photo-1430675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/1430676/pexels-photo-1430676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/1483054/pexels-photo-1483054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className='flex flex-col h-full justify-center mx-10'>
            <h3 className='font-bold text-6xl my-8'>Plan your <span className='text-blue-500'>next trip</span></h3>
            <h4 className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quia?</h4>
            <h5 className='pb-6 pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia adipisci nesciunt suscipit itaque temporibus dolorem nam, nisi amet nulla rem dicta iure aperiam voluptates tenetur dolorum id, soluta excepturi cumque!</h5>
            <div>
                <button className='border-2 px-4 py-2  rounded-xl border-black hover:bg-black hover:text-white'>Learn More</button>
                <button className='text-blue-500 border-2 border-blue-500 px-4 py-2 mx-4 rounded-xl hover:bg-blue-500 hover:text-white'>Book Your Trip</button>
            </div>
        </div>
    </div>
  )
}

export default Plan