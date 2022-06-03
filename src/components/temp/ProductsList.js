import * as React from 'react';
import ProductCard from './ProductCard';
import ImageList from '@mui/material/ImageList';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';


const products = [{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6}]

const  ProductsList = () => {
  return (
    <>
     <TextField id="standard-basic"  variant="standard" style={{width: "100%"}}
   InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>
    ),
  }}
  />
    <ImageList  cols={2} >
  {products.map((item) => (
    <ProductCard key={item.id} />

  ))}
</ImageList>
</>
  );
}

export default ProductsList
//todo-ortal change to IconButton instead