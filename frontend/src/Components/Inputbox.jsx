import React from 'react'

function Inputbox({name,id,type,value,placeholder,icon}) {
  return (
    <div className='realtive w-full mb-4 '>
      <input 
      type={text}
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
