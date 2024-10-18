import React from 'react';
import Cards from './Cards';
const data = [
  {
  "givenBy": "Saloni",
  "date": "26th Aug 2024",
  "title": "GHF Builder",
  "description": "One day while taking a shower, I noticed a small hole in my bathroom wall. My dad suggested that I use white cement to patch the holes or gaps present in the wall cracks. As I was not..."
  },
  {
    "givenBy": "Saloni",
    "date": "26th Aug 2024",
    "title": "GHF Builder",
    "description": "One day while taking a shower, I noticed a small hole in my bathroom wall. My dad suggested that I use white cement to patch the holes or gaps present in the wall cracks. As I was not..."
  },
  {
    "givenBy": "Saloni",
    "date": "26th Aug 2024",
    "title": "GHF Builder",
    "description": "One day while taking a shower, I noticed a small hole in my bathroom wall. My dad suggested that I use white cement to patch the holes or gaps present in the wall cracks. As I was not..."
  },
  
]
const Testimonials = () => {
  return (
   <div>
    <div className=' text-center'>
        <div className=' text-3xl font-bold'>Testimonials</div>
      </div>
    <div className="flex p-8 gap-6 overflow-x-auto ">
         {data.map((cardData, index) => (
      <Cards key={index} data={cardData} />
    ))}
   </div>
   </div>
  )
}

export default Testimonials
