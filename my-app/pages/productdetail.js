import Footer from '@/components/organisms/Footer'
import ProductDetail from '@/components/organisms/ProductDetail'
import DetailData from '@/components/organisms/DetailData'
import Headermain from '@/components/organisms/Headermain'
import Container from '@/components/atoms/Container'
import ProductRelated from '@/components/molecules/ProductRelated'
import ProductUpsell from '@/components/molecules/ProductUpsell'
import Productlisting from '@/components/organisms/Productlisting'
import React from 'react'

function productdetail() {
  return (
      <div>
          <Headermain />
          <DetailData />
          <ProductDetail/>
          <Container>
                <Productlisting />
                <ProductRelated />
                <ProductUpsell />
            </Container>
          <Footer/>
    </div>
  )
}

export default productdetail