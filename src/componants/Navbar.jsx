
"use client";

import { Navbar } from "flowbite-react";
import {Link,NavLink} from 'react-router-dom';

export function Mynav() {
  return (<>
      <Navbar fluid  className="lg:!px-32 bg-custom-blue fixed top-0 right-0 left-0 z-50">
      <Link to='home'>
        <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">Start Framework</span>
      </Link>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="ml-auto">
        <NavLink to="about">About</NavLink>
        <NavLink to="portfolio">Portfolio</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </Navbar.Collapse>
    </Navbar>
</>
  );
}


