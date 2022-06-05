import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const CustomersList =  () =>  {
  const navigate = useNavigate();

  const handleItemClick = (pathName) => {
    navigate(`/${pathName}`, { replace: false })
  }  

  return (
    // <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
    <List style={{width: "100%"}}>
      <ListItem alignItems="flex-start" style={{textAlign: "right"}}>
        <ListItemAvatar>
          <Avatar alt="חוות נעמי" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={<b><span>{`חוות נעמי, חנוכה ר.ד בע"מ (גבעתיים)`}</span></b>}
          secondary={
            <React.Fragment>
              <span style={{marginLeft: "5px"}}>{"הזמנה אחרונה:"}</span>
              <span> {"10/02/2022"}</span>
            </React.Fragment>
          }
        />
        <div style={{display: "flex"}}>
        <Button variant="contained"  size="small" style={{marginLeft: "5px"}} onClick={()=> handleItemClick("customer")}>עריכה</Button>
        <Button variant="contained"  size="small" style={{marginLeft: "5px"}} onClick={()=> handleItemClick("products")}>הזמנה חדשה</Button>
        </div>
         
      </ListItem>
      <Divider variant="inset" component="li" style={{width: "100%"}}/>
      <ListItem alignItems="flex-start" style={{textAlign: "right"}}>
        <ListItemAvatar>
          <Avatar alt="חוות נעמי" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={<b><span>{`חוות נעמי, חנוכה ר.ד בע"מ (רעננה)`}</span></b>}
          secondary={
            <React.Fragment>
              <span style={{marginLeft: "5px"}}>{"הזמנה אחרונה:"}</span>
              <span> {"07/03/2022"}</span>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" style={{width: "100%"}}/>
      <ListItem alignItems="flex-start" style={{textAlign: "right"}}>
        <ListItemAvatar>
          <Avatar alt="גורמה" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={<b><span>{`424 גורמה בע"מ`}</span></b>}
          secondary={
            <React.Fragment>
              <span style={{marginLeft: "5px"}}>{"הזמנה אחרונה:"}</span>
              <span> {"14/02/2022"}</span>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </>
  );
}

export default CustomersList
//todo-ortal add state to put customer