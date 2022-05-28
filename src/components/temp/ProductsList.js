import * as React from 'react';
import ProductCard from './ProductCard';
import ImageList from '@mui/material/ImageList';

const products = [{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6}]

const  ProductsList = () => {
  return (
    <ImageList  cols={2} >
  {products.map((item) => (
    <ProductCard key={item.id} />

  ))}
</ImageList>
  );
}

export default ProductsList
//todo-ortal change to IconButton instead