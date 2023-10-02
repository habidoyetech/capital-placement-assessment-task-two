import React from 'react'

interface PersonalInfoDataProps {
    logo: HTMLElement & SVGAElement | any;
    name: string,
    answer: string
}

interface dataProps {
    data: PersonalInfoDataProps
}

const PersonalInfoData: React.FC<dataProps> = ({data}) => {
  return (
    <div className='flex items-center gap-3'>
        <div>
            <div className='border border-#ECECEC p-2 rounded-lg gap-3'>
                {data.logo}
            </div>  
        </div>
        <div className='flex flex-col items-center'>
            <div className='w-full'>
                <span className='text-[#5F5F5F] font-poppins font-normal text-sm'>{data.name}</span>
            </div>
            <div className='w-full'>
                <span className='text-[#0B0B0B] text-left font-poppins font-medium text-sm'>{data.answer}</span>
            </div>
        </div>
    </div>
  )
}

export default PersonalInfoData