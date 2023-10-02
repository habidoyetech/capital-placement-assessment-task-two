import React, {useEffect, useState} from 'react';
import profilepics from '../assets/images/profilepics.png';
import { usersData } from '../Users';
import { useUser } from '../Context/SelectUser';
import { UserData } from '../models';

const UserInfoHead = () => {
    const {userId} = useUser()
    
    const [user, setUser] = useState<UserData>(usersData[0])

    useEffect(() => {
        setUser(usersData[userId])
        
    }, [userId])
  return (
    <div className='bg-white font-poppins w-full py-6 px-4 mb-8 rounded-md'>
        <div className='flex space-x-6'>
            <div>
                <img src={profilepics} alt="Profile" className='w-24 h-24' />
            </div>
            <div className='flex gap-3 flex-col justify-center flex-1 '>
                <div className='flex gap-2 items-center'>
                    <div className='text-black-color font-poppins text-sm font-semibold'>{`${user.firstName} ${user.middleName} ${user.lastName}`}</div>
                    <div>
                        {
                            user.tags.map((tag:string, index) => {
                                return (
                                    <span key={index}  className='rounded-3xl mr-3 bg-brand-primary px-2.5 py-0.5 text-[8px]'>{tag}</span>
                                )
                            })
                        }
                        
                    </div>
                    
                    
                    
                </div>
                <div>
                    <div className='text-black-color text-[11px] font-poppins font-light flex gap-2' >
                        <span className=''>{user.nationality}</span> <span>|</span> 
                        <span className=''>aaliyas@gmail.com</span> <span>|</span> 
                        <span className=''>+00 000 000 0000</span>
                    </div>
                </div>
                <div className='flex'>
                        {
                            user.hashtags.map((tag:string, index) =>  {
                                return (
                                    <span key={index} className='text-hash-text-color flex gap-2 mr-2 bg-brand-primary rounded-lg px-2 py-1 text-[9px] font-normal'>
                                        {tag}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M9.5 3.205L8.795 2.5L6 5.295L3.205 2.5L2.5 3.205L5.295 6L2.5 8.795L3.205 9.5L6 6.705L8.795 9.5L9.5 8.795L6.705 6L9.5 3.205Z" fill="#D8D8D8"/>
                                        </svg>
                                    </span>
                                )
                            })
                        }   
                    
                    <div className='flex items-center'>
                        <div >
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <g clip-path="url(#clip0_1004_2192)">
                                <path d="M3.33333 4.65C3.14003 4.65 2.98333 4.8067 2.98333 5C2.98333 5.1933 3.14003 5.35 3.33333 5.35V4.65ZM6.66667 5.35C6.85997 5.35 7.01667 5.1933 7.01667 5C7.01667 4.8067 6.85997 4.65 6.66667 4.65V5.35ZM4.65 6.66667C4.65 6.85997 4.8067 7.01667 5 7.01667C5.1933 7.01667 5.35 6.85997 5.35 6.66667H4.65ZM5.35 3.33333C5.35 3.14003 5.1933 2.98333 5 2.98333C4.8067 2.98333 4.65 3.14003 4.65 3.33333H5.35ZM5 8.4C3.12223 8.4 1.6 6.87777 1.6 5H0.9C0.9 7.26437 2.73563 9.1 5 9.1V8.4ZM1.6 5C1.6 3.12223 3.12223 1.6 5 1.6V0.9C2.73563 0.9 0.9 2.73563 0.9 5H1.6ZM5 1.6C6.87777 1.6 8.4 3.12223 8.4 5H9.1C9.1 2.73563 7.26437 0.9 5 0.9V1.6ZM8.4 5C8.4 6.87777 6.87777 8.4 5 8.4V9.1C7.26437 9.1 9.1 7.26437 9.1 5H8.4ZM3.33333 5.35H6.66667V4.65H3.33333V5.35ZM5.35 6.66667V3.33333H4.65V6.66667H5.35Z" fill="#9AA6AC"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1004_2192">
                                    <rect width="10" height="10" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <span className='text-[#9AA6AC] font-poppins font-normal text-[10px]'>Add tag</span>
                    </div>

                </div>
            </div>
            <div>
                <div className='flex py-2 pl-2 pr-4 shadow-brand-shadow rounded-2xl justify-between space-x-9 items-center'>
                    <div className='font-medium text-sm'>Overall Score</div>
                    <div className='py-1 px-2.5 bg-brand-primary text-sm font-medium rounded-full'>7</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserInfoHead