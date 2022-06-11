import * as React from 'react';
import PropTypes from 'prop-types';
import "./basicInput.css"
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';





const BasicInput = ({label, currentValue,  name, onBlur}) => {
  const [value, setValue] = React.useState(currentValue);

  React.useEffect(()=>{
    setValue(currentValue);
  }, [currentValue])

  const handleChange = (event) => {
    setValue(event.target.value);
    onBlur(event.target.value);
  }

  const handleBlur = (event) => {
    onBlur(event.target.value);
  }

    return (
        <div className='input-container'>
          <InputLabel htmlFor={name}>{label}</InputLabel>
          <Input id={name}  variant="filled" value={value} onChange={handleChange} onBlur={handleBlur}/>
          </div>
     
    )
}

export default BasicInput

BasicInput.propTypes = {
  label: PropTypes.string, 
  currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  name: PropTypes.string,
  onBlur: PropTypes.func
}

BasicInput.defaultProps = {
  label: "",
  currentValue: "",
  name: "",
  onBlur: () => {}
}