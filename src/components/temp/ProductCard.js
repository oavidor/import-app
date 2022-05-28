import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


const  ProductCard = () => {
  return (
    // <Card sx={{ maxWidth: 345 }}>
    <Card >
    
      <CardContent>
          <div  style={{display: "flex"}}>
          <CardMedia
        component="img"
        height="140"
        image="https://havannas.co.il/wp-content/uploads/2022/05/22-300x300.png"
        alt="green iguana"
      />

        <div>
         <div>גבינה טעימה ממשק טעים</div>
       <div>1234</div>
       <div>מחיר - 25.00</div>
       <div>יתרה - (60-)</div>
       <div>כמות - 0</div>
     
        </div>
          </div>
       
      </CardContent>
      <CardActions>
        <Button variant="contained"  size="small">+</Button>
        <Button variant="contained" size="small">-</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard
//todo-ortal change to IconButton instead