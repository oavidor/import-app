import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const  ProductCard = () => {
  return (
    // <Card sx={{ maxWidth: 345 variant="outlined" }}>
    <Card >
    
      <CardContent style={{padding: "8px", paddingBottom: "24px"}}>
          <div  style={{display: "flex", alignContent: "center", alignItems: "center"}}>

        <div>
        <CardMedia
        component="img"
        height="140"
        image="https://havannas.co.il/wp-content/uploads/2022/05/22-300x300.png"
        alt="green iguana"
      />
        </div>
        <div >
        <div style={{textAlign: "right"}}>
         <div style={{marginBottom: "10px"}}  ><b>גבינה טעימה ממשק טעים</b></div>
       <div style={{marginBottom: "3px"}}>1234</div>
       <div style={{marginBottom: "3px"}}><b>מחיר - 25.00</b></div>
       <div style={{color: "red", marginBottom: "3px"}}>יתרה - (60-)</div>
       <div>כמות - 0</div>
       <div  style={{display: "flex", alignContent: "center", alignItems: "center", marginTop: "20px", marginRight: "-8px" }}>
        <div>
        <Button variant="contained"  size="small" style={{borderRadius: "16px", marginLeft: "5px"}}><AddIcon/></Button>
        <Button variant="contained" size="small"  style={{borderRadius: "16px",  marginLeft: "15px"}}><RemoveIcon/></Button>
        </div>
        <div><u>5 יח במארז</u></div>
       </div>
        </div>
        </div>

          </div>
       
      </CardContent>
      {/* <CardActions>
    
      </CardActions> */}
    </Card>
  );
}

export default ProductCard