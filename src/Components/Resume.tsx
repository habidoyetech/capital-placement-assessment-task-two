import React from 'react';
import { Input } from 'antd';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';

const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div  className='flex no-underline space-x-10 py-2 items-center' rel="noopener noreferrer" >
          <input type="checkbox" name='paragraph' id='paragraph'/>
          <label htmlFor="paragraph" className='pr-16 text-sm font-normal text-black font-poppins'>
            Paragraph
          </label>
        </div>
      ),
    },
    {
        key: '2',
        label: (
          <div  className='flex no-underline space-x-10 py-2 items-center' rel="noopener noreferrer" >
            <input type="checkbox" name='yesorno' id='yesorno'/>
            <label htmlFor="yesorno" className='pr-16 text-sm font-normal text-black font-poppins'>
              Yes/No
            </label>
          </div>
        ),
    },
    {
        key: '3',
        label: (
          <div  className='flex no-underline space-x-10 py-2 items-center' rel="noopener noreferrer" >
            <input type="checkbox" name='shortanswer' id='shortanswer'/>
            <label htmlFor="shortanswer" className='pr-16 text-sm font-normal text-black font-poppins'>
              Short Answer
            </label>
          </div>
        ),
      },
      {
        key: '4',
        label: (
          <div  className='flex no-underline space-x-10 py-2 items-center' rel="noopener noreferrer" >
            <input type="checkbox" name='dropdown' id='dropdown'/>
            <label htmlFor="dropdown" className='pr-16 text-sm font-normal text-black font-poppins'>
              Dropdown Select
            </label>
          </div>
        ),
      },
      {
        key: '5',
        label: (
          <div  className='flex no-underline space-x-10 py-2 items-center' rel="noopener noreferrer" >
            <input type="checkbox" name='multiple' id='multiple'/>
            <label htmlFor="multiple" className='pr-16 text-sm font-normal text-black font-poppins'>
              Multiple Choice
            </label>
          </div>
        ),
      },
      {
        key: '6',
        label: (
          <div  className='flex no-underline space-x-10 py-2 items-center' rel="noopener noreferrer" >
            <input type="checkbox" name='date' id='date'/>
            <label htmlFor="date" className='pr-16 text-sm font-normal text-black font-poppins'>
              Date
            </label>
          </div>
        ),
      },
      {
        key: '7',
        label: (
          <div  className='flex no-underline space-x-10 py-2 items-center' rel="noopener noreferrer" >
            <input type="checkbox" name='number' id='number'/>
            <label htmlFor="number" className='pr-16 text-sm font-normal text-black font-poppins'>
              Number
            </label>
          </div>
        ),
      },
      {
        key: '8',
        label: (
          <div  className='flex no-underline space-x-10 py-2 items-center' rel="noopener noreferrer" >
            <input type="checkbox" name='file' id='file'/>
            <label htmlFor="file" className='pr-16 text-sm font-normal text-black font-poppins'>
              File Upload
            </label>
          </div>
        ),
      },
      {
        key: '9',
        label: (
          <div  className='flex no-underline space-x-10 py-2 items-center' rel="noopener noreferrer" >
            <input type="checkbox" name='video' id='video'/>
            <label htmlFor="video" className='pr-16 text-sm font-normal text-black font-poppins'>
              Video
            </label>
          </div>
        ),
      },
  ];

const Resume: React.FC = () => {

   
  return (
    <>
    
    <div className='mb-8'>
        <div className='bg-white p-6 rounded-lg'>
            <div className='flex justify-between'>
                <p className='text-black font-semibold text-sm font-poppins mb-8 text-center pt-4'>
                     Resume  
                </p >
                <div className='flex items-center space-x-2'>
                    <div className='border shadow-shadow-low border-[#ECECEC] p-2 flex items-center rounded-lg '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M2.98924 11.4824C4.47211 12.9566 7.05819 15 10.0004 15C12.9426 15 15.5284 12.9566 17.0113 11.4824L17.012 11.4817C17.4029 11.0931 17.5986 10.8985 17.7231 10.5169C17.812 10.2445 17.812 9.75549 17.7231 9.48313C17.5986 9.10146 17.4029 8.90689 17.0119 8.51821L17.0113 8.51759C15.5284 7.0434 12.9426 5 10.0004 5C7.05819 5 4.47211 7.0434 2.98924 8.51759C2.59786 8.90669 2.40215 9.10125 2.27757 9.48313C2.18873 9.75549 2.18873 10.2445 2.27757 10.5169C2.40214 10.8987 2.59784 11.0933 2.98919 11.4823L2.98924 11.4824Z" stroke="#0B0B0B" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className='border shadow-shadow-low border-[#ECECEC] p-2 flex items-center rounded-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M9.99984 10L9.99984 15M9.99984 15L12.4998 13.3333M9.99984 15L7.49984 13.3333M15.8333 7.5H13.5C12.5666 7.5 12.0995 7.49997 11.743 7.31832C11.4294 7.15853 11.1746 6.90358 11.0148 6.58997C10.8332 6.23345 10.8332 5.76675 10.8332 4.83333V2.5M15.8332 14.8333V7.77125C15.8332 7.3636 15.8328 7.15974 15.7868 6.96793C15.746 6.79787 15.6788 6.63531 15.5874 6.48619C15.4843 6.318 15.3406 6.17387 15.0523 5.88562L12.4478 3.28105C12.1595 2.9928 12.0154 2.84869 11.8472 2.74562C11.698 2.65423 11.5355 2.58688 11.3655 2.54605C11.1737 2.5 10.9698 2.5 10.5621 2.5H6.83333C5.89991 2.5 5.43285 2.5 5.07633 2.68166C4.76273 2.84144 4.50795 3.09643 4.34816 3.41003C4.1665 3.76655 4.1665 4.23326 4.1665 5.16668V14.8333C4.1665 15.7668 4.1665 16.2335 4.34816 16.59C4.50795 16.9036 4.76273 17.1585 5.07633 17.3183C5.43285 17.5 5.89991 17.5 6.83333 17.5H13.1667C14.1001 17.5 14.5665 17.5 14.923 17.3183C15.2366 17.1585 15.4919 16.9036 15.6517 16.59C15.8333 16.2335 15.8332 15.7668 15.8332 14.8333Z" stroke="#0B0B0B" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='h-[910px] bg-[#F1F1F1]'>

            </div>
        </div>
    </div>   
    <div className='mb-8'>
        <div className='bg-white p-6 rounded-lg'>
            <div className='flex justify-between'>
                <p className='text-black font-semibold text-sm font-poppins mb-8 text-center pt-4'>
                     Additional Questions  
                </p >
                <div className='flex items-center space-x-2'>
                    <Dropdown menu={{ items }} placement="bottomLeft">
                        <Button style={{paddingRight: '120px'}} >Sort</Button>
                    </Dropdown>
                </div>
            </div>
            <div className='h-[910px]'>
                <div className='px-4 flex gap-2 mb-8'>
                    <div className='pt-14'>
                        <span className='p-1.5   bg-[#F1CC04] flex rounded-full w-2 '></span>
                    </div>
                    <div className='flex-1'>
                        <div className='border-b pb-1'>
                            <span className='bg-[#FFFBE4] px-2.5 py-2 rounded-t-lg text-[#F1CC04] font-poppins text-[8px] font-normal'>Short Answer</span>
                        </div>
                        <div className='my-6'>
                            <p className='text-sm font-light font-poppins'>What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply</p>
                        </div>
                        <div>
                            <div className='bg-[#F8FAFF] p-4 rounded-lg text-[#216C84] text-xs'>
                                Dorem ipsum dolor sit amet, consectetur adipiscing elit
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='px-4 flex gap-2 mb-8'>
                    <div className='pt-14'>
                        <span className='p-1.5   bg-[#F1CC04] flex rounded-full w-2 '></span>
                    </div>
                    <div className='flex-1'>
                        <div className='border-b pb-1'>
                            <span className='bg-[#FFFBE4] px-2.5 py-2 rounded-t-lg text-[#F1CC04] font-poppins text-[8px] font-normal'>Short Answer</span>
                        </div>
                        <div className='my-6'>
                            <p className='text-sm font-light font-poppins'>What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply</p>
                        </div>
                        <div>
                            <div className='bg-[#F8FAFF] p-4 rounded-lg text-[#216C84] text-xs'>
                            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                            

                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Resume