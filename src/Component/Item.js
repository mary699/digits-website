import React from 'react'

const Item = ({ Links, title }) => {
  return (
<ul className='text-center'>
    <h1 className="mb-3 text-[#1E266D] font-semibold">{title}</h1>
    {
        Links.map((link)=>(
            <li key={link.name}>
                <a className="text-[#455880] hover:text-[#3751FF] duration-500 font-medium text-sm " href={link.link}>{link.name}</a>
            </li>
        ))
    }
</ul>

)
}

export default Item