import React from 'react';
import { Links } from '../Users';



const UserInfoLinks: React.FC = () => {
  return (
    <div className='pl-6 flex mb-6' >
        <ul className='flex flex-1 justify-between items-center'>
            {
                Links.map((link, index) => {
                    return (
                        <li key={index} className={`${index === 0? 'border-b-2 border-text-color-blue text-text-color-blue': 'text-black'} h-8 px-4 text-center font-medium text-sm font-poppins `}>{link}</li>
                    )
                })
            }
              
        </ul>
        <span className='p-2 flex items-center justify-center bg-white rounded-md'>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M5.625 3.125L10 7.5L5.625 11.875" stroke="#AEACAC" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span> 
    </div>
  )
}

export default UserInfoLinks