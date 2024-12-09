import React from 'react'

const Pad = (props) => {
  let isOn =true;
  
  return (
    <button   className="border-solid rounded-xl border-slate-500 p-10"
   style={
    {backgroundColor:props.color,
      opacity:isOn? 0.5:1.0
    } 
   } ></button>
  )
}

export default Pad