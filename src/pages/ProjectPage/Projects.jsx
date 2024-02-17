import React, { useEffect } from 'react';
import dashboardImg from "../../assets/imgs/event.png";
import foodyImg from "../../assets/imgs/foody.png";
import easyInvoice from "../../assets/imgs/mmeasyinvoice.png";
import deliveryImg from "../../assets/imgs/pharmacy.png";
import shoppingImg from "../../assets/imgs/mms-mini-shopping.png";
import putuuImg from "../../assets/imgs/putuu-website.png";
import easyImg from "../../assets/imgs/easybank-website.png";
import ProjectCard from '../../components/nav/ProjectCard';
import "./project.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectsData=[
  {
    id:1,
    title:"Event Management System",
    image: <img src={dashboardImg} alt="" className='w-100 h-100 shadow-lg h-auto rounded-[8px]'  style={{ width: '350px', height: '250px' }} />,
    url: "https://www.youtube.com/watch?v=ygneN0IdU2E"
  },
  {
    id:2,
    title:"DNI(Daily Need Item) Ecommerce",
    image: <img src={shoppingImg} alt="" className='w-100 shadow-lg h-auto rounded-[8px]'  style={{ width: '350px', height: '250px' }} />,
    url:"",
    git:"https://dailyneeditems.com/"
  },
  {
    id:3,
    title:"Pharmacy Management System",
    image: <img src={deliveryImg} alt="" className='w-100 shadow-lg h-auto rounded-[8px]'  style={{ width: '350px', height: '250px' }} />,
    url:"https://www.youtube.com/watch?v=SxG6PqzZ6Xc"
  },
  {
    id:4,
    title:"Restaurant Management System",
    image: <img src={foodyImg} alt="" className='w-100 shadow-lg h-auto rounded-[8px]'  style={{ width: '350px', height: '250px' }} />,
    url:"https://www.youtube.com/watch?v=WIbH3aFYyFo"
  },
  {
    id:5,
    title:"MMEasy Invoice",
    image: <img src={easyInvoice} alt="" className='w-100 shadow-lg h-auto rounded-[8px]'  style={{ width: '350px', height: '250px' }} />,
    url:"https://www.youtube.com/watch?v=d7IWxBK85uM",
    git:"https://mmeasyinvoice.com/"
  }
];

const Projects = () => {

  useEffect(()=>{
    AOS.init();
  },[]);

  return (
    <div className='project' id='projects'>
      <h3 className='pj_header uppercase' data-aos="fade-right">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 mt-12">
        {
          projectsData.map(data=>(
            <ProjectCard key={data.id} data={data}/>
          ))
        }
      </div>
    </div>
  )
}

export default Projects;