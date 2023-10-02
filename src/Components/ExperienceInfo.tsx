import React from 'react';
import EducationInfoData from './EducationInfoData';


const ExperienceInfo: React.FC = () => {
  return (
    <div className='mb-8'>
        <div className='bg-white p-6 rounded-lg'>
            <div>
                <p className='text-black font-semibold text-sm font-poppins mb-8'>
                     Experince  
                </p >
                <div className='grid grid-cols-1 gap-8  '>
                    <EducationInfoData
                        data ={{
                            logo: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M1.6665 16.6667H18.3332M5.83317 8.33333H9.1665M11.6665 16.6667H16.6665V10C16.6665 9.22343 16.6664 8.83513 16.5396 8.52885C16.3704 8.12047 16.046 7.79602 15.6376 7.62687C15.3314 7.5 14.9433 7.5 14.1667 7.5C13.3901 7.5 13.0018 7.5 12.6956 7.62687C12.2872 7.79602 11.9625 8.12047 11.7934 8.52885C11.6665 8.83513 11.6665 9.22343 11.6665 10V16.6667ZM11.6665 16.6667V5.16663C11.6665 4.23321 11.6667 3.76655 11.485 3.41003C11.3252 3.09643 11.0699 2.84144 10.7563 2.68166C10.3998 2.5 9.93342 2.5 9 2.5H6C5.06658 2.5 4.59952 2.5 4.243 2.68166C3.9294 2.84144 3.67462 3.09643 3.51483 3.41003C3.33317 3.76655 3.33317 4.23321 3.33317 5.16663V16.6667H11.6665ZM5.83317 5.83333L9.1665 5.83333" stroke="#0B0B0B" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>,
                            degree: 'Bachelor in Chemistry',
                            school: 'King Saud University'
                        }}

                    />
                    <EducationInfoData
                        data ={{
                            logo: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M1.6665 16.6667H18.3332M5.83317 8.33333H9.1665M11.6665 16.6667H16.6665V10C16.6665 9.22343 16.6664 8.83513 16.5396 8.52885C16.3704 8.12047 16.046 7.79602 15.6376 7.62687C15.3314 7.5 14.9433 7.5 14.1667 7.5C13.3901 7.5 13.0018 7.5 12.6956 7.62687C12.2872 7.79602 11.9625 8.12047 11.7934 8.52885C11.6665 8.83513 11.6665 9.22343 11.6665 10V16.6667ZM11.6665 16.6667V5.16663C11.6665 4.23321 11.6667 3.76655 11.485 3.41003C11.3252 3.09643 11.0699 2.84144 10.7563 2.68166C10.3998 2.5 9.93342 2.5 9 2.5H6C5.06658 2.5 4.59952 2.5 4.243 2.68166C3.9294 2.84144 3.67462 3.09643 3.51483 3.41003C3.33317 3.76655 3.33317 4.23321 3.33317 5.16663V16.6667H11.6665ZM5.83317 5.83333L9.1665 5.83333" stroke="#0B0B0B" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>,
                            degree: 'Bachelor in Chemistry',
                            school: 'King Saud University'
                        }}
                        border={true}
                    />
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExperienceInfo