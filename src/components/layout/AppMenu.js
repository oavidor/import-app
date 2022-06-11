import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import ItemsList from '../temp/ItemsList';

const AppMenu = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

  return (
    <>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpen}
          >
            <MenuIcon />
          </IconButton>
            <Drawer
            anchor={"right"}
            open={open}
            onClose={handleClose}
          >
              <div style={{padding: "1em", width: 250}}>
              <ItemsList onItemClick={handleClose} />
              </div>
          
          </Drawer>
        </>
  );
}

export default AppMenu
