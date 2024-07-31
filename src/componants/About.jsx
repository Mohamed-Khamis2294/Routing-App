import React from 'react'
import Header from './Header';

export default function About() {
  return (
    <div className='mt-[67px] py-44  bg-[#1ABC9C] text-center  text-white'>
       <Header text={'ABOUT COMPONENT'} color={'#fff'} />
       <div className="container mt-5">
        <div className='w-8/12 grid md:grid-cols-2 mx-auto gap-10'>
          <p className='text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p className='text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
       </div>
    </div>
  )
}
