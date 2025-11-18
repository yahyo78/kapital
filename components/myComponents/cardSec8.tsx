import { ChevronRight, MapPin } from 'lucide-react'
import React from 'react'

const CardSec8 = (props) => {
  return (
    <>
      <div className='xl:w-[30%] flex flex-col gap-[10px] border-gray-300 border-[2px] p-[20px] rounded-[10px]'>
        <div className='flex justify-between'>
            <p className='p-[5px] bg-black text-white rounded-[10px] px-[10px]'>{props.opit}</p>
            <div className='flex gap-[10px]'>
                <MapPin />
                <p>{props.location}</p>
            </div>
        </div>
        <h1 className='text-[25px] font-bold'>{props.h1Text}</h1>
        <p className='text-[#4B5563]'>{props.pText}</p>
        <button className='flex text-[#FFA900] gap-[10px]'>Подробнее <ChevronRight /></button>
      </div>
    </>
  )
}

export default CardSec8
