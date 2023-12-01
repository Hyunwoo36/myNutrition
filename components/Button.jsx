import React from 'react'

const Button = ({ text, color, width, height, textColor }) => {

  return (
    <div className={`${color} ${width} ${height} flex items-center justify-center p-4 rounded-[50px]`}>
        <p className={textColor}>{text}</p>
    </div>
  )
}

export default Button