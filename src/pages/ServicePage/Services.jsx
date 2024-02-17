import React, { useEffect } from 'react';
import ServiceCard from '../../components/nav/ServiceCard';
import './service.css';
import {BsGear,BsVectorPen,BsUiChecksGrid,BsBriefcase, BsDiagram2, BsCodeSlash, BsCodeSquare, BsCircleFill, BsFileWordFill} from "react-icons/bs";
import {IoLogoCss3} from "react-icons/io";
import {SiApache, SiPostman,SiStandardjs,SiTailwindcss} from "react-icons/si";
import {DiDatabase, DiDigitalOcean, DiDocker, DiJavascript, DiMysql, DiNginx, DiTechcrunch} from "react-icons/di";
import {AiFillHtml5} from "react-icons/ai";
import { SiInertia } from "react-icons/si";
import { LiaChalkboardSolid, LiaFileWordSolid, LiaLifeRing, LiaWrenchSolid } from "react-icons/lia"
import { MdCircleNotifications, MdCurrencyRuble, MdCyclone, MdSyncProblem } from "react-icons/md";
import { FaBootstrap, FaFigma, FaVuejs, FaPhp, FaLaravel, FaGithub, FaRegLifeRing, FaWordpressSimple } from 'react-icons/fa';
import { TfiWorld } from "react-icons/tfi";
import SkillCard from '../../components/nav/SkillCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const servicesData=[
  {
    id:1,
    title:"Project Flow Diagram",
    description:"Flow Diagram is important to provide clear and concise information about the key elements and processes depicted in the diagram.",
    icon:<BsDiagram2 size={30} className='text-[#c45735]' />
  },
  {
    id:2,
    title:"Database Normalization",
    description:"Database Normalization is efficient, scalable, and maintainable database structures.",
    icon:<DiDatabase size={30} className='text-[#c45735]' />
  },
  {
    id:3,
    title:"Wireframe",
    description:"Wireframes play a crucial role in the early stages of designing websites, applications, or other digital interfaces.",
    icon:<LiaChalkboardSolid size={30} className='text-[#c45735]' />
  },
  {
    id:4,
    title:"Mockup",
    description:"Mock-ups are versatile tools that contribute to efficient and effective design and development processes by facilitating communication, visualization, testing, and collaboration throughout a project's lifecycle.",
    icon:<LiaChalkboardSolid size={30} className='text-[#c45735]' />
  },
  {
    id:5,
    title:"Responsive",
    description:"Responsive design ensures that your website or application looks and functions well on any device, whether it's a desktop, laptop, tablet, or smartphone. This adaptability leads to a consistent and seamless user experience, regardless of the device being used.",
    icon:<BsVectorPen size={30} className='text-[#c45735]' />
  },
  {
    id:6,
    title:"OOP",
    description:"OOP is widely used in software development for building scalable, modular, and maintainable systems.",
    icon:<BsCodeSquare size={30} className='text-[#c45735]' />
  },
  {
    id:7,
    title:"Standard Coding",
    description:"Standard Coding contribute to the creation of maintainable, efficient, and reliable code",
    icon: <BsCodeSlash size={30} className='text-[#c45735]' />
  },
  {
    id:8,
    title:"Problem Solving",
    description:"Strong problem-solving skills are closely linked to critical thinking. This involves the ability to analyze information, consider different perspectives, and draw logical conclusions.",
    icon: <LiaWrenchSolid size={30} className='text-[#c45735]' />
  },
  {
    id:9,
    title:"Agile Manifesto",
    description:"The Agile Manifesto is a set of guiding values and principles for agile software development that prioritizes flexibility, collaboration, and customer satisfaction.",
    icon: <FaRegLifeRing size={30} className='text-[#c45735]' />
  },
  {
    id:10,
    title:"Software Development Life Cycle",
    description:"The Software Development Life Cycle (SDLC) is a structured and systematic process used by software developers to design, develop, test, and deploy high-quality software.",
    icon: <LiaLifeRing size={30} className='text-[#c45735]' />
  },
  {
    id:11,
    title:"Remaining Current with Web Development Trends",
    description:"It communicates a commitment to excellence and ongoing professional development in the rapidly changing world of web development.",
    icon: <TfiWorld size={30} className='text-[#c45735]' />
  },  
];

const skillsData=[
  {
    id:1,
    title:"Html",
    icon: <AiFillHtml5 size={30} />
  },
  {
    id:2,
    title:"CSS",
    icon: <IoLogoCss3 size={30} />
  },
  {
    id:3,
    title:"JavaScript",
    icon: <DiJavascript size={30} />
  },
  {
    id:4,
    title:"Bootstrap",
    icon: <FaBootstrap size={30} />
  },
  {
    id:5,
    title:"Tailwind",
    icon: <SiTailwindcss size={30} />
  },
  {
    id:6,
    title:"Vuejs",
    icon: <FaVuejs size={30} />
  },
  {
    id:7,
    title:"Inertia",
    icon: <SiInertia size={30} />
  },  
  {
    id:8,
    title:"PHP",
    icon: <FaPhp size={30} />
  },  
  {
    id:9,
    title:"Laravel",
    icon: <FaLaravel size={30} />
  },
  {
    id:10,
    title:"MySQL",
    icon: <DiMysql size={30} />
  },
  {
    id:11,
    title:"Git",
    icon: <FaGithub size={30} />
  }, 
  {
    id:12,
    title:"Postman",
    icon: <SiPostman size={30} />
  }, 
  {
    id:13,
    title:"DigitalOcean",
    icon: <DiDigitalOcean size={30} />
  },
  {
    id:14,
    title:"Apache",
    icon: <SiApache size={30} />
  },
  {
    id:15,
    title:"Nginx",
    icon: <DiNginx size={30} />
  },
  {
    id:16,
    title:"Docker",
    icon: <DiDocker size={30} />
  }, 
  {
    id:17,
    title:"Figma",
    icon: <FaFigma size={30} />
  },
]

const Services = () => {

  useEffect(()=>{
    AOS.init();
  },[]);

  return (
    <div className='service flex flex-col justify-center' id='services'>
      <h3 className='sv_header font-semibold text-[20px] uppercase' data-aos="fade-right">Services</h3>
      <div className="mt-14 lg:mt-5">
        <h2 className='text-center font-semibold text-[20px] md:text-[25px] text-black uppercase' data-aos="zoom-in">My abilities include</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-6">
          {
            servicesData.map(data=>(
              <ServiceCard key={data.id} data={data}/>
            ))
          }
        </div>
      </div>
      <div className="mt-14 lg:mt-20">
        <h4 className='text-center uppercase text-[20px] md:text-[25px] font-semibold text-black' data-aos="zoom-in">Experienced in the following areas</h4>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {
            skillsData.map(data=>(
              <SkillCard key={data.id} data={data}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Services