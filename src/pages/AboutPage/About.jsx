import React, { useEffect } from 'react';
import './about.css';
import introGif from "../../assets/intro.gif";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(()=>{
    AOS.init();
  },[]);

  return (
    <div className='about ab_main relative' id='about'>
      <p className='uppercase ab_header' data-aos="fade-right">About me</p>
      <div className="mt-10 md:mt-20 flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2" data-aos="zoom-in">
          <img src={introGif} alt="" className='rounded-[10px] w-full'/>
        </div>
        <div className="w-full lg:w-1/2" data-aos="zoom-in">
          <p className='text-[18px] mt-3 text-[#666]'>          
          <span className=' opacity-0'>hello par</span>My name is  <span className='font-bold text-[19px] text-black'>Yin Nyein Aye</span> . I am 28 year old Web Developer.<br /><br /><span className=' opacity-0'>hello par</span>I earned my Bachelor of Engineering degree in IT from Technological University.After graduating, I secured a position at a local company called ITVision Hub,specializing in Web Development and Mobile Development.I have been working as a Web Developer for the past 4 years.During this  time, I've had the opportunity to dive into a variety of projects, developing my skills in <span className='font-bold text-black text-[18px]'>HTML5,CSS3,Bootstrap,Tailwind CSS,Vuejs,Inertia,Responsive Design,PHP Laravel with Controller way and Livewire way,RESTful API,Git and Cloud Server.</span> <br /><br />
           <span className=' opacity-0'>hello par</span> I am actively seeking new professional opportunities where I can leverage my skills and expertise to make a meaningful contribution. I am committed to continuous learning and personal growth, and I am enthusiastic about the prospect of taking on challenges that align with my background. If you have a compelling opportunity that aligns with my skills and experience, I welcome the opportunity to discuss it further. Please feel free to reach out at your earliest convenience.   
          </p>
        </div>
      </div>
      <div className="flex py-5 md:mx-auto bg-white shadow-lg w-[100%] md:w-[70%] bottom-[0%] left-[15%] rounded-[8px] mt-5 xl:mt-20" data-aos="zoom-in">
        <div className="w-1/3 text-center border-r-4 border-[#c45735]">
          <p className='text-[20px] md:text-[25px] font-medium'>4 years +</p>
          <p className='text-[16px] md:text-[18px] text-[#555]'>Experience</p>
        </div>
        <div className="w-1/3 text-center border-r-4 border-[#c45735]">
          <p className='text-[20px] md:text-[25px] font-medium'>5 +</p>
          <p className='text-[16px] md:text-[18px] text-[#555]'>Projects</p>
        </div>
        <div className="w-1/3 text-center">
          <p className='text-[20px] md:text-[25px] font-medium'>10 +</p>
          <p className='text-[16px] md:text-[18px] text-[#555]'>Clients</p>
        </div>
      </div>
    </div>
  )
}

export default About