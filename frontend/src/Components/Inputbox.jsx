import React, { useState } from 'react'

function Inputbox({name,id,type,value,placeholder,icon}) {
    const[passwordVisible , setPasswordVisible] = useState(false)
  return (
    <div className='realtive w-full mb-4 '>
      <input 
      type={type=='password' ? passwordVisible ? 'text' : 'password' : type}
      name={name}
      placeholder={placeholder}
      id={id}
      defaultValue={value}
      className='input-box'
      />
      <i className={"fi " + icon + " input-icon"}></i>
    </div>
  )
}

export default Inputbox
