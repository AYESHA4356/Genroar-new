import React from 'react'
import HomeProductSec from '../molecules/HomeProductSec';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';

function ProductUpsell() {
  return (
    <div className='my-[50px]  ' >
        <div className="grid text-center gap-3 mb-5  justify-center  ">
            <Heading level='2'>Upsell Products</Heading>
            <Paragraph>Contemporary, minimal and modern designs embody the Lavish Alice handwriting</Paragraph>
        </div>
        <div className='flex justify-center gap-6 mb-5'>
            <HomeProductSec
                src='../assits/images/product1.webp'
                src2='../assits/images/product1bg.png'
                href='#'
                price='$60.00'
                name='Apple iPad with Retina'
            />
            <HomeProductSec
                src='../assits/images/coat2.webp'
                src2='../assits/images/coat3.webp'
                href='#'
                price='$60.00'
                name='Beats Solo 2'
            />
            <HomeProductSec
                src='../assits/images/shoe.webp'
                src2='../assits/images/shoe-nike.webp'
                href='#'
                price='$60.00'
                name='Marshall Portable Bluetooth'
            />
            <HomeProductSec
                src='../assits/images/shoe.webp'
                src2='../assits/images/shoe-nike.webp'
                href='#'
                price='$60.00'
                name='Marshall Portable Bluetooth'
            />
        </div>
    </div>
  )
}

export default ProductUpsell