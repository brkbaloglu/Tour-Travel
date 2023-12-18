import React from 'react'

const Gallery = () => {
  return (
    <div>
      <h2 className='text-center my-10 text-7xl font-bold'>Our <span className='text-blue-500'>Gallery</span></h2>
      <div className='grid grid-cols-3 gap-4 mx-10 my-20' id='gallery'>
          <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/3569950/pexels-photo-3569950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <img className='row-span-1 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/17499365/pexels-photo-17499365/free-photo-of-deniz-plaj-kum-manzarali.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/17077066/pexels-photo-17077066/free-photo-of-deniz-plaj-sahil-iskele.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/17077069/pexels-photo-17077069/free-photo-of-motorlu-tekne-ustten-gorunum-teknecilik-kusbakisi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <img className='row-span-4 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/17077068/pexels-photo-17077068/free-photo-of-deniz-plaj-okyanus-otel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/13172064/pexels-photo-13172064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/17454437/pexels-photo-17454437/free-photo-of-deniz-plaj-kum-yaz.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <img className='row-span-4 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/17679878/pexels-photo-17679878/free-photo-of-deniz-plaj-kum-okyanus.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/18195460/pexels-photo-18195460/free-photo-of-doga-su-seffaf-kiyi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       
      </div>
    </div>
    
  )
}

export default Gallery