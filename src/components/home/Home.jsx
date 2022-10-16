import React from 'react'
import { Banner } from './banner/banner'
import { Card } from './content/Card'
import { Content } from './content/Content'
import { Product } from './product/Product'
import { TopProduct } from './topProduct/TopProduct'

export const Home = () => {
  return (
    <div>
      <Content/>
      <Card/>
      <Product/>
      <Banner/>
      <TopProduct/>
    </div>
  )
}
