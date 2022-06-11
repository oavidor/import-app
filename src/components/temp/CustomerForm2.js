import React from 'react';
import TextField from '@mui/material/TextField';



// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//   },
// }));

const CustomerForm = () => {

  return (
    <form  noValidate autoComplete="off">
      <div>
        <TextField label="Size" id="standard-size-small" defaultValue="Small" size="small" />
        <TextField label="Size" id="standard-size-normal" defaultValue="Normal" />
      </div>
      <div>
        <TextField
          label="Size"
          id="filled-size-small"
          defaultValue="Small"
          variant="filled"
          size="small"
        />
        <TextField label="Size" id="filled-size-normal" defaultValue="Normal" variant="filled" />
      </div>
      <div>
        <TextField
          label="Size"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
        />
        <TextField
          label="Size"
          id="outlined-size-normal"
          defaultValue="Normal"
          variant="outlined"
        />
      </div>
    </form>
  );
}


export default CustomerForm