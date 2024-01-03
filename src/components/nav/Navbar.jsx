import React, { useState } from 'react';
import {BiMenu, BiX} from "react-icons/bi";
import cvForm from '../../assets/cv.pdf';

const navLinks=[
  {name:"Home",link:"#"},
  {name:"About me",link:"#about"},
  {name:"Services",link:"#services"},
  {name:"Projects",link:"#projects"},
  {name:"Contact",link:"#contact"},
]

const Navbar = () => {
  const [showMenu,setShowMenu]= useState(false);
  window.addEventListener("scroll",()=>{
    setShowMenu(false);
  })
  return (
    <div className='main-nav'>
        <div className="nav_bar">
            <div className="flex justify-between min-h-[50px] lg:min-h-[75px] items-center ">
                <a className="nav_logo" href='#' >Portfolio</a>
                <ul className={`nav_links ${showMenu && "show"}`}>
                    {
                      navLinks.map(item=>(
                        <li key={item.name}>
                          <a className='hover:text-[#965039]' href={item.link}>{item.name}</a>
                        </li>
                      ))
                    }
                    <a href={cvForm} className='nav_btn mx-auto mb-3 lg:hidden cursor-pointer' download>Download CV</a>
                    <button className='nav_menu_icon lg:hidden' onClick={()=>setShowMenu(!showMenu)}>
                      <BiX size={25}/>
                    </button>
                </ul>
                <a href={cvForm} className='nav_btn hidden lg:block cursor-pointer hover:bg-[#6d6391]' download>Download CV</a>
                <button className='lg:hidden text-black' onClick={()=>setShowMenu(!showMenu)}>
                  <BiMenu size={25}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar;