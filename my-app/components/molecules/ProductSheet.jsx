import React from 'react'
import ProductMore from './ProductMore'

function ProductSheet() {
  return (
    <div className="">
        <table className='mb-[15px] w-[100%]'>
            <tr className='border-y text-gray-500 text-[14px] '>
                <td className='py-[7px] font-[700] px-[17px] border-r justify-start grid '>Compositions</td>
                <td className='py-[7px] px-[17px] w-[70%] '>Polyester</td>
            </tr>
            <tr className='border-y text-gray-500 text-[14px]  '>
                <td className='py-[7px] font-[700] px-[17px] border-r justify-start grid '>Styles</td>
                <td className='py-[7px] px-[17px] w-[70%] '>Girly</td>
            </tr>
            <tr className='border-y text-gray-500 text-[14px]  '>
                <td className='py-[7px] font-[700] px-[17px] border-r justify-start grid '>Properties</td>
                <td className='py-[7px] px-[17px] w-[70%] '>Short Dress</td>
            </tr>
        </table>
        <ProductMore/>
    </div>
  )
}

export default ProductSheet