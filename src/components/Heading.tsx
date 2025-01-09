import React from 'react'
interface propsType{
title:string; 
}
const Heading:React.FC<propsType> = ({title}) => {
  return (
    <div className='heading-c'>
      <p className='heading'>{title}</p>
    </div>
  )
}

export default Heading
