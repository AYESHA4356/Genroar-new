import React from 'react'
import ProductMore from './ProductMore'
import { FaStar } from "react-icons/fa";
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Label from "../atoms/Label";
import Input from "../atoms/Input";



function Productreviews() {
    return (
        <div>
            <ProductMore />
            <div className="mt-[20px] flex gap-4">
                <div className=" grid gap-4 ">
                    <button className="text-[14px] text-[#ff6a28] flex"> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></button>
                    <p className='text-gray-500 text-[14px] '><b>Posthemes</b></p>
                    <p className='text-gray-500 text-[14px] '>09/07/2022</p>
                </div>
                <div className="">
                    <p className='text-gray-500 text-[14px] '><b>demo</b></p>
                    <p className='text-gray-500 text-[14px] '>That's OK!</p>
                </div>
            </div>
            <div className="mt-[30px] ">
                <Heading level='5'><b>ADD A REVIEW</b></Heading>
                <Paragraph>Your email address will not be published. Required fields are marked</Paragraph>
                <div className="pt-[20px]">
                    <div className='font-[600] text-[14px] mb-[10px] text-gray-500 '>
                        <Label>
                            Your Review
                        </Label>
                    </div>
                    <textarea className='w-[100%] h-[150px] outline-none border-[1px] text-[15px] text-[#302e2e]  border-[#cacaca] p-[15px] ' type="text" />
                </div>
                <div className="flex gap-6 w-[100%] ">
                    <div className="pt-[20px] w-[50%] ">
                        <div className='font-[600] text-[14px] mb-[10px] text-gray-500 '>
                            <Label>
                                Name
                            </Label>
                        </div>
                        <Input variant="five" type="text" />
                    </div>
                    <div className="pt-[20px] w-[50%] ">
                        <div className='font-[600] text-[14px] mb-[10px] text-gray-500 '>
                            <Label>
                                Email
                            </Label>
                        </div>
                        <Input variant="five" type="text" />
                    </div>
                </div>
            </div>
            <button type="submit" className=" mt-[30px] hover:bg-[#ff6a28] h-[40px] bg-[#242424]  cursor-pointer font-[500] rounded text-center w-[140px] py-[12px] px-[30px]  text-white">Submit</button>



        </div>
    )
}

export default Productreviews