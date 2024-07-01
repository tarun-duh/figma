import React from 'react'
type Props{
    color:string,
    x:number,
    y:number,
    message:string
}

const Cursor = ({color,x,y,message}:Props) => {
  return (
    <div className='pointer-events-none'>
      
    </div>
  )
}

export default Cursor
