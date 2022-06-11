import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import BasicInput from '../ui/input/BasicInput';




const CustomerForm = () => {

    return (
        <div>
            <Typography variant="h2" gutterBottom component="div">
        טופס לקוח
      </Typography>
      <form style={{display: "flex", flexDirection: "column", direction: "rtl", textAlign: "right", justifyContent: "flex-end"}}>
        <BasicInput name='name' label='שם' />
        
        <FormControl direction={"rtl"} style={{direction: "rtl", textAlign: "right"}}>
            <InputLabel htmlFor="name">שם</InputLabel>
            <Input id="name"  variant="filled"/>
            {/* <FormHelperText id="name-helper-text"></FormHelperText> */}
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="company-id">ח"פ</InputLabel>
            <Input id="company-id"  variant="filled"/>
            {/* <FormHelperText id="name-helper-text"></FormHelperText> */}
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="phone">טלפון</InputLabel>
            <Input id="phone"  variant="filled"/>
            {/* <FormHelperText id="name-helper-text"></FormHelperText> */}
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="address">כתובת</InputLabel>
            <Input id="address"  variant="filled"/>
            {/* <FormHelperText id="name-helper-text"></FormHelperText> */}
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="credit">אשראי</InputLabel>
            <Input id="credit"  variant="filled"/>
            {/* <FormHelperText id="name-helper-text"></FormHelperText> */}
        </FormControl>
      </form>
            
        </div>
    )
}

export default CustomerForm