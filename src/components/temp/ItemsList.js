import * as React from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArticleIcon from '@mui/icons-material/Article';




const ItemsList = ({onItemClick}) => {
  const navigate = useNavigate();

  const handleItemClick = (pathName) => {
    navigate(`/${pathName}`, { replace: false })
    onItemClick()
  }

    return (
      <List>
      <ListItem disablePadding >
        <ListItemButton onClick={()=> handleItemClick("customers")}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="לקוחות" style={{textAlign: "right"}} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
      <ListItemButton onClick={()=> handleItemClick("products")}>
          <ListItemIcon>
            <ShoppingBagIcon />
          </ListItemIcon>
          <ListItemText primary="מוצרים" style={{textAlign: "right"}} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText primary="הזמנות" style={{textAlign: "right"}} />
        </ListItemButton>
      </ListItem>
    </List>
      );
}

export default ItemsList
//todo-ortal add router


ItemsList.propTypes = {
  onItemClick: PropTypes.func
}

ItemsList.defaultProps = {
  onItemClick: () => {}
}