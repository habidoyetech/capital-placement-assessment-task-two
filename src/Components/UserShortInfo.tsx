import React from 'react';
import { UserData } from '../models';
import { useUser } from '../Context/SelectUser';

interface UserInfoProps {
    user: UserData
    onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
    index: number
}


const UserShortInfo: React.FC<UserInfoProps> = ({user, index, onClick}) => {

    const {userId} = useUser();
  return (
    <div className='w-full flex items-center space-x-5 border-b py-2 '>
        <div>
            <input type="checkbox" className='' />
        </div>
        <div className={`${index===userId ? 'bg-primary-bg': ''} w-[90%] hover:bg-primary-bg rounded-xl p-4 cursor-pointer`} onClick={onClick} >
            <div className='flex space-x-5 items-center w-full' >
                <div>
                    <div className='py-3.5 px-4 bg-picture-background-two rounded-full'>
                        <h4 className='text-xl font-bold font-poppins text-profile-text-color'>{`${user.firstName.charAt(0)}${user.lastName.charAt(0)} `}</h4>
                    </div>
                </div>
                <div className='w-full '>
                    <h4 className='text-black-color font-poppins text-sm font-semibold mb-3'>{`${user.firstName} ${user.middleName} ${user.lastName}`}</h4>
                    <div className='text-black-color font-normal text-xs mb-3'>{user.nationality}</div>
                    <div className='w-full flex mb-2 '>
                        <span className='truncate max-w-[55%] text-black-color font-poppins text-xs font-light'>{user.education.degree}</span>
                        <span className='text-black-color font-poppins text-xs font-light'>{`(${user.education.from.split(' ')[1]} - ${user.education.to.split(' ')[1]})`}</span>
                    </div>
                    <div>
                        {
                            user.hashtags.map((tag:string, index) =>  {
                                return (
                                    <span key={index} className='text-hash-text-color mr-2 text-[8px] font-normal'>{tag}</span>
                                )
                            })
                        }    
                    </div>
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
            </div>
        </div>
        
    </div>
  )
}

export default UserShortInfo