import React from 'react'

const Tag = (props) => {
  const { tag } = props
  return (
    <div className="w-max text-typography-description px-[0.625rem] py-[0.1563rem] h-auto border-[0.0313rem] border-typography-description rounded-full tracking-widest font-montserrat text-sm font-bold whitespace-nowrap transition duration-300 hover:text-typography-title border-typography-title">
      <a>#{tag}</a>
    </div>
  )
}

export default Tag
