import React from 'react'

const Input = ({
    name ="",
    label = "",
    type = "text",
    placeholder = ""
}) => {
  return (
    <div className="mb-4">
        {
            label && 
            <label className="block text-gray-700 text-sm font-bold mb-2" for={name}>{label}</label>
        }
        <input className="w-full text-gray-700 shadow appearance-none border rounded px-3 py-2 leading-tight
        focus:outline-none focus:shadow-outline" placeholder={placeholder} type={type} id={name} />
    </div>
  )
}

export default Input