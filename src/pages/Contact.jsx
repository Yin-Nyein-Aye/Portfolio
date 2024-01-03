import React, { useEffect } from 'react';
import {FaFacebook,FaGithub,FaInstagram, FaWhatsapp} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

  useEffect(()=>{
    AOS.init();
  },[]);

  return (
    <div className='contact bg-[#2f2b3f] text-white' id='contact'>
      <div className="ct_body py-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="" data-aos="zoom-in">
            <h2 className='text-[20px] font-semibold uppercase'>Contact</h2>
            <ul className='mt-3 leading-loose text-[#c4c4c5]'>
              <li>Email : yinnyeinaye.yinnyein@gmail.com</li>
              <li>Phone : +95 9794470814</li>
              <li>Address : 11061,Yangon,Myanmar</li>
            </ul>
          </div>
          <div className="md:pl-10 my-10 md:my-0" data-aos="zoom-in">
              <h2 className='text-[20px] font-semibold uppercase'>Services</h2>
              <ul className='mt-3 leading-loose text-[#c5c4c4]'>
                <li>E-commerce Development</li>
                <li>Web Application Development</li>
                <li>Website Performance Optimization</li>
                <li>Security Audits and Enhancements</li>
                <li>Social Media Integration</li>
                <li>Training and Consultation</li>
                <li>Progressive Web App (PWA) Development</li>
                <li>Cloud Integration and Deployment</li>
              </ul>
          </div>
          <div className="flex md:flex-col gap-8 md:gap-3 justify-center md:items-end" data-aos="zoom-in">
            <a href='https://www.facebook.com/yinnyeinaye.nyeinnyein' className="w-[40px] md:w-[200px] h-[40px] bg-white rounded-full flex items-center cursor-pointer text-black hover:text-kayan transition-all duration-200">
              <FaFacebook size={25} className="ml-2 md:ml-3"/>
              <span className='text-black hidden md:block md:ml-3 text-[18px] cursor-pointer'>Facebook</span>
            </a>
            <a href='tel:+959794470814' className="w-[40px] md:w-[200px] h-[40px] bg-white rounded-full flex items-center cursor-pointer text-black hover:text-[#0ee948]
            transition-all duration-200">
              <FaWhatsapp size={25} className="ml-2 md:ml-3"/>
              <span className='text-black hidden md:block md:ml-3 text-[18px] cursor-pointer'>WhatsApp</span>
            </a>
            <a href='https://www.instagram.com/yinnyein.yna/' className="w-[40px] md:w-[200px] h-[40px] bg-white rounded-full flex items-center cursor-pointer text-black hover:text-[#a16207] transition-all duration-200">
              <FaInstagram size={25} className="ml-2 md:ml-3"/>
              <span className='text-black hidden md:block md:ml-3 text-[18px] cursor-pointer'>Instagram</span>
            </a>
            <a href='https://github.com/Yin-Nyein-Aye' className="w-[40px] md:w-[200px] h-[40px] bg-white rounded-full flex items-center cursor-pointer text-black hover:text-[#a1a1aa] transition-all duration-200">
              <FaGithub size={25} className="ml-2 md:ml-3"/>
              <span className='text-black hidden md:block md:ml-3 text-[18px] cursor-pointer'>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;