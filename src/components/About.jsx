import React from 'react'

const About = () => {
  return (
    <div className='grid m-20 grid-cols-2 gap-4' id='about'> 
        <div className='mx-10'>
            <h4 className='text-center mb-[100px] text-5xl font-bold '>About <span className='text-blue-500'>Us</span></h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ad reprehenderit tempore, suscipit delectus amet nobis inventore iusto labore eius asperiores nemo reiciendis animi unde est accusamus nostrum quo in voluptatem quisquam. Alias consectetur minus quam nemo beatae laboriosam voluptate quaerat sed, tempore et ab sequi praesentium cumque in eius?</p>
        </div>
        <div className='mx-10'>
            <img className='' src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            
        </div>
    </div>
  )
}

export default About