import React from 'react'
import Separator from './Separator'

const QualifiedTask = () => {
  return (
    <>
        <div className='h-12'>
            <div className='w-full h-full bg-brand-white rounded-t-lg  px-4 space-x-4 flex cursor-pointer font-poppins'>
                <div className='flex items-center'>
                    <div>
                        <input type="checkbox" name="" id="" />
                    </div>
                    
                </div>
                
                <Separator/>
                
                
                <div className='flex items-center'>
                    <span className='font-poppins text-sm text-text-color-blue font-medium mr-1'>
                        Qualified
                    </span>
                    <span className='py-0.5 px-1.5 rounded-full bg-brand-primary text-text-color-blue text-xs'>247</span>
                </div>
                <Separator/>
                <div className='flex items-center'>
                    <span className='font-poppins text-sm font-medium mr-1'>
                        Task
                    </span>
                    <span className='py-0.5 px-1.5 rounded-full text-xs bg-gray-100 '>24</span>
                </div>
                <Separator/>
                <div className='flex items-center'>
                    <span className='font-poppins text-sm font-medium mr-1'>
                        Dequalified
                    </span>
                    <span className='py-0.5 px-1.5 rounded-full text-xs bg-gray-100 '>24</span>
                </div>
            </div>

        </div>
    </>
  )
}

export default QualifiedTask