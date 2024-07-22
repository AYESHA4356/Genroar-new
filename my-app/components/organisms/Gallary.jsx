import React from 'react'
import GallaryImges from '../molecules/GallaryImges'
import Container from '../atoms/Container'
import GallaryDetail from '../molecules/GallaryDetail'

function Gallary() {
    return (
        <Container>
            <div>
                <div className='w-[100%] flex justify-between  mt-[30px]'>
                    <div className='w-[49%]'>  <GallaryImges /></div>
                    <div className='w-[49%]'> <GallaryDetail /></div>
                </div>
            </div>
        </Container>
    )
}

export default Gallary