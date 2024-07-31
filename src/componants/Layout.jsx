import React from 'react'
import { Mynav } from './Navbar';
import { Outlet } from "react-router-dom";
import Footer from './Footer';


export default function Layout() {
  return (
    <div className="Container">
      <Mynav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
