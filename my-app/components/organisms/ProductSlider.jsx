import React from 'react'
import Container from '../atoms/Container'
import GallaryDetail from '../molecules/GallaryDetail'
import Deatailimges from './Deatailimage'

function Gallary() {
    return (
            <div>
                <div className='w-[100%] flex justify-between  mt-[30px]'>
                    <div className='w-[49%]'> <Deatailimges/>  </div>
                    <div className='w-[49%]'> <GallaryDetail /></div>
                </div>
            </div>
    )
}

export default Gallary