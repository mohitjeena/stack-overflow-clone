import React from 'react'
export default function Avatar({children,backgroundColor,py,px,fontSize,borderRadius,color,cursor,display}) {
  const style={
    backgroundColor,
    padding:`${py} ${px}`,
    fontSize,
    borderRadius,
    color:color || "black",
    textAlign:'center',
    cursor:cursor || null,
    textDecoration:'none',
    display:display
  }
 
  return (
    <div style={style}>
    {children}
    </div>
  )
}
