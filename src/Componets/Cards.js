import React from 'react'
import avatar from '../assests/avatar.png'
const Cards = ({data}) => {
  return (
    <div className=" w-[25rem] h-56 bg-white rounded-xl shadow-sm ">
      <div className="p-3">
        <div className="flex items-center space-x-4">
          {/* User Avatar */}
          <img
            className="w-10 h-10 rounded-full"
            src={avatar}
            alt="User avatar"
          />
          {/* User Info */}
          <div className=" flex gap-5 text-xs">
            <p className="text-gray-500">Given by: {data.givenBy}</p>
            <p className="text-gray-500">On: {data.date}</p>
          </div>
        </div>

        {/* Card Content */}
        <div className="mt-2 ">
          <h2 className="text-lg font-bold">{data.title}</h2>
          <p className="text-gray-700 text-sm">{data.description}...</p>
        </div>

        {/* Read More Button */}
        <div className="mt-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Read more
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cards
