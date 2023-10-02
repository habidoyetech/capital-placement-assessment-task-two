import React from 'react';

interface EducationInfoDataProps {
    logo: HTMLElement & SVGAElement | any;
    degree: string,
    school: string
}

interface dataProps {
    data: EducationInfoDataProps,
    border?: boolean
}

const EducationInfoData: React.FC<dataProps> = ({data, border}) => {
  return (
    <div className={`flex items-center gap-5 pb-8 ${border ? '': 'border-b'}`}>
        <div>
            <div className='border border-#ECECEC p-2 rounded-lg gap-3'>
                {data.logo}
            </div>  
        </div>
        <div className='flex flex-col items-center space-y-2'>
            <div className='w-full'>
                <span className=' text-[#0B0B0B]   font-poppins font-medium text-sm'>{data.degree}</span>
            </div>
            <div className='w-full text-sm font-poppins '>
                <span className='text-[#5F5F5F] text-left mr-2 font-poppins font-normal text-sm'>{data.school}</span>
                <span className='text-[#B8B8B8] font-light mr-2'>|</span>
                <span className='text-[#B8B8B8] font-light mr-2'>Saudi Arabia</span>
                <span className='text-[#B8B8B8] font-light mr-2'>|</span>
                <span className='text-[#B8B8B8] font-light'>Jan 2022 - Jan 2023</span>
            </div>
        </div>
    </div>
  )
}

export default EducationInfoData