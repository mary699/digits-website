import React from 'react'

const SocialIcons = ({Icons}) => {
  return (
    <div className='text-red'>
        {Icons.map(icon => (
            <span className="cursor-pointer p-2"></span>
    ))}
    </div>
  )
}

export default SocialIcons;