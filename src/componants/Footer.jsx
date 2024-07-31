import React from 'react'
import { FaFacebook,FaTwitter,FaLinkedinIn,FaGlobe  } from "react-icons/fa";

export default function Footer() {
  return (<>
  <div className='bg-custom-blue  text-white text-center'>
    <div className="container  py-24 mx-auto grid grid-rows-1 gap-28  lg:grid-cols-3 lg:gap-2">
      <div className="inner ">
      <h4 className='text-[28px] font-semibold'>Location</h4>
        <p className='my-2'>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
      <div className="inner">
      <h4 className='text-[28px] font-semibold mb-2'>AROUND THE WEB</h4>
      <div className='flex justify-center gap-3'>
     <span className='border rounded-full '> <span className="block p-2"><FaFacebook/></span></span>
     <span className='border rounded-full '> <span className="block p-2"><FaTwitter/></span></span>
     <span className='border rounded-full '> <span className="block p-2"><FaLinkedinIn/></span></span>
     <span className='border rounded-full '> <span className="block p-2"><FaGlobe/></span></span>
      </div>
      </div>
      <div className="inner ">
      <h4 className='text-[28px] font-semibold'>ABOUT FREELANCER</h4>
        <p className='my-2'>Freelance is a free to use, licensed Bootstrap theme</p>
        <p>created by Route</p>
      </div>
    </div>
  </div>
  <div className='text-center bg-[#1A252F] py-5 text-white'>
    <p>Copyright © Your Website 2021</p>
  </div>
  </>
  )
}
