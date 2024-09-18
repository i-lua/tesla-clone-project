import React from 'react'
import './ButtonSecondary.css'

function ButtonSecondary({name, type, onClick}) {
  return (
    <button className='btnSecondary'>
      {name}
    </button>
  )
}

export default ButtonSecondary
