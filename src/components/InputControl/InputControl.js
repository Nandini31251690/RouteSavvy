import React from 'react'
import './InputControl.css'; 
function InputControl(props) {
  return (
    <div className='container_ic'>
    {props.label && <label>{props.label}</label>}
    <input type="text" {...props} />
  </div>
  )
}

export default InputControl