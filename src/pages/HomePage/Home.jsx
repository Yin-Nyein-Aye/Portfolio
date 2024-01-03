import React from 'react';
import home from "./home.css";
import cvImg from "../../assets/pp.jpg";
import {BsCodeSlash,BsVectorPen,BsAlarm} from "react-icons/bs";
import {FaFacebook,FaGithub,FaInstagram, FaWhatsapp} from 'react-icons/fa';
import 'animate.css';

const Home = () => {
  return (
    <div className='home'>
      <div className="h_main mt-10 md:mt-20 lg:mt-0">
        <div className="flex flex-col">
          <p className='text-[30px] font-bold'><span className='text-[60px] text-[#7c2d12]'>Yin Nyein Aye</span></p>
          <p className='text-[32px] md:text-[48px] xl:text-[40px] font-bold'><span className='text-[38px] md:text-[55px] lg:text-[40px] text-[#7c2d12]'>Web</span> <span ></span>Developer</p>
          <p className='text-[#222121] font-medium my-2'>
          I am a dedicated and detail-oriented web developer with a passion for creating innovative and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript,Vuejs,PHP Laravel, I bring 4 years of experience in the dynamic field of web development. My expertise extends to both frontend and backend technologies, allowing me to build seamless and responsive digital experiences.
          </p>
          <div className="hidden md:flex gap-10 md:gap-3">
            <a href='https://www.facebook.com/yinnyeinaye.nyeinnyein' className="w-[40px] h-[40px] bg-white rounded-full flex items-center cursor-pointer text-black hover:text-[#4f46e5] transition-all duration-200">
              <FaFacebook size={25} className="ml-2 md:ml-3" />
              <span className='text-black hidden md:ml-3 text-[18px] cursor-pointer'>Facebook</span>
            </a>
            <a href='tel:+959794470814' className="w-[40px] h-[40px] bg-white rounded-full flex items-center cursor-pointer text-black hover:text-[#0ee948] transition-all duration-200">
              <FaWhatsapp size={25} className="ml-2 md:ml-3"/>
              <span className='text-black hidden md:ml-3 text-[18px] cursor-pointer'>Telegram</span>
            </a>
            <a href='https://www.instagram.com/yinnyein.yna/' className="w-[40px] h-[40px] bg-white rounded-full flex items-center cursor-pointer text-black hover:text-[#a16207] transition-all duration-200">
              <FaInstagram size={25} className="ml-2 md:ml-3"/>
              <span className='text-black hidden md:ml-3 text-[18px] cursor-pointer'>Instagram</span>
            </a>            
            <a href='https://github.com/Yin-Nyein-Aye' className="w-[40px] h-[40px] bg-white rounded-full flex items-center cursor-pointer text-black hover:text-[#a1a1aa] transition-all duration-200">
              <FaGithub size={25} className="ml-2 md:ml-3"/>
              <span className='text-black hidden md:ml-3 text-[18px] cursor-pointer'>GitHub</span>
            </a>
          </div>
          <div className="flex gap-3 mt-5">
            <a href='tel:+959794470814' className='h_btn hover:bg-[#c45735]'>Hire me</a>
            <a href='#contact' className='h_btn hover:bg-[#c45735]'>Contact</a>
          </div>
        </div>
      </div>
      <div className="h_main justify-end">
        <div className="relative w-[250px] h-[350px] md:w-[300px] md:h-[300px]">         
          <img src={cvImg} alt="" className='w-[60%] h-[80%] rounded absolute z-20 shadow-lg animate__animated animate__bounceIn'/>          
        </div>
      </div>
    </div>
  )
}

export default Home;