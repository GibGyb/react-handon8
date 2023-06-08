import React from 'react'
import Tag from './Tag'

const Blog = (props) => {
  const { blog } = props
  return (
    <div className="flex flex-col gap-4 w-1/3 max-lg:w-2/3">
      <div className="flex gap-5">
        <p className="text-red-800 text-xs font-bold">{blog.author}</p>
        <p className="text-slate-500 text-xs">{blog.date}</p>
        <p className="text-slate-500 text-xs">{blog.readingTime}</p>
      </div>
      <a className="text-lg text-left p-0 font-extrabold">{blog.header}</a>
      <p className="text-sm text-slate-500 leading-[1.25rem] ">{blog.description}</p>
      <div className="flex gap-2 w-fit">
        {blog.tags.map((tag, index) => {
          return <Tag key={index} tag={tag} />
        })}
      </div>
    </div>
  )
}

export default Blog
