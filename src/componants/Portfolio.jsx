import React from "react";
import Header from "./Header";
import imgOne from "../imgs/poert1.png";
import imgTwo from "../imgs/port2.png";
import imgThree from "../imgs/port3.png";
import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";

export default function Portfolio() {
  const [layer, setLayer] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  function openLayer(imgSrc) {
    setCurrentImage(imgSrc);
    setLayer(true);
  }

  function closeLayer() {
    setLayer(false);
    setCurrentImage('');
  }

  return (
    <div className="mt-[67px] py-7">
      <Header text={"PORTFOLIO COMPONENT"} color={"#2C3E50"} />
      <div className="container mx-auto mt-5">
        <div className="w-10/12 mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div onClick={() => openLayer(imgOne)} className="group/one transition-all duration-700 relative rounded-lg overflow-hidden">
            <img src={imgOne} alt="" className="block" />
            <div className="layer bg-teal-400 opacity-0 group-hover/one:opacity-60 z-20 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <HiOutlinePlus className="text-8xl text-white"/>
            </div>
          </div>
          <div onClick={() => openLayer(imgTwo)} className="group/two transition-all duration-700 relative rounded-lg overflow-hidden">
            <img src={imgTwo} alt="" className="block" />
            <div className="layer bg-teal-400 opacity-0 group-hover/two:opacity-60 z-20 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <HiOutlinePlus className="text-8xl text-white"/>
            </div>
          </div>
          <div onClick={() => openLayer(imgThree)} className="group/three transition-all duration-700 relative rounded-lg overflow-hidden">
            <img src={imgThree} alt="" className="block" />
            <div className="layer bg-teal-400 opacity-0 group-hover/three:opacity-60 z-20 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <HiOutlinePlus className="text-8xl text-white"/>
            </div>
          </div>
          <div onClick={() => openLayer(imgOne)} className="group/four transition-all duration-700 relative rounded-lg overflow-hidden">
            <img src={imgOne} alt="" className="block" />
            <div className="layer bg-teal-400 opacity-0 group-hover/four:opacity-60 z-20 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <HiOutlinePlus className="text-8xl text-white"/>
            </div>
          </div>
          <div onClick={() => openLayer(imgTwo)} className="group/five transition-all duration-700 relative rounded-lg overflow-hidden">
            <img src={imgTwo} alt="" className="block" />
            <div className="layer bg-teal-400 opacity-0 group-hover/five:opacity-60 z-20 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <HiOutlinePlus className="text-8xl text-white"/>
            </div>
          </div>
          <div onClick={() => openLayer(imgThree)} className="group/six transition-all duration-700 relative rounded-lg overflow-hidden">
            <img src={imgThree} alt="" className="block" />
            <div className="layer bg-teal-400 opacity-0 group-hover/six:opacity-60 z-20 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <HiOutlinePlus className="text-8xl text-white"/>
            </div>
          </div>
        </div>
      </div>
      {layer && (
        <div className="layerWithImg">
          <div className="fixed top-0 bottom-0 left-0 right-0 bg-slate-100 opacity-30">
            {/* Parent div with opacity */}
          </div>
          <div onClick={closeLayer} className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-20">
            {/* Image wrapper div */}
            <img src={currentImage} alt="" className="block w-2/5 z-40" />
          </div>
        </div>
      )}
    </div>
  );
}
