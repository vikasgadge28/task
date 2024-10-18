import React from 'react';
import Form from  './Form'

const FormSection = () => {
  return (
    <div className='text-xl font-medium p-8 ml-7 space-y-6 '>
       <div className='text-2xl'>We are based in <span className="text-blue-600 ">Bhopal</span>
       </div>
       <div className='flex gap-24'>
        <div>
              <div className="bg-blue-50 p-4 rounded-lg shadow w-[25rem] h-48 mb-7">
          <h2 className="text-2xl font-bold ">Support</h2>
          <p className="mt-2">
            <span role="img" aria-label="phone">📞</span> 011-69290723
          </p>
          <p className="mt-2">
            <span role="img" aria-label="email">✉️</span> support@nextopson.in
          </p>
              <p className="mt-2 text-blue-600">
            We Are Available 24*7 on support.
             </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg shadow w-[25rem] h-48 ">
          <h2 className="text-2xl font-bold">Corporate office</h2>
          <p className="mt-2">
            <span role="img" aria-label="office">🏢</span> Nextopson, C1 Indus Apartment,
            Shahpura, Bhopal, Madhya Pradesh-462026
          </p>
             </div>
        </div>

        <div>
          <Form/>
        </div>
       </div>
    </div>
  )
}

export default FormSection
