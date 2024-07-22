import React from 'react';
import Button from '../atoms/Button';
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa";
import AnchorTag from '../atoms/AnchorTag';
import Heading from '../atoms/Heading';

function HomeProductSec({ src, src2, href, price, sale, name }) {
  return (
    <div className='w-[30%] mb-3'>
      <a href={href} className='flex flex-col gap-[6px]'>
        <div className='relative overflow-hidden'>
          <img className='w-full' src={src} alt={name} />
          <div className="absolute top-0 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
            <img className='w-full' src={src2} alt={name} />
            <div className="absolute top-[10px] right-[10px] w-[50px] h-[50px] bg-white text-gray-600 flex items-center justify-center text-[14px]">
              <FaPlus />
            </div>
            <div className="absolute opacity-0 hover:opacity-100 top-[20px] right-[10px] w-[50px] h-[80px] bg-white text-gray-600 flex flex-col items-center gap-[10px] transition-opacity duration-500 ease-in-out cursor-pointer">
              <a href="#"><BsFillBasket2Fill className='hover:text-orange-500 duration-300 w-[25px] h-[17px]' /></a>
              <a href="#"><FaRegHeart className='hover:text-orange-500 duration-300 w-[25px] h-[17px]' /></a>
              <a href="#"><HiOutlineAdjustmentsHorizontal className='hover:text-orange-500 duration-300 w-[25px] h-[17px]' /></a>
            </div>
            <div className="flex justify-center items-center">
              <Button variant='shop-proButton'>+ Quick View</Button>
            </div>
          </div>
        </div>
        <AnchorTag variant='footertag'>{name}</AnchorTag>
        <div className="flex gap-[20px] items-center">
          <Heading level='3'>{price}</Heading>
          {sale && <Heading level='9' className="line-through">{sale}</Heading>}
        </div>
      </a>
    </div>
  );
}

export default HomeProductSec;
