import React from 'react';

import '@styles/ProductList.scss';
import useGetProducts from '../hooks/useGetProducts';
import ProductItem from '@components/ProductItem';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  // const products = useGetProducts(API);

  return (
    <section className='main-container'>
      <div className='ProductList'>
        {/* {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))} */}
        <h1>Aqui poner las lista</h1>
      </div>
    </section>
  );
};

export default ProductList;
