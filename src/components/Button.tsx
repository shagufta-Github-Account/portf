import React from 'react'

function Button(props: { textName: string} ) {
  return (
    <>
      <button className='bg-[#103e44] p-[.66rem_3rem_.66rem_3rem] rounded-[.5rem] text-[1rem] hover:bg-[#1b275f]'>{props.textName}</button>
    </>
  )
}

export default Button