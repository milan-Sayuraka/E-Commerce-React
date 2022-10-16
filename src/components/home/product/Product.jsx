import React, { useState } from 'react'
import { products } from "../../assets/data/data"
import { Heading } from '../../common/Heading'
import { ProductItems } from './ProductItems'

export const Product = () => {
    const [data, setdata] = useState(products)
  return (
    <>
      <section className='product'>
        <div className='container'>
          <Heading title='Trendings Products' desc='Check the hottest designs of the week. These rising stars are worth your attention.' />

          <ProductItems data={data} />
        </div>
      </section>
    </>
  )
}
