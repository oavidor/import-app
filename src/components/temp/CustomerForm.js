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

    const [info, setInfo] = React.useState({});

    const handelChange = (key, value) => {
        const newInfo = {...info, [key]: value}
        setInfo(newInfo)
        console.log(newInfo)

    }//todo-ortal use reducer

    return (
        <div>
            <Typography variant="h2" gutterBottom component="div">
        טופס לקוח
      </Typography>
      <form >
      <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
        <BasicInput name='name' label='שם' onBlur={(value) => handelChange("name", value)} />
        <BasicInput name='company-id' label='ח.פ' onBlur={(value) => handelChange("companyId", value)}/>
        <BasicInput name='phone' label='טלפון' onBlur={(value) => handelChange("phone", value)}/>
        <BasicInput name='address' label='כתובת' onBlur={(value) => handelChange("address", value)}/>
        <BasicInput name='credit' label='אשראי' onBlur={(value) => handelChange("credit", value)} />
      </form>
            
        </div>
    )
}

export default CustomerForm

// style={{display: "flex", flexDirection: "column", direction: "rtl", textAlign: "right", justifyContent: "flex-end"}}