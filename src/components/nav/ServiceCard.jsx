import React from 'react';

const ServiceCard = ({data}) => {
  return (
    <div className='service_card w-full border-b-4 border-[#c45735] px-3 py-8' data-aos="zoom-in">
        <div className='flex justify-center'>
            {data.icon}
        </div>
        <h3 className='text-[20px] text-center font-medium my-3'>{data.title}</h3>
        <p className='text-[#666] text-center'>
            {data.description}
        </p>
    </div>
  )
}

export default ServiceCard;