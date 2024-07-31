import React from 'react';
import { HiOutlineStar } from "react-icons/hi";

export default function Header({ text, color }) {
  return (
    <>
      <h1 className='text-5xl font-bold mb-3 text-center ' style={{ color: color }}>{text}</h1>
      <div className="flex justify-center gap-3 items-center">
        <span className="block w-24 h-1" style={{ backgroundColor: color }}></span>
        <span className='block'>
          <HiOutlineStar className='text-2xl' style={{ fill: color }} />
        </span>
        <span className="block w-24 h-1" style={{ backgroundColor: color }}></span>
      </div>
    </>
  );
}

