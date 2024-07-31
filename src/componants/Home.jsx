import React from 'react'
import homeImg from '../imgs/avataaars.png'
import Header from './Header';

export default function Home() {
  return (
    <div className='mt-[67px] py-7  bg-[#1ABC9C] text-center  text-white'>
     <img src={homeImg} className='block mx-auto w-56' alt="avatar" /> 
      <Header text={'START FRAMEWORK'} color={'#fff'}/>
      <p className='mt-3'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}
