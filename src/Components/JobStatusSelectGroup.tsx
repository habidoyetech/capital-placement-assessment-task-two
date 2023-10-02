import React from 'react'
import Separator from './Separator'

const JobStatusSelectGroup: React.FC = () => {
  return (
    <>
        <div className='h-12'>
           <div className='w-full h-full bg-brand-white rounded-[8px]  px-2 space-x-3 flex items-center cursor-pointer'>
                <div className='flex space-x-2'>
                    <div className='h-full w-12'>
                        <div className='rounded-full'>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="16" fill="#F4F7FB"/>
                                <path d="M18.03 29.091C17.3973 29.091 16.8253 28.9827 16.314 28.766C15.8113 28.5493 15.4127 28.2373 15.118 27.83C14.8233 27.4227 14.6717 26.9417 14.663 26.387H16.613C16.639 26.7597 16.769 27.0543 17.003 27.271C17.2457 27.4877 17.575 27.596 17.991 27.596C18.4157 27.596 18.7493 27.4963 18.992 27.297C19.2347 27.089 19.356 26.8203 19.356 26.491C19.356 26.2223 19.2737 26.0013 19.109 25.828C18.9443 25.6547 18.7363 25.5203 18.485 25.425C18.2423 25.321 17.9043 25.2083 17.471 25.087C16.8817 24.9137 16.4007 24.7447 16.028 24.58C15.664 24.4067 15.3477 24.151 15.079 23.813C14.819 23.4663 14.689 23.007 14.689 22.435C14.689 21.8977 14.8233 21.4297 15.092 21.031C15.3607 20.6323 15.7377 20.329 16.223 20.121C16.7083 19.9043 17.263 19.796 17.887 19.796C18.823 19.796 19.5813 20.0257 20.162 20.485C20.7513 20.9357 21.0763 21.5683 21.137 22.383H19.135C19.1177 22.071 18.9833 21.8153 18.732 21.616C18.4893 21.408 18.1643 21.304 17.757 21.304C17.4017 21.304 17.1157 21.395 16.899 21.577C16.691 21.759 16.587 22.0233 16.587 22.37C16.587 22.6127 16.665 22.8163 16.821 22.981C16.9857 23.137 17.185 23.267 17.419 23.371C17.6617 23.4663 17.9997 23.579 18.433 23.709C19.0223 23.8823 19.5033 24.0557 19.876 24.229C20.2487 24.4023 20.5693 24.6623 20.838 25.009C21.1067 25.3557 21.241 25.8107 21.241 26.374C21.241 26.8593 21.1153 27.31 20.864 27.726C20.6127 28.142 20.2443 28.4757 19.759 28.727C19.2737 28.9697 18.6973 29.091 18.03 29.091ZM24.6389 19.926V29H22.8189V19.926H24.6389ZM33.054 22.734C33.054 23.2193 32.937 23.6743 32.703 24.099C32.4777 24.5237 32.118 24.866 31.624 25.126C31.1387 25.386 30.5234 25.516 29.778 25.516H28.257V29H26.437V19.926H29.778C30.48 19.926 31.078 20.0473 31.572 20.29C32.066 20.5327 32.4344 20.8663 32.677 21.291C32.9284 21.7157 33.054 22.1967 33.054 22.734ZM29.7 24.047C30.2027 24.047 30.5754 23.9343 30.818 23.709C31.0607 23.475 31.182 23.15 31.182 22.734C31.182 21.85 30.688 21.408 29.7 21.408H28.257V24.047H29.7Z" fill="#384A69"/>
                            </svg>
                        </div>
                    </div>
                    <Separator />
                </div>              
                <div className='flex space-x-10 h-full items-center'>
                    <div className='text-text-color-dark-blue font-poppins text-base font-medium'>Opportunity Browsing</div>
                    <div className=' space-x-5 flex h-full '>
                        <Separator/>
                        <div className='flex items-center text-base font-medim font-poppins text-text-color-dark-blue'>
                            <div>2225</div>
                        </div>
                        <Separator />
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 10L12 14L8 10" stroke="#384A69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                
                
            </div>
        </div>
    </>
  )
}

export default JobStatusSelectGroup