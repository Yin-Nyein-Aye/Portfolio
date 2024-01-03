import React from 'react';

const SkillCard = ({data}) => {
  return (
    <div className='py-6 bg-[#2f2b3f] rounded-[8px]' data-aos="zoom-in">
        <div className="flex justify-center text-white">
            {data.icon}
        </div>
        <h3 className='text-[18px] md:text-[20px] text-center text-white mt-2'>
            {data.title}
        </h3>
    </div>
  )
}

export default SkillCard