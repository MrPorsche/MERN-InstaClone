import React from 'react'

const Button = ({
    label = "",
    className = "",
}) => {
  return (
    <button className={`bg-blue-500 text-white font-bold px-3 py-2 rounded hover:bg-blue-700 ${className}`}>{label}</button>
  )
}

export default Button