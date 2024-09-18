import React from 'react'
import './ButtonPrimary.css'

function ButtonPrimary({name, type, onClick}) {
  return (
    <button className='btnPrimary' onClick={onClick} type={type}>
      {name}
    </button>
  )
}

export default ButtonPrimary
