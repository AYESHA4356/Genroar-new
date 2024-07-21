import Footer from '@/components/organisms/Footer'
import Gallary from '@/components/organisms/Gallary'
import GallaryData from '@/components/organisms/GallaryData'
import Headermain from '@/components/organisms/Headermain'
import Container from '@/components/atoms/Container'
import ProductRelated from '@/components/molecules/ProductRelated'
import ProductUpsell from '@/components/molecules/ProductUpsell'
import Productlisting from '@/components/organisms/Productlisting'
import React from 'react'

function gallary() {
  return (
      <div>
        hello
          <Headermain />
          <GallaryData />
          <Gallary/>
          <Container>
                <Productlisting />
                <ProductRelated />
                <ProductUpsell />
            </Container>
          <Footer/>
    </div>
  )
}

export default gallary