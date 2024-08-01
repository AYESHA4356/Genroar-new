import Footer from '@/components/organisms/Footer'
import ProductSlider from '@/components/organisms/ProductSlider'
import sliderData from '@/components/organisms/sliderData'
import Headermain from '@/components/organisms/Headermain'
import Container from '@/components/atoms/Container'
import ProductRelated from '@/components/molecules/ProductRelated'
import ProductUpsell from '@/components/molecules/ProductUpsell'
import Productlisting from '@/components/organisms/Productlisting'
import React from 'react'
import ShopSibebar from '@/components/organisms/ShopSibebar'

function productslider() {
    return (
        <div>
            <Headermain />
            <sliderData />
            <Container>
                <div className='flex'>
                    <ShopSibebar />
                    <ProductSlider />
                </div>
                <Productlisting />
                <ProductRelated />
                <ProductUpsell />
            </Container>
            <Footer />
        </div>
    )
}

export default productslider